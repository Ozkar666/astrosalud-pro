/**
 * AstroSalud Pro - Aplicación Principal
 * Motor: Swiss Ephemeris (@swisseph/browser)
 */

import { NatalChart } from './astro/engine.js';
import { generateChartSVG } from './astro/chart-renderer.js';
import { searchCities, estimateTimezoneOffset } from './utils/geocoder.js';
import { analyzeHealthTendencies, analyzeTransits, setAnalysisLanguage, getTranslatedPracticalAdvice, translatePlanet, translateSign } from './health/analysis.js';
import { STRINGS } from './i18n/translations.js';
import { initSentry, captureError } from './utils/sentry.js';

initSentry(window.SENTRY_DSN);

function sanitizeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function detectBrowserLanguage() {
    const supported = { es: 'es', en: 'en', 'pt-BR': 'pt-BR', pt: 'pt-BR', 'pt-PT': 'pt-BR', fr: 'fr', de: 'de', it: 'it', ru: 'ru', uk: 'uk', sv: 'sv', ja: 'ja', 'zh-CN': 'zh-CN', zh: 'zh-CN', ko: 'ko' };
    const langs = navigator.languages || [navigator.language || navigator.userLanguage];
    for (const lang of langs) {
        if (supported[lang]) return supported[lang];
        const base = lang.split('-')[0];
        if (supported[base]) return supported[base];
    }
    return 'es';
}

let currentLang = detectBrowserLanguage();
let t = (key, params) => {
    let str = STRINGS[currentLang]?.[key] || STRINGS['es']?.[key] || STRINGS[currentLang]?.analysis?.[key] || STRINGS['es']?.analysis?.[key] || key;
    if (params) Object.entries(params).forEach(([k, v]) => { str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v); });
    return str;
};

function applyTranslations() {
    document.documentElement.lang = currentLang === 'pt-BR' ? 'pt' : currentLang === 'zh-CN' ? 'zh' : currentLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (STRINGS[currentLang]?.[key]) el.textContent = STRINGS[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (STRINGS[currentLang]?.[key]) el.placeholder = STRINGS[currentLang][key];
    });
    document.title = t('title') + ' - ' + t('subtitle');
}

let chartEngine = null;
let lastChart = null;
let lastHealth = null;
let lastTransitAnalysis = null;
let lastTransitData = null;
let lastBirthPlace = '';
let lastMedicalHistory = null;
let selectedCity = null;
let searchTimeout = null;

document.addEventListener('DOMContentLoaded', async () => {
  try {
    chartEngine = new NatalChart();
    await chartEngine.init();

    const langSelect = document.getElementById('language');
    langSelect.value = currentLang;
    setAnalysisLanguage(currentLang);
    applyTranslations();

    langSelect.addEventListener('change', (e) => {
      currentLang = e.target.value;
      setAnalysisLanguage(currentLang);
      applyTranslations();
      if (lastChart) {
        const health = analyzeHealthTendencies(lastChart, lastMedicalHistory);
        lastHealth = health;
        renderFullReport(health, lastChart, lastBirthPlace);
      }
    });

    document.getElementById('birthForm').addEventListener('submit', handleSubmit);
    document.getElementById('transitBtn').addEventListener('click', handleTransits);
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('transitDate').value = today;

    setupAutocomplete();
    setupTimezoneSelect();
  } catch (error) {
    captureError(error, { phase: 'initialization' });
    console.error('App initialization error:', error);
  }
});

function setupAutocomplete() {
    const input = document.getElementById('birthPlace');
    const dropdown = document.getElementById('placeAutocomplete');
    const msgEl = document.getElementById('locationMessage');
    const manualSection = document.getElementById('manualCoordsSection');
    const latInput = document.getElementById('birthLat');
    const lonInput = document.getElementById('birthLon');
    const tzInput = document.getElementById('birthTz');
    const ccInput = document.getElementById('birthCountryCode');

    let selectedIndex = -1;
    let currentResults = [];

    input.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        const query = input.value.trim();

        if (query.length < 2) {
            dropdown.classList.remove('active');
            dropdown.innerHTML = '';
            selectedCity = null;
            latInput.value = '';
            lonInput.value = '';
            tzInput.value = '';
            ccInput.value = '';
            msgEl.style.display = 'none';
            manualSection.style.display = 'none';
            return;
        }

        searchTimeout = setTimeout(async () => {
            dropdown.innerHTML = '<div class="autocomplete-loading">' + t('searching') + '</div>';
            dropdown.classList.add('active');
            selectedIndex = -1;

            currentResults = await searchCities(query);

            if (currentResults.length === 0) {
                dropdown.innerHTML = '<div class="autocomplete-loading">' + t('noResults') + '</div>';
                showLocationError(query);
                return;
            }

            dropdown.innerHTML = currentResults.map((r, i) => `
                <div class="autocomplete-item" data-index="${i}">
                    <div class="ac-name">${sanitizeHTML(r.name)}</div>
                    <div class="ac-detail">${r.state ? sanitizeHTML(r.state) + ', ' : ''}${sanitizeHTML(r.country)}</div>
                </div>
            `).join('');

            dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
                item.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    selectCity(currentResults[parseInt(item.dataset.index)]);
                });
            });
        }, 400);
    });

    input.addEventListener('keydown', (e) => {
        const items = dropdown.querySelectorAll('.autocomplete-item');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, 0);
            updateSelection(items);
        } else if (e.key === 'Enter' && selectedIndex >= 0 && items[selectedIndex]) {
            e.preventDefault();
            selectCity(currentResults[selectedIndex]);
        } else if (e.key === 'Escape') {
            dropdown.classList.remove('active');
        }
    });

    input.addEventListener('blur', () => {
        setTimeout(() => dropdown.classList.remove('active'), 200);
    });

    function updateSelection(items) {
        items.forEach((item, i) => {
            item.classList.toggle('selected', i === selectedIndex);
        });
    }

    function selectCity(city) {
        selectedCity = city;
        input.value = city.name + ', ' + city.country;
        latInput.value = city.lat;
        lonInput.value = city.lon;
        const tz = estimateTimezoneOffset(city.lon);
        tzInput.value = tz;
        ccInput.value = city.countryCode;
        dropdown.classList.remove('active');

        msgEl.className = 'location-message success';
        msgEl.innerHTML = `${sanitizeHTML(city.name)}, ${city.state ? sanitizeHTML(city.state) + ', ' : ''}${sanitizeHTML(city.country)} — Lat: ${city.lat.toFixed(4)}°, Lon: ${city.lon.toFixed(4)}°, TZ: UTC${tz >= 0 ? '+' : ''}${tz}`;
        msgEl.style.display = 'block';
        manualSection.style.display = 'none';
    }

    document.getElementById('useManualCoords').addEventListener('click', () => {
        const lat = parseFloat(document.getElementById('manualLat').value);
        const lon = parseFloat(document.getElementById('manualLon').value);
        const tz = parseInt(document.getElementById('manualTz').value);

        if (isNaN(lat) || isNaN(lon)) {
            alert(t('coordsRequired'));
            return;
        }

        const name = input.value || 'Custom Location';
        selectedCity = { name, state: '', country: '', lat, lon, tz, countryCode: '' };
        latInput.value = lat;
        lonInput.value = lon;
        tzInput.value = tz;
        ccInput.value = '';

        msgEl.className = 'location-message success';
        msgEl.innerHTML = `${sanitizeHTML(name)} — Lat: ${lat.toFixed(4)}°, Lon: ${lon.toFixed(4)}°, TZ: UTC${tz >= 0 ? '+' : ''}${tz}`;
        msgEl.style.display = 'block';
        manualSection.style.display = 'none';
    });
}

function setupTimezoneSelect() {
    const sel = document.getElementById('manualTz');
    for (let offset = -12; offset <= 14; offset++) {
        const opt = document.createElement('option');
        opt.value = offset;
        opt.textContent = `UTC${offset >= 0 ? '+' : ''}${offset}:00`;
        if (offset === -6) opt.selected = true;
        sel.appendChild(opt);
    }
}

function showLocationError(query) {
    const msgEl = document.getElementById('locationMessage');
    const manualSection = document.getElementById('manualCoordsSection');
    msgEl.className = 'location-message warning';
    msgEl.innerHTML = `${t('cityNotFound', { city: sanitizeHTML(query) })}<br><small>${t('cityNotFoundMsg')}</small>`;
    msgEl.style.display = 'block';
    manualSection.style.display = 'block';
}

async function handleSubmit(e) {
    e.preventDefault();
    const birthDate = document.getElementById('birthDate').value;
    const birthTime = document.getElementById('birthTime').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const houseSystem = document.getElementById('houseSystem').value;
    if (!birthDate || !birthTime || !birthPlace) { alert(t('fillAllFields')); return; }

    const latVal = document.getElementById('birthLat').value;
    const lonVal = document.getElementById('birthLon').value;
    const tzVal = document.getElementById('birthTz').value;

    if (!latVal || !lonVal || !tzVal) {
        showLocationError(birthPlace);
        alert(t('coordsRequired'));
        return;
    }

    const medicalHistory = {
        chronicDiseases: document.getElementById('chronicDiseases').value.trim(),
        recurrentAilments: document.getElementById('recurrentAilments').value.trim(),
        birthDefects: document.getElementById('birthDefects').value.trim(),
        harmfulBehaviors: document.getElementById('harmfulBehaviors').value.trim()
    };
    const hasMedicalData = medicalHistory.chronicDiseases || medicalHistory.recurrentAilments || medicalHistory.birthDefects || medicalHistory.harmfulBehaviors;

    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';

    try {
        const coords = {
            lat: parseFloat(latVal),
            lon: parseFloat(lonVal),
            tz: parseInt(tzVal),
            name: birthPlace
        };
        const [year, month, day] = birthDate.split('-').map(Number);
        const [hour, minute] = birthTime.split(':').map(Number);

        const chart = chartEngine.calculate(year, month, day, hour, minute, coords.lat, coords.lon, coords.tz, houseSystem);
        const chartSvg = generateChartSVG(chart);
        document.getElementById('chartSvg').innerHTML = chartSvg;
        renderChartData(chart);

        const health = analyzeHealthTendencies(chart, hasMedicalData ? medicalHistory : null);
        const locationInfo = coords.name ? `${coords.name}, ${birthPlace} (Lat: ${coords.lat.toFixed(4)}°, Lon: ${coords.lon.toFixed(4)}°, TZ: UTC${coords.tz >= 0 ? '+' : ''}${coords.tz})` : birthPlace;

        lastChart = chart;
        lastHealth = health;
        lastBirthPlace = locationInfo;
        lastMedicalHistory = hasMedicalData ? medicalHistory : null;

        renderFullReport(health, chart, locationInfo);

        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        document.getElementById('transitSection').style.display = 'block';

    } catch (err) {
        captureError(err, { phase: 'form-submission', birthDate, birthTime, birthPlace });
        console.error('Error:', err);
        alert(t('errorCalculating') + err.message);
        document.getElementById('loading').style.display = 'none';
    }
}

async function handleTransits() {
    if (!lastChart) { alert(t('generateFirst')); return; }
    const transitDate = document.getElementById('transitDate').value;
    if (!transitDate) { alert(t('selectTransitDate')); return; }

    const [tYear, tMonth, tDay] = transitDate.split('-').map(Number);
    const latVal = document.getElementById('birthLat').value;
    const lonVal = document.getElementById('birthLon').value;
    const tzVal = document.getElementById('birthTz').value;
    const coords = { lat: parseFloat(latVal), lon: parseFloat(lonVal), tz: parseInt(tzVal) };

    try {
        const transitData = chartEngine.calculateTransits(lastChart, tYear, tMonth, tDay, 12, 0, coords.lat, coords.lon, coords.tz);
        const transitAnalysis = analyzeTransits(lastChart, transitData);
        lastTransitAnalysis = transitAnalysis;
        lastTransitData = transitData;
        renderTransitReport(transitAnalysis, transitData);
    } catch (err) {
        captureError(err, { phase: 'transit-calculation', transitDate });
        console.error('Error tránsitos:', err);
        alert(t('errorTransits') + err.message);
    }
}

function renderChartData(chart) {
    const container = document.getElementById('chartData');
    let html = '';

    html += '<table class="data-table compact">';
    html += `<thead><tr><th colspan="3" class="table-title">${t('planets')}</th></tr>`;
    html += '<tr><th></th><th></th><th></th></tr></thead>';
    html += '<tbody>';
    chart.planets.forEach(p => {
        html += `<tr><td class="td-planet">${p.symbol} ${translatePlanet(p.name)}</td><td>${p.signSymbol} ${translateSign(p.sign)}</td><td class="td-right">${p.degree}°${String(p.minute).padStart(2,'0')}'${p.isRetrograde ? ' ℞' : ''}</td></tr>`;
    });
    html += '</tbody></table>';

    html += `<table class="data-table compact"><thead><tr><th colspan="3" class="table-title">${t('houses')}</th></tr></thead>`;
    html += '<tbody>';
    const houseNames = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
    chart.houses.cusps.forEach((c, i) => {
        const label = i === 0 ? 'I Asc' : i === 3 ? 'IV IC' : i === 6 ? 'VII Dsc' : i === 9 ? 'X MC' : houseNames[i];
        html += `<tr><td class="td-planet">${label}</td><td>${c.signSymbol} ${c.sign}</td><td class="td-right">${c.degreeInSign}°${String(c.minuteInSign).padStart(2,'0')}'</td></tr>`;
    });
    html += '</tbody></table>';

    if (chart.aspects.length > 0) {
        html += `<table class="data-table compact"><thead><tr><th colspan="3" class="table-title">${t('aspects')}</th></tr></thead>`;
        html += '<tbody>';
        chart.aspects.slice(0, 15).forEach(a => {
            html += `<tr><td class="td-planet">${a.planet1Name} ${a.symbol} ${a.planet2Name}</td><td>${a.type}</td><td class="td-right">${a.angle.toFixed(1)}°</td></tr>`;
        });
        html += '</tbody></table>';
    }

    container.innerHTML = html;
}

function renderFullReport(health, chart, birthPlace) {
    const container = document.getElementById('healthResults');
    let html = '';
    html += renderGeneralDiagnosis(health, chart, birthPlace);
    if (lastMedicalHistory) {
        html += renderMedicalHistorySection(lastMedicalHistory);
        html += renderCrossReference(health, chart, lastMedicalHistory);
    }
    html += renderSignAnalysis(health.signAnalysis);
    html += renderPlanetAnalysis(health.planetAnalysis);
    html += renderHealthHousesAnalysis(health.healthHousesAnalysis, chart);
    html += renderAspectAnalysis(health.aspectAnalysis);
    html += renderAcuteChronic(health.acuteChronic);
    html += renderBodyRiskZones(health.bodyRiskZones);
    html += renderDiseaseAnalysis(health.detailedDiseases);
    html += renderBiodecodificacionSection(health.biodescodificacionSummary, health.detailedDiseases);
    html += renderDetailedReport(health, chart, birthPlace);
    html += '<div class="section-card" style="text-align:center;margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;"><button class="btn-download" onclick="downloadSummaryPNG()">' + t('downloadPNG') + '</button><button class="btn-download btn-pdf" onclick="downloadSummaryPDF()">' + t('downloadPDF') + '</button></div>';
    container.innerHTML = html;
}

function renderGeneralDiagnosis(health, chart, birthPlace) {
    const v = health.overallVitality;
    const e = health.elementBalance;
    const zones = health.bodyRiskZones;
    const top3 = health.detailedDiseases.slice(0, 3);
    const highR = Object.entries(zones).filter(z => z[1] >= 60);
    const medR = Object.entries(zones).filter(z => z[1] >= 35 && z[1] < 60);
    const avgP = top3.length > 0 ? Math.round(top3.reduce((a, d) => a + d.probability, 0) / top3.length) : 0;
    const zoneNames = { cabeza: t('zoneHead'), cuello: t('zoneNeck'), hombros: t('zoneShoulders'), pecho: t('zoneChest'), estomago: t('zoneStomach'), abdomen: t('zoneAbdomen'), caderas: t('zoneHips'), muslos: t('zoneThighs'), rodillas: t('zoneKnees'), piernas: t('zoneLegs'), pies: t('zoneFeet') };

    let html = '<div class="section-card"><h2>' + t('generalDiagnosis') + '</h2>';
    html += `<div class="location-info"><p><strong>${t('location')}</strong> ${sanitizeHTML(birthPlace)}</p><p><strong>${t('ascendant')}</strong> ${chart.ascendant.symbol} ${chart.ascendant.sign} ${chart.ascendant.degree}°${chart.ascendant.minute}'</p><p><strong>${t('mc')}</strong> ${chart.mc.symbol} ${chart.mc.sign} ${chart.mc.degree}°${chart.mc.minute}'</p></div>`;
    html += '<div class="diagnosis-summary">';
    html += diagCard(t('vitality'), `${v.score}%`, v.level, v.score >= 70 ? '#22c55e' : v.score >= 40 ? '#f59e0b' : '#ef4444');
    html += diagCard(t('dominantElement'), e.dominantElement, t('dominant'), e.dominantElement === 'Fuego' ? '#ef4444' : e.dominantElement === 'Tierra' ? '#22c55e' : e.dominantElement === 'Aire' ? '#60a5fa' : '#818cf8');
    html += diagCard(t('highRisk'), highR.length + '', t('zones'), highR.length >= 3 ? '#ef4444' : highR.length >= 1 ? '#f59e0b' : '#22c55e');
    html += diagCard(t('topRisk'), avgP + '%', t('average'), avgP >= 60 ? '#ef4444' : avgP >= 40 ? '#f59e0b' : '#22c55e');
    html += '</div>';
    html += '<div class="diagnosis-text">';
    html += `<p><strong>${t('vitalityLabel')}</strong> ${v.description}</p>`;
    html += `<p><strong>${t('dominantElement')} (${e.dominantElement}):</strong> ${e.elementData.description}</p>`;
    if (highR.length > 0) { html += '<p><strong>' + t('priorityZones') + '</strong></p><ul>'; highR.forEach(z => { html += `<li><strong>${zoneNames[z[0]]}</strong>: ${z[1]}% <span class="badge badge-red">${t('high')}</span></li>`; }); html += '</ul>'; }
    if (medR.length > 0) { html += '<p><strong>' + t('watchZones') + '</strong></p><ul>'; medR.forEach(z => { html += `<li><strong>${zoneNames[z[0]]}</strong>: ${z[1]}% <span class="badge badge-yellow">${t('medium')}</span></li>`; }); html += '</ul>'; }
    if (top3.length > 0) { html += '<p><strong>' + t('topDiseases') + '</strong></p><ul>'; top3.forEach(d => { html += `<li><strong>${d.name}</strong>: ${d.probability}% - ${d.type} <span class="badge ${d.probability >= 60 ? 'badge-red' : 'badge-yellow'}">${d.severity}</span></li>`; }); html += '</ul>'; }
    html += '</div></div>';
    return html;
}

function diagCard(title, value, label, color) {
    return `<div class="diagnosis-card"><h4>${title}</h4><div class="diagnosis-value" style="color:${color}">${value}</div><div class="diagnosis-label">${label}</div></div>`;
}

function renderMedicalHistorySection(med) {
    let html = '<div class="section-card medical-history-section">';
    html += '<h2>' + t('medicalHistory') + '</h2>';
    html += '<p class="section-subtitle">' + t('medicalReported') + '</p>';

    if (med.chronicDiseases) {
        html += '<div class="medical-item medical-chronic">';
        html += '<p class="medical-item-title">' + t('chronicLabel') + '</p>';
        html += `<p class="medical-item-text">${sanitizeHTML(med.chronicDiseases)}</p>`;
        html += '</div>';
    }
    if (med.recurrentAilments) {
        html += '<div class="medical-item medical-recurrent">';
        html += '<p class="medical-item-title">' + t('recurrentLabel') + '</p>';
        html += `<p class="medical-item-text">${sanitizeHTML(med.recurrentAilments)}</p>`;
        html += '</div>';
    }
    if (med.birthDefects) {
        html += '<div class="medical-item medical-birth">';
        html += '<p class="medical-item-title">' + t('birthDefectsLabel') + '</p>';
        html += `<p class="medical-item-text">${sanitizeHTML(med.birthDefects)}</p>`;
        html += '</div>';
    }
    if (med.harmfulBehaviors) {
        html += '<div class="medical-item medical-behavior">';
        html += '<p class="medical-item-title">' + t('behaviorLabel') + '</p>';
        html += `<p class="medical-item-text">${sanitizeHTML(med.harmfulBehaviors)}</p>`;
        html += '</div>';
    }

    html += '</div>';
    return html;
}

function renderCrossReference(health, chart, med) {
    const crossRef = crossReferenceMedical(chart, health, med);
    let html = '<div class="section-card cross-reference-section">';
    html += '<h2>' + t('crossTitle') + '</h2>';
    html += '<p class="section-subtitle">' + t('crossSubtitle') + '</p>';

    crossRef.forEach(item => {
        html += '<div class="crossref-item">';
        html += `<div class="crossref-header">`;
        html += `<span class="crossref-icon">${item.icon}</span>`;
        html += `<strong>${item.title}</strong>`;
        html += `<span class="crossref-badge crossref-${item.confidence}">${item.confidenceLabel}</span>`;
        html += `</div>`;
        html += `<p class="crossref-astro">${item.astroEvidence}</p>`;
        html += `<p class="crossref-medical">${item.medicalEvidence}</p>`;
        html += `<p class="crossref-conclusion">${item.conclusion}</p>`;
        if (item.recommendation) {
            html += `<p class="crossref-recommendation">${t('recommendation')} ${item.recommendation}</p>`;
        }
        html += '</div>';
    });

    if (crossRef.length === 0) {
        html += '<p>' + t('noCorrelations') + '</p>';
    }

    html += '</div>';
    return html;
}

function crossReferenceMedical(chart, health, med) {
    const results = [];
    const planetMap = {};
    chart.planets.forEach(p => { planetMap[p.name] = p; });
    const ascSign = chart.ascendant.sign;
    const mcSign = chart.mc.sign;

    // Map chronic diseases to body systems
    const DISEASE_KEYWORD_MAP = {
        'hipertensión': { system: 'circulatorio', planet: 'Sol', sign: 'Leo', zone: 'pecho' },
        'presión': { system: 'circulatorio', planet: 'Sol', sign: 'Leo', zone: 'pecho' },
        'diabetes': { system: 'metabólico', planet: 'Júpiter', sign: 'Sagitario', zone: 'abdomen' },
        'asma': { system: 'respiratorio', planet: 'Mercurio', sign: 'Géminis', zone: 'pecho' },
        'respira': { system: 'respiratorio', planet: 'Mercurio', sign: 'Géminis', zone: 'pecho' },
        'corazón': { system: 'circulatorio', planet: 'Sol', sign: 'Leo', zone: 'pecho' },
        'cardía': { system: 'circulatorio', planet: 'Sol', sign: 'Leo', zone: 'pecho' },
        'gastritis': { system: 'digestivo', planet: 'Luna', sign: 'Cáncer', zone: 'estomago' },
        'gástric': { system: 'digestivo', planet: 'Luna', sign: 'Cáncer', zone: 'estomago' },
        'digestiv': { system: 'digestivo', planet: 'Luna', sign: 'Cáncer', zone: 'estomago' },
        'colitis': { system: 'digestivo', planet: 'Luna', sign: 'Cáncer', zone: 'abdomen' },
        'intestinal': { system: 'digestivo', planet: 'Neptuno', sign: 'Piscis', zone: 'abdomen' },
        'articular': { system: 'óseo', planet: 'Saturno', sign: 'Capricornio', zone: 'rodillas' },
        'artritis': { system: 'óseo', planet: 'Saturno', sign: 'Capricornio', zone: 'rodillas' },
        'dolor de espalda': { system: 'óseo', planet: 'Saturno', sign: 'Capricornio', zone: 'cabeza' },
        'lumbar': { system: 'óseo', planet: 'Saturno', sign: 'Capricornio', zone: 'caderas' },
        'tiroides': { system: 'endocrino', planet: 'Venus', sign: 'Tauro', zone: 'cuello' },
        'hormon': { system: 'endocrino', planet: 'Venus', sign: 'Tauro', zone: 'caderas' },
        'migraña': { system: 'nervioso', planet: 'Mercurio', sign: 'Géminis', zone: 'cabeza' },
        'cefalea': { system: 'nervioso', planet: 'Mercurio', sign: 'Géminis', zone: 'cabeza' },
        'ansied': { system: 'nervioso', planet: 'Mercurio', sign: 'Géminis', zone: 'cabeza' },
        'insomnio': { system: 'nervioso', planet: 'Neptuno', sign: 'Piscis', zone: 'cabeza' },
        'depresión': { system: 'nervioso', planet: 'Saturno', sign: 'Capricornio', zone: 'cabeza' },
        'renal': { system: 'urinario', planet: 'Venus', sign: 'Libra', zone: 'abdomen' },
        'riñón': { system: 'urinario', planet: 'Venus', sign: 'Libra', zone: 'abdomen' },
        'vesícula': { system: 'digestivo', planet: 'Júpiter', sign: 'Sagitario', zone: 'estomago' },
        'hígado': { system: 'digestivo', planet: 'Júpiter', sign: 'Sagitario', zone: 'muslos' },
        'alergia': { system: 'inmunológico', planet: 'Neptuno', sign: 'Piscis', zone: 'cabeza' },
        'reumat': { system: 'óseo', planet: 'Saturno', sign: 'Capricornio', zone: 'rodillas' },
        'varice': { system: 'circulatorio', planet: 'Plutón', sign: 'Escorpio', zone: 'piernas' },
        'circulación': { system: 'circulatorio', planet: 'Sol', sign: 'Leo', zone: 'piernas' },
        'embaraz': { system: 'reproductor', planet: 'Luna', sign: 'Cáncer', zone: 'caderas' },
        'menstrua': { system: 'reproductor', planet: 'Luna', sign: 'Cáncer', zone: 'caderas' },
        'ovario': { system: 'reproductor', planet: 'Venus', sign: 'Tauro', zone: 'caderas' },
        'próstata': { system: 'reproductor', planet: 'Marte', sign: 'Aries', zone: 'caderas' },
        'visión': { system: 'sensorial', planet: 'Venus', sign: 'Tauro', zone: 'cabeza' },
        'ojo': { system: 'sensorial', planet: 'Venus', sign: 'Tauro', zone: 'cabeza' },
        'miopía': { system: 'sensorial', planet: 'Venus', sign: 'Tauro', zone: 'cabeza' },
        'pie': { system: 'locomotor', planet: 'Mercurio', sign: 'Virgo', zone: 'pies' },
        'rodilla': { system: 'locomotor', planet: 'Saturno', sign: 'Capricornio', zone: 'rodillas' }
    };

    // Map harmful behaviors to their health consequences
    const BEHAVIOR_MAP = {
        'insomnio': { consequenceKey: 'consequenceInsomnia', planet: 'Neptuno', zone: 'cabeza' },
        'sedentar': { consequenceKey: 'consequenceSedentary', planet: 'Marte', zone: 'piernas' },
        'azúcar': { consequenceKey: 'consequenceSugar', planet: 'Júpiter', zone: 'abdomen' },
        'tabaquis': { consequenceKey: 'consequenceSmoking', planet: 'Saturno', zone: 'pecho' },
        'fumar': { consequenceKey: 'consequenceSmoking', planet: 'Saturno', zone: 'pecho' },
        'alcohol': { consequenceKey: 'consequenceAlcohol', planet: 'Neptuno', zone: 'muslos' },
        'estrés': { consequenceKey: 'consequenceStress', planet: 'Saturno', zone: 'cabeza' },
        'ansied': { consequenceKey: 'consequenceAnxiety', planet: 'Mercurio', zone: 'cabeza' },
        'compu': { consequenceKey: 'consequenceComputer', planet: 'Saturno', zone: 'cuello' },
        'noche': { consequenceKey: 'consequenceNightOwl', planet: 'Luna', zone: 'cabeza' }
    };

    // Helper: check if planet is afflicted in chart
    function isAfflicted(planetName) {
        const p = planetMap[planetName];
        if (!p) return false;
        return chart.aspects.some(a =>
            (a.planet1Name === planetName || a.planet2Name === planetName) &&
            (a.type === 'Cuadratura' || a.type === 'Oposición')
        );
    }

    // Helper: get aspects involving a planet
    function getAspectsOf(planetName) {
        return chart.aspects.filter(a =>
            a.planet1Name === planetName || a.planet2Name === planetName
        );
    }

    // Helper: check if a sign is heavily populated
    function planetsInSign(signName) {
        return chart.planets.filter(p => p.sign === signName);
    }

    // Cross-reference chronic diseases
    if (med.chronicDiseases) {
        const text = med.chronicDiseases.toLowerCase();
        const sysKeyMap = { circulatorio: 'sysCirculatorio', metabólico: 'sysMetabolico', respiratorio: 'sysRespiratorio', digestivo: 'sysDigestivo', óseo: 'sysOseo', endocrino: 'sysEndocrino', nervioso: 'sysNervioso', urinario: 'sysUrinario', inmunológico: 'sysInmunologico', locomotor: 'sysLocomotor', sensorial: 'sysSensorial', reproductor: 'sysReproductor' };
        Object.entries(DISEASE_KEYWORD_MAP).forEach(([keyword, mapping]) => {
            if (text.includes(keyword)) {
                const afflicted = isAfflicted(mapping.planet);
                const p = planetMap[mapping.planet];
                const aspects = getAspectsOf(mapping.planet);
                const inSign = planetsInSign(mapping.sign);

                let confidence = 'baja';
                let confidenceLabel = t('correlationLow');
                let astroEvidence = t('planetRules', { planet: mapping.planet, system: t(sysKeyMap[mapping.system]) });
                let medicalEvidence = t('reportsCondition', { system: t(sysKeyMap[mapping.system]) });

                if (p) {
                    astroEvidence += ' ' + t('inChart', { planet: mapping.planet, sign: p.sign, degree: p.degree, minute: p.minute }) + (p.isRetrograde ? ' ' + t('retrograde') : '') + '.';
                }

                if (afflicted) {
                    confidence = 'alta';
                    confidenceLabel = t('correlationHigh');
                    const tensionAspects = aspects.filter(a => a.type === 'Cuadratura' || a.type === 'Oposición');
                    astroEvidence += ' ' + t('tensionAspect') + ' (' + tensionAspects.map(a => `${a.type} con ${a.planet1Name === mapping.planet ? a.planet2Name : a.planet1Name}`).join(', ') + ')' + t('weakens');
                } else if (aspects.length > 0) {
                    confidence = 'media';
                    confidenceLabel = t('correlationMed');
                    astroEvidence += ' ' + t('hasAspects') + ': ' + aspects.map(a => `${a.type} con ${a.planet1Name === mapping.planet ? a.planet2Name : a.planet1Name}`).join(', ') + '.';
                } else {
                    astroEvidence += ' ' + t('noTension');
                }

                if (inSign.length >= 2) {
                    confidence = 'alta';
                    confidenceLabel = t('correlationHigh');
                    astroEvidence += ' ' + t('nPlanetsIn', { n: inSign.length, sign: mapping.sign });
                }

                const conclusion = afflicted
                    ? t('confirmsVulnerability', { system: t(sysKeyMap[mapping.system]), planet: mapping.planet })
                    : t('showsPredisposition', { system: t(sysKeyMap[mapping.system]) });

                const recAreaKey = mapping.system === 'circulatorio' ? 'recHeart' : mapping.system === 'digestivo' ? 'recDigestion' : mapping.system === 'nervioso' ? 'recNervous' : mapping.system === 'óseo' ? 'recBones' : 'recArea';
                const recommendation = afflicted
                    ? t('reinforce', { planet: mapping.planet }) + ' ' + t(recAreaKey) + '.'
                    : t('maintainHabits');

                results.push({
                    icon: afflicted ? '🔴' : '🟡',
                    title: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} — ${t('systemPrefix')} ${mapping.system}`,
                    confidence,
                    confidenceLabel,
                    astroEvidence,
                    medicalEvidence,
                    conclusion,
                    recommendation
                });
            }
        });
    }

    // Cross-reference birth defects
    if (med.birthDefects) {
        const text = med.birthDefects.toLowerCase();
        // Birth defects relate to Saturn (structure) and the prenatal period
        const saturn = planetMap['Saturno'];
        const saturnAspects = getAspectsOf('Saturno');
        const saturnAfflicted = isAfflicted('Saturno');

        let saturnInfo = '';
        if (saturn) {
            saturnInfo = t('saturnInChart', { sign: saturn.sign, degree: saturn.degree, minute: saturn.minute }) + (saturn.isRetrograde ? ' ' + t('retrograde') : '') + '.';
        }

        const confidence = saturnAfflicted ? 'alta' : saturn ? 'media' : 'baja';
        const confidenceLabel = saturnAfflicted ? t('correlationHigh') : saturn ? t('correlationMed') : t('correlationLow');

        const saturnTensionAspects = saturnAspects.filter(a => a.type === 'Cuadratura' || a.type === 'Oposición');
        results.push({
            icon: saturnAfflicted ? '🔴' : '🟡',
            title: t('saturnTitle'),
            confidence,
            confidenceLabel,
            astroEvidence: `Saturno gobierna la estructura física y las condiciones congénitas. ${saturnInfo} ${saturnAfflicted ? t('saturnTension') + ' (' + saturnTensionAspects.map(a => `${a.type} con ${a.planet1Name === 'Saturno' ? a.planet2Name : a.planet1Name}`).join(', ') + ')' + t('saturnRestriction') : t('saturnNoTension')}`,
            medicalEvidence: t('reports') + ' ' + sanitizeHTML(med.birthDefects),
            conclusion: saturnAfflicted
                ? t('saturnConsistent')
                : t('saturnNoExtreme'),
            recommendation: saturnAfflicted
                ? t('saturnDiscipline')
                : t('saturnReviews')
        });
    }

    // Cross-reference harmful behaviors
    if (med.harmfulBehaviors) {
        const text = med.harmfulBehaviors.toLowerCase();
        Object.entries(BEHAVIOR_MAP).forEach(([keyword, mapping]) => {
            if (text.includes(keyword)) {
                const afflicted = isAfflicted(mapping.planet);
                const p = planetMap[mapping.planet];

                let confidence = 'media';
                let confidenceLabel = t('correlationMed');
                let astroEvidence = t('tendencyAffects', { keyword, consequence: t(mapping.consequenceKey) });

                if (p) {
                    astroEvidence += ' ' + t('inYourChartPlanet', { planet: mapping.planet, sign: p.sign });
                }

                if (afflicted) {
                    confidence = 'alta';
                    confidenceLabel = t('correlationHigh');
                    astroEvidence += ' ' + t('afflictedPlanetAmplifies', { planet: mapping.planet });
                } else {
                    astroEvidence += ' ' + t('noTensionAspects');
                }

                results.push({
                    icon: afflicted ? '🟠' : '🟡',
                    title: t('tendencyTitle', { keyword, consequence: t(mapping.consequenceKey).split(',')[0] }),
                    confidence,
                    confidenceLabel,
                    astroEvidence,
                    medicalEvidence: t('reportsTendency'),
                    conclusion: afflicted
                        ? t('showsVulnerability', { planet: mapping.planet })
                        : t('notImpelled'),
                    recommendation: afflicted
                        ? t('workWith', { planet: mapping.planet }) + ' ' + (mapping.planet === 'Neptuno' ? t('recNeptuno') : mapping.planet === 'Marte' ? t('recMarte') : mapping.planet === 'Saturno' ? t('recSaturno') : mapping.planet === 'Mercurio' ? t('recMercurio') : t('recGeneral')) + '.'
                        : t('canModify')
                });
            }
        });
    }

    // Global cross-reference: overall vitality vs reported conditions
    const vitality = health.overallVitality;
    if (results.length > 0) {
        const highConf = results.filter(r => r.confidence === 'alta').length;
        const overallConclusion = highConf >= 2
            ? t('multipleHigh')
            : highConf === 1
            ? t('oneSignificant')
            : t('lowCorrelations');

        results.push({
            icon: highConf >= 2 ? '🔴' : highConf === 1 ? '🟠' : '🟢',
            title: t('generalConclusion'),
            confidence: highConf >= 2 ? 'alta' : highConf === 1 ? 'media' : 'baja',
            confidenceLabel: highConf >= 2 ? t('correlationStrong') : highConf === 1 ? t('correlationPartial') : t('correlationWeak'),
            astroEvidence: t('vitalityCalculated') + ' ' + `${vitality.score}% (${vitality.level}). ${highConf} ${t('highCorrs')}`,
            medicalEvidence: `${results.length - 1} ${t('analyzed')}`,
            conclusion: overallConclusion,
            recommendation: t('studyTool')
        });
    }

    return results;
}

function renderSignAnalysis(signAnalysis) {
    let html = '<div class="section-card"><h2>' + t('signAnalysis') + '</h2>';
    signAnalysis.forEach(s => {
        const pc = s.riskPercentage >= 60 ? 'prob-high' : s.riskPercentage >= 35 ? 'prob-medium' : 'prob-low';
        html += '<div class="analysis-item">';
        html += `<div class="sign-header"><strong>${s.symbol} ${s.sign} `; s.planets.forEach(p => { html += `<span class="planet-inline">${p.symbol}</span>`; });
        html += `</strong><span class="risk-percentage ${pc}">${s.riskPercentage}%</span></div>`;
        html += `<p><strong>${t('organs')}</strong> ${s.organs.join(', ')}</p>`;
        html += `<p><strong>${t('system')}</strong> ${s.system}</p>`;
        if (s.vulnerabilities.length > 0) html += `<p><strong>${t('vulnerabilities')}</strong> ${s.vulnerabilities.join(', ')}</p>`;
        if (s.strengths.length > 0) html += `<p><strong>${t('strengths')}</strong> ${s.strengths.join(', ')}</p>`;
        html += `<div class="risk-bar-container"><div class="risk-bar-fill ${pc}" style="width:${s.riskPercentage}%"></div></div>`;
        html += `<span class="risk-indicator risk-${s.riskLevel.toLowerCase()}">${s.riskLevel} ${t('riskLevel')}</span>`;
        if (s.diet || s.exercise || s.emotions || s.behavior) {
            html += '<div class="practical-advice">';
            if (s.diet) html += `<div class="advice-item"><span class="advice-icon">🍽</span><div><strong>${t('diet')}</strong> ${s.diet}</div></div>`;
            if (s.exercise) html += `<div class="advice-item"><span class="advice-icon">🏃</span><div><strong>${t('exercise')}</strong> ${s.exercise}</div></div>`;
            if (s.emotions) html += `<div class="advice-item"><span class="advice-icon">🧘</span><div><strong>${t('emotions')}</strong> ${s.emotions}</div></div>`;
            if (s.behavior) html += `<div class="advice-item"><span class="advice-icon">⚡</span><div><strong>${t('behavior')}</strong> ${s.behavior}</div></div>`;
            html += '</div>';
        }
        html += '</div>';
    });
    html += '</div>';
    return html;
}

function renderPlanetAnalysis(planetAnalysis) {
    let html = '<div class="section-card"><h2>' + t('planetAnalysis') + '</h2>';
    planetAnalysis.forEach(p => {
        html += '<div class="analysis-item">';
        html += `<div class="sign-header"><strong>${p.symbol} ${translatePlanet(p.planet)} ${t('inPreposition')} ${p.signSymbol} ${translateSign(p.sign)}</strong>`;
        if (p.dignity.state !== t('dignityNormal')) html += `<span class="badge badge-${p.dignity.state === t('dignityDomicile') || p.dignity.state === t('dignityExaltation') ? 'green' : 'red'}">${p.dignity.state === t('dignityDomicile') ? t('dignityDomicile') : p.dignity.state === t('dignityExaltation') ? t('dignityExaltation') : p.dignity.state}</span>`;
        if (p.isRetrograde) html += `<span class="badge badge-yellow">${t('retrograde')}</span>`;
        html += '</div>';
        html += `<p><strong>${t('degrees')}</strong> ${p.degree}</p>`;
        html += `<p><strong>${t('nature')}</strong> ${p.nature}</p>`;
        html += `<p><strong>${t('healthRole')}</strong> ${p.role}</p>`;
        html += `<p><strong>${t('influence')}</strong> ${p.influence}</p>`;
        html += `<p><strong>${t('acuteProcesses')}</strong> ${p.acute}</p>`;
        html += `<p><strong>${t('chronicProcesses')}</strong> ${p.chronic}</p>`;
        if (p.dignity.description) html += `<p><strong>${t('dignity')}</strong> ${p.dignity.description}</p>`;

        const interp = getPlanetPracticalAdvice(p.planet);
        if (interp) {
            html += '<div class="practical-advice">';
            html += `<div class="advice-item"><span class="advice-icon">🍽</span><div><strong>${t('diet')}</strong> ${interp.diet}</div></div>`;
            html += `<div class="advice-item"><span class="advice-icon">🏃</span><div><strong>${t('exercise')}</strong> ${interp.exercise}</div></div>`;
            html += `<div class="advice-item"><span class="advice-icon">🧘</span><div><strong>${t('emotions')}</strong> ${interp.emotions}</div></div>`;
            html += `<div class="advice-item"><span class="advice-icon">⚡</span><div><strong>${t('behavior')}</strong> ${interp.behavior}</div></div>`;
            html += '</div>';
        }
        html += '</div>';
    });
    html += '</div>';
    return html;
}

function getPlanetPracticalAdvice(planetName) {
    return getTranslatedPracticalAdvice(planetName);
}

function renderHealthHousesAnalysis(ha, chart) {
    let html = '<div class="section-card"><h2>' + t('healthHouses') + '</h2>';
    const houseLabels = { 1: t('houseI'), 6: t('houseVI'), 8: t('houseVIII'), 12: t('houseXII') };

    for (const h of [1, 6, 8, 12]) {
        const house = ha.houses[h];
        if (!house) continue;
        html += `<div class="analysis-item health-house">`;
        html += `<strong>${houseLabels[h]}</strong>`;
        html += `<p><strong>${t('cusp')}</strong> ${house.cuspSymbol} ${house.cuspSign}</p>`;
        html += `<p><strong>${t('focus')}</strong> ${house.info.healthFocus}</p>`;
        if (house.planets.length > 0) {
            html += `<p><strong>${t('planetsInHouse')}</strong> ${house.planets.map(p => `${p.symbol} ${translatePlanet(p.name)}`).join(', ')}</p>`;
        } else {
            html += '<p><em>' + t('noPlanets') + '</em></p>';
        }
        html += '</div>';
    }

    if (ha.rulerOfVI) {
        const r = ha.rulerOfVI;
        html += '<div class="analysis-item ruler-vi">';
        html += '<strong>' + t('rulerVI') + '</strong>';
        html += `<p><strong>${t('planetLabel')}</strong> ${r.symbol} ${translatePlanet(r.name)}</p>`;
        html += `<p><strong>${t('position')}</strong> ${r.signSymbol} ${r.sign} ${r.degree}</p>`;
        if (r.isRetrograde) html += `<p><span class="badge badge-yellow">${t('retrograde')}</span></p>`;
        if (r.dignity.state !== 'Normal') html += `<p><strong>${t('dignity')}</strong> ${r.dignity.state} - ${r.dignity.description}</p>`;
        html += '</div>';
    }

    html += '</div>';
    return html;
}

function renderAspectAnalysis(aspectAnalysis) {
    let html = '<div class="section-card"><h2>' + t('aspectAnalysis') + '</h2>';

    if (aspectAnalysis.length === 0) {
        html += '<p>' + t('noAspects') + '</p>';
    } else {
        // Educational intro
        html += '<div class="aspect-intro">';
        html += '<p><strong>' + t('whatAspects') + '</strong> ' + t('aspectsDesc') + '</p>';
        html += '</div>';

        // Group aspects by type
        const grouped = {};
        aspectAnalysis.forEach(a => {
            if (!grouped[a.type]) grouped[a.type] = [];
            grouped[a.type].push(a);
        });

        Object.entries(grouped).forEach(([type, items]) => {
            const firstItem = items[0];
            html += '<div class="aspect-group">';
            html += `<div class="aspect-group-header"><h3>${firstItem.symbol} ${type} (${firstItem.angle}°)</h3></div>`;

            // Concept explanation for this aspect type
            if (firstItem.typeConcept) {
                html += '<div class="aspect-concept">';
                html += `<p class="aspect-concept-text">${firstItem.typeConcept}</p>`;
                html += '</div>';
            }

            // Health meaning
            if (firstItem.typeHealthMeaning) {
                html += '<div class="aspect-health-meaning">';
                html += `<p><strong>${t('inHealth')}</strong> ${firstItem.typeHealthMeaning}</p>`;
                html += '</div>';
            }

            // Per-planet-pair details
            items.forEach(a => {
                html += '<div class="aspect-detail-card">';
                html += `<div class="aspect-detail-header"><strong>${a.planet1} ${a.symbol} ${a.planet2}</strong> <span class="aspect-angle">${a.angle}°</span></div>`;

                // Pair-specific concept
                if (a.pairConcept) {
                    html += `<div class="aspect-section"><p class="aspect-section-title">${t('whatMeans')}</p><p>${a.pairConcept}</p></div>`;
                }

                // Pair-specific risks
                if (a.pairRisks) {
                    html += `<div class="aspect-section aspect-risks"><p class="aspect-section-title">${t('riskSituations')}</p><p>${a.pairRisks}</p></div>`;
                }

                // Pair-specific wellness
                if (a.pairWellness) {
                    html += `<div class="aspect-section aspect-wellness"><p class="aspect-section-title">${t('wellnessPath')}</p><p>${a.pairWellness}</p></div>`;
                }

                html += '</div>';
            });

            // General risks and wellness for this aspect type
            if (firstItem.typeRisks) {
                html += `<div class="aspect-general"><p class="aspect-general-title">${t('generalRisks')} ${type}:</p><p>${firstItem.typeRisks}</p></div>`;
            }
            if (firstItem.typeWellness) {
                html += `<div class="aspect-general"><p class="aspect-general-title">${t('generalWellness')} ${type}:</p><p>${firstItem.typeWellness}</p></div>`;
            }

            html += '</div>';
        });
    }

    html += '</div>';
    return html;
}

function renderAcuteChronic(ac) {
    let html = '<div class="section-card"><h2>' + t('acuteChronic') + '</h2>';
    html += '<div class="two-columns">';
    html += '<div><h4>' + t('acuteProcessesLabel') + '</h4>';
    if (ac.acute.length === 0) html += '<p>' + t('noAcute') + '</p>';
    else ac.acute.forEach(a => { html += `<div class="analysis-item"><strong>${a.symbol} ${translatePlanet(a.planet)} ${t('inPreposition')} ${translateSign(a.sign)}</strong><p>${a.description}</p></div>`; });
    html += '</div>';
    html += '<div><h4>' + t('chronicProcessesLabel') + '</h4>';
    if (ac.chronic.length === 0) html += '<p>' + t('noChronic') + '</p>';
    else ac.chronic.forEach(c => { html += `<div class="analysis-item"><strong>${c.symbol} ${translatePlanet(c.planet)} ${t('inPreposition')} ${translateSign(c.sign)}</strong><p>${c.description}</p></div>`; });
    html += '</div></div></div>';
    return html;
}

function renderBodyRiskZones(zones) {
    const zn = { cabeza: t('cabeza'), cuello: t('cuello'), hombros: t('hombros'), pecho: t('pecho'), estomago: t('estomago'), abdomen: t('abdomen'), caderas: t('caderas'), muslos: t('muslos'), rodillas: t('rodillas'), piernas: t('piernas'), pies: t('pies') };
    let html = '<div class="section-card"><h2>' + t('bodyRisk') + '</h2><div class="risk-grid">';
    Object.entries(zones).forEach(([z, v]) => {
        const c = v >= 60 ? '#ef4444' : v >= 35 ? '#f59e0b' : '#22c55e';
        html += `<div class="risk-item"><span>${zn[z]}</span><div class="risk-bar"><div style="width:${v}%;background:${c}"></div></div><span>${v}%</span></div>`;
    });
    html += '</div></div>';
    return html;
}

function renderDiseaseAnalysis(diseases) {
    let html = '<div class="section-card"><h2>' + t('specificDiseases') + '</h2>';
    if (!diseases || diseases.length === 0) { html += '<p>' + t('noData') + '</p>'; }
    else {
        html += '<div class="disease-grid">';
        diseases.slice(0, 15).forEach(d => {
            const sc = d.severity === t('riskHigh') ? 'severity-high' : d.severity === t('riskMedium') ? 'severity-medium' : 'severity-low';
            const pc = d.probability >= 70 ? 'prob-high' : d.probability >= 50 ? 'prob-medium' : 'prob-low';
            const hasBio = d.biodescodificacion ? ' has-bio' : '';
            html += `<div class="disease-card ${sc}${hasBio}"><div class="disease-header"><span class="disease-name">${d.name}</span><span class="disease-prob ${pc}">${d.probability}%</span></div>`;
            html += `<div class="disease-details"><p><strong>${t('type')}</strong> ${d.type} | <strong>${t('severity')}</strong> ${d.severity}</p><p><strong>${t('factors')}</strong> ${d.factors}</p>`;
            if (d.biodescodificacion) {
                html += `<div class="bio-indicator"><span class="bio-icon">💚</span><span>${t('biodecodificacion.titulo')}</span></div>`;
            }
            html += `</div>`;
            html += `<div class="disease-bar"><div class="disease-bar-fill ${pc}" style="width:${d.probability}%"></div></div></div>`;
        });
        html += '</div>';
    }
    html += '</div>';
    return html;
}

function renderBiodecodificacionSection(biodescodificacionSummary, detailedDiseases) {
    const bioData = {};
    detailedDiseases.forEach(d => {
        if (d.biodescodificacion && !bioData[d.name]) {
            bioData[d.name] = d.biodescodificacion;
        }
    });
    if (Object.keys(bioData).length === 0) return '';

    let html = '<div class="bio-section"><h2>' + t('biodecodificacion.titulo') + '</h2>';
    html += '<p class="bio-intro">' + t('biodecodificacion.intro') + '</p>';
    html += '<p class="bio-lang-note"><em>' + t('biodecodificacion.originalLanguageNote') + '</em></p>';

    for (const [enfermedad, info] of Object.entries(bioData)) {
        html += `<div class="bio-card"><div class="bio-card-header" onclick="this.parentElement.classList.toggle('expanded')"><h3>${enfermedad}</h3><span class="bio-expand-icon">+</span></div>`;
        html += '<div class="bio-card-body">';
        html += `<div class="bio-conflicto"><h4>${t('biodecodificacion.conflicto')}</h4><p>${info.conflicto}</p></div>`;
        if (info.fuentes) {
            html += '<div class="bio-fuentes"><h4>' + t('biodecodificacion.fuentes') + '</h4>';
            if (info.fuentes.louiseHay) {
                html += `<div class="bio-fuente"><strong>${t('biodecodificacion.louiseHay')}:</strong><p>${info.fuentes.louiseHay.causa}</p>`;
                if (info.fuentes.louiseHay.afirmacion) html += `<p class="bio-afirmacion"><em>"${info.fuentes.louiseHay.afirmacion}"</em></p>`;
                html += '</div>';
            }
            if (info.fuentes.jacquesMartel) {
                html += `<div class="bio-fuente"><strong>${t('biodecodificacion.jacquesMartel')}:</strong><p>${info.fuentes.jacquesMartel.causa}</p></div>`;
            }
            if (info.fuentes.lisaBourbeau) {
                html += `<div class="bio-fuente"><strong>${t('biodecodificacion.lisaBourbeau')}:</strong>`;
                if (info.fuentes.lisaBourbeau.bloqueoFisico) html += `<p><em>${t('bioPhysical')}</em> ${info.fuentes.lisaBourbeau.bloqueoFisico}</p>`;
                if (info.fuentes.lisaBourbeau.bloqueoEmocional) html += `<p><em>${t('bioEmotional')}</em> ${info.fuentes.lisaBourbeau.bloqueoEmocional}</p>`;
                if (info.fuentes.lisaBourbeau.bloqueoMental) html += `<p><em>${t('bioMental')}</em> ${info.fuentes.lisaBourbeau.bloqueoMental}</p>`;
                html += '</div>';
            }
            if (info.fuentes.drHamer) {
                html += `<div class="bio-fuente"><strong>Dr. Hamer:</strong><p>${info.fuentes.drHamer.causa}</p></div>`;
            }
            html += '</div>';
        }
        if (info.consejos && info.consejos.length > 0) {
            html += '<div class="bio-consejos"><h4>' + t('biodecodificacion.consejos') + '</h4><ul>';
            info.consejos.forEach(c => { html += `<li>${c}</li>`; });
            html += '</ul></div>';
        }
        html += '</div></div>';
    }
    html += '</div>';
    return html;
}

function renderDetailedReport(health, chart, birthPlace) {
    let html = '<div class="section-card"><h2>' + t('detailedReport') + '</h2>';
    html += reportSection(t('generalVitality'), `<p><strong>${t('level')}</strong> ${health.overallVitality.level} (${health.overallVitality.score}/100)</p><p>${health.overallVitality.description}</p>`);
    html += reportSection(t('elementBalance'), `<p><strong>${t('dominantLabel')}</strong> ${health.elementBalance.dominantElement}</p><p>${health.elementBalance.elementData.description}</p><p><strong>${t('elementStrengths')}</strong> ${health.elementBalance.elementData.strengths.join(', ')}</p><p><strong>${t('elementWeaknesses')}</strong> ${health.elementBalance.elementData.weaknesses.join(', ')}</p>`);
    if (health.elementBalance.elementData.diet) {
        html += '<div class="report-section"><h4>' + t('elementRecs') + '</h4>';
        html += '<div class="practical-advice">';
        html += `<div class="advice-item"><span class="advice-icon">🍽</span><div><strong>${t('diet')}</strong> ${health.elementBalance.elementData.diet}</div></div>`;
        html += `<div class="advice-item"><span class="advice-icon">🏃</span><div><strong>${t('exercise')}</strong> ${health.elementBalance.elementData.exercise}</div></div>`;
        html += `<div class="advice-item"><span class="advice-icon">🧘</span><div><strong>${t('emotions')}</strong> ${health.elementBalance.elementData.emotions}</div></div>`;
        html += `<div class="advice-item"><span class="advice-icon">⚡</span><div><strong>${t('behavior')}</strong> ${health.elementBalance.elementData.behavior}</div></div>`;
        html += '</div></div>';
    }
    let elemBars = ''; health.elementBalance.balance.forEach(e => { const c = e.element === 'Fuego' ? '#ef4444' : e.element === 'Tierra' ? '#22c55e' : e.element === 'Aire' ? '#60a5fa' : '#818cf8'; elemBars += `<div class="risk-item"><span>${e.element}</span><div class="risk-bar"><div style="width:${e.percentage}%;background:${c}"></div></div><span>${e.count} (${e.percentage}%)</span></div>`; });
    html += reportSection(t('elementDistribution'), elemBars);
    html += reportSection(t('modalities'), `<p><strong>${t('dominantLabel')}</strong> ${health.modalityBalance.dominantModality}</p><p>${health.modalityBalance.data.description}</p><p><strong>${t('focusLabel')}</strong> ${health.modalityBalance.data.healthFocus}</p><p><strong>${t('recommendationLabel')}</strong> ${health.modalityBalance.data.recommendations}</p>`);
    html += '<div class="report-section"><h4>' + t('personalizedRecs') + '</h4><ul>';
    health.recommendations.forEach(r => { const bc = r.priority === t('priorityHigh') ? 'badge-red' : r.priority === t('priorityMedium') ? 'badge-yellow' : 'badge-green'; html += `<li><span class="badge ${bc}">${r.priority}</span> <strong>${r.category}:</strong> ${r.recommendation}</li>`; });
    html += '</ul></div>';
    html += '</div>';
    return html;
}

function reportSection(title, content) {
    return `<div class="report-section"><h4>${title}</h4>${content}</div>`;
}

function renderTransitReport(transitAnalysis, transitData) {
    const container = document.getElementById('transitResults');
    const vi = transitAnalysis.vulnerabilityIndex;
    let html = '<div class="section-card"><h2>' + t('transitReport') + '</h2>';

    // Vulnerability Index (FREE preview)
    const viColor = vi.score <= 15 ? '#22c55e' : vi.score <= 40 ? '#60a5fa' : vi.score <= 65 ? '#f59e0b' : '#ef4444';
    html += '<div class="vulnerability-index">';
    html += `<h3>${t('vulnIndex')}</h3>`;
    html += `<div class="vi-score" style="color:${viColor}">${vi.level}</div>`;
    html += `<div class="vi-bar"><div class="vi-bar-fill" style="width:${vi.score}%;background:${viColor}"></div></div>`;
    html += `<p class="vi-desc">${vi.description}</p>`;
    if (vi.factors.length > 0) {
        html += '<ul class="vi-factors">';
        vi.factors.forEach(f => { html += `<li><strong>${f.planet} → ${f.target} (${f.aspect}):</strong> ${f.impact}</li>`; });
        html += '</ul>';
    }
    html += '</div>';

    // Transit Interpretations - BLURRED (paid content teaser)
    const transitCount = transitAnalysis.transitHealthImpact.length;
    if (transitCount > 0) {
        html += '<h3>' + t('transitInterp') + '</h3>';
        html += '<div class="transit-paywall">';
        html += '<div class="transit-paywall-content">';
        transitAnalysis.transitHealthImpact.forEach(tr => {
            const lc = tr.level === 'I' ? 'badge-green' : tr.level === 'II' ? 'badge-yellow' : tr.level === 'III' ? 'badge-red' : 'badge-red';
            html += `<div class="analysis-item transit-item">`;
            html += `<div class="sign-header"><strong>${tr.transitSymbol} ${tr.transitPlanet} ${tr.aspectSymbol} ${tr.natalSymbol} ${tr.natalPlanet}</strong><span class="badge ${lc}">${t('level')} ${tr.level}</span></div>`;
            html += `<p>${tr.interpretation}</p>`;
            html += `<p class="transit-orb">${t('orbe')} ${tr.orb.toFixed(1)}°</p>`;
            html += '</div>';
        });
        html += '</div>';
        html += '<div class="transit-paywall-overlay">';
        html += `<p>${transitCount} ${t('transitInterp').toLowerCase()} ${t('transitCtaDesc').split('.')[0].toLowerCase()}...</p>`;
        html += `<button class="btn-cta" onclick="openTransitModal()">${t('transitCtaButton')}</button>`;
        html += '</div>';
        html += '</div>';
    } else {
        html += '<p>' + t('noTransits') + '</p>';
    }

    html += '</div>';
    container.innerHTML = html;
    container.style.display = 'block';
}

function showFullTransitReport() {
    if (!lastTransitAnalysis || !lastTransitData) return;
    const container = document.getElementById('transitResults');
    const vi = lastTransitAnalysis.vulnerabilityIndex;
    let html = '<div class="section-card"><h2>' + t('transitReport') + ' <span style="color:#22c55e;font-size:0.8em;">✓ ' + t('formSuccessTitle') + '</span></h2>';

    // Vulnerability Index
    const viColor = vi.score <= 15 ? '#22c55e' : vi.score <= 40 ? '#60a5fa' : vi.score <= 65 ? '#f59e0b' : '#ef4444';
    html += '<div class="vulnerability-index">';
    html += `<h3>${t('vulnIndex')}</h3>`;
    html += `<div class="vi-score" style="color:${viColor}">${vi.level}</div>`;
    html += `<div class="vi-bar"><div class="vi-bar-fill" style="width:${vi.score}%;background:${viColor}"></div></div>`;
    html += `<p class="vi-desc">${vi.description}</p>`;
    if (vi.factors.length > 0) {
        html += '<ul class="vi-factors">';
        vi.factors.forEach(f => { html += `<li><strong>${f.planet} → ${f.target} (${f.aspect}):</strong> ${f.impact}</li>`; });
        html += '</ul>';
    }
    html += '</div>';

    // FULL Transit Health Interpretations (unlocked after payment)
    html += '<h3>' + t('transitInterp') + '</h3>';
    if (lastTransitAnalysis.transitHealthImpact.length === 0) {
        html += '<p>' + t('noTransits') + '</p>';
    } else {
        lastTransitAnalysis.transitHealthImpact.forEach(tr => {
            const lc = tr.level === 'I' ? 'badge-green' : tr.level === 'II' ? 'badge-yellow' : tr.level === 'III' ? 'badge-red' : 'badge-red';
            html += `<div class="analysis-item transit-item">`;
            html += `<div class="sign-header"><strong>${tr.transitSymbol} ${tr.transitPlanet} ${tr.aspectSymbol} ${tr.natalSymbol} ${tr.natalPlanet}</strong><span class="badge ${lc}">${t('level')} ${tr.level}</span></div>`;
            html += `<p>${tr.interpretation}</p>`;
            html += `<p class="transit-orb">${t('orbe')} ${tr.orb.toFixed(1)}°</p>`;
            html += '</div>';
        });
    }

    html += '</div>';
    html += '<div style="text-align:center;margin-top:1.5rem;"><button class="btn-download btn-pdf" onclick="downloadTransitPDF()">' + t('downloadTransitPDF') + '</button></div>';
    container.innerHTML = html;
    container.style.display = 'block';
}

// PNG Download
window.downloadSummaryPNG = function() {
    if (!lastChart || !lastHealth) { alert(t('generateAnalysisFirst')); return; }
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1400;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#0f172a');
    gradient.addColorStop(1, '#1e293b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(t('pngTitle'), 400, 40);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px Arial';
    ctx.fillText(t('pngSubtitle'), 400, 65);

    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(50, 80); ctx.lineTo(750, 80); ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(t('birthDataLabel'), 50, 110);
    ctx.font = '14px Arial'; ctx.fillStyle = '#cbd5e1';
    ctx.fillText(t('locationLabel') + lastBirthPlace, 50, 135);
    ctx.fillText(t('ascLabel') + lastChart.ascendant.symbol + ' ' + lastChart.ascendant.sign, 50, 155);
    ctx.fillText(t('mcLabel') + lastChart.mc.symbol + ' ' + lastChart.mc.sign, 400, 155);

    const v = lastHealth.overallVitality;
    ctx.fillStyle = '#f8fafc'; ctx.font = 'bold 16px Arial';
    ctx.fillText(t('vitalityLabelUpper'), 50, 195);
    ctx.fillStyle = v.score >= 70 ? '#22c55e' : v.score >= 40 ? '#f59e0b' : '#ef4444';
    ctx.font = 'bold 20px Arial';
    ctx.fillText(v.level + ' (' + v.score + '/100)', 50, 220);
    ctx.fillStyle = '#94a3b8'; ctx.font = '12px Arial';
    ctx.fillText(v.description, 50, 240);

    ctx.fillStyle = '#f8fafc'; ctx.font = 'bold 16px Arial';
    ctx.fillText(t('signAnalysisLabel'), 50, 280);
    let yPos = 305;
    lastHealth.signAnalysis.forEach(s => {
        const pc = s.riskPercentage >= 60 ? '#ef4444' : s.riskPercentage >= 35 ? '#f59e0b' : '#22c55e';
        ctx.fillStyle = '#f8fafc'; ctx.font = 'bold 13px Arial';
        ctx.fillText(s.symbol + ' ' + s.sign, 50, yPos);
        ctx.fillStyle = pc; ctx.font = 'bold 14px Arial';
        ctx.fillText(s.riskPercentage + '%', 250, yPos);
        ctx.fillStyle = '#94a3b8'; ctx.font = '11px Arial';
        ctx.fillText(s.organs.join(', '), 300, yPos);
        ctx.fillStyle = '#334155'; ctx.fillRect(50, yPos + 5, 200, 6);
        ctx.fillStyle = pc; ctx.fillRect(50, yPos + 5, s.riskPercentage * 2, 6);
        yPos += 30;
    });

    ctx.fillStyle = '#f8fafc'; ctx.font = 'bold 16px Arial';
    ctx.fillText(t('topDiseasesLabel'), 50, yPos + 20);
    yPos += 45;
    lastHealth.detailedDiseases.slice(0, 5).forEach((d, idx) => {
        const pc = d.probability >= 70 ? '#ef4444' : d.probability >= 50 ? '#f59e0b' : '#22c55e';
        ctx.fillStyle = '#f8fafc'; ctx.font = 'bold 12px Arial';
        ctx.fillText((idx + 1) + '. ' + d.name, 50, yPos);
        ctx.fillStyle = pc; ctx.font = 'bold 13px Arial';
        ctx.fillText(d.probability + '%', 400, yPos);
        ctx.fillStyle = '#94a3b8'; ctx.font = '11px Arial';
        ctx.fillText(d.type + ' | ' + d.severity + ' | ' + d.sign, 50, yPos + 15);
        yPos += 35;
    });

    ctx.fillStyle = '#f8fafc'; ctx.font = 'bold 16px Arial';
    ctx.fillText(t('riskZonesLabel'), 50, yPos + 20);
    yPos += 45;
    const pngZones = [{ k: 'cabeza', n: t('zoneHead') }, { k: 'cuello', n: t('zoneNeck') }, { k: 'pecho', n: t('zoneChest') }, { k: 'estomago', n: t('zoneStomach') }, { k: 'abdomen', n: t('zoneAbdomen') }, { k: 'caderas', n: t('zoneHips') }, { k: 'rodillas', n: t('zoneKnees') }, { k: 'pies', n: t('zoneFeet') }];
    pngZones.forEach(z => {
        const val = lastHealth.bodyRiskZones[z.k] || 0;
        const c = val >= 60 ? '#ef4444' : val >= 35 ? '#f59e0b' : '#22c55e';
        ctx.fillStyle = '#f8fafc'; ctx.font = '12px Arial'; ctx.fillText(z.n, 50, yPos);
        ctx.fillStyle = '#334155'; ctx.fillRect(150, yPos - 10, 200, 10);
        ctx.fillStyle = c; ctx.fillRect(150, yPos - 10, val * 2, 10);
        ctx.fillStyle = c; ctx.font = 'bold 12px Arial'; ctx.fillText(val + '%', 360, yPos);
        yPos += 25;
    });

    if (lastHealth.healthHousesAnalysis?.rulerOfVI) {
        const r = lastHealth.healthHousesAnalysis.rulerOfVI;
        ctx.fillStyle = '#f59e0b'; ctx.font = 'bold 16px Arial';
        ctx.fillText(t('rulerVILabel'), 50, yPos + 20);
        yPos += 45;
        ctx.fillStyle = '#f8fafc'; ctx.font = '14px Arial';
        ctx.fillText(r.symbol + ' ' + translatePlanet(r.name) + ' ' + t('inPreposition') + ' ' + translateSign(r.sign) + ' ' + r.degree, 50, yPos);
        if (r.dignity.state !== 'Normal') { yPos += 20; ctx.fillText(t('dignityLabel') + r.dignity.state, 50, yPos); }
    }

    ctx.fillStyle = '#ef4444'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center';
    ctx.fillText(t('warning'), 400, canvas.height - 40);
    ctx.fillText(t('warning2'), 400, canvas.height - 25);
    ctx.fillStyle = '#64748b'; ctx.font = '10px Arial';
    ctx.fillText(t('copyright'), 400, canvas.height - 8);

    const link = document.createElement('a');
    link.download = 'AstroSalud_Resumen_' + new Date().toISOString().slice(0, 10) + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
};

// PDF Download
window.downloadSummaryPDF = function() {
    if (!lastChart || !lastHealth) { alert(t('generateAnalysisFirst')); return; }

    const v = lastHealth.overallVitality;
    const e = lastHealth.elementBalance;
    const asc = lastChart.ascendant;
    const mc = lastChart.mc;

    let body = '';

    // Header
    body += '<h1 style="text-align:center;color:#1e293b;margin-bottom:5px;">' + t('pdfTitle') + '</h1>';
    body += '<p style="text-align:center;color:#64748b;margin-top:0;">' + t('pdfSubtitle') + '</p>';
    body += '<hr style="border:1px solid #6366f1;margin:15px 0;">';

    // Birth data
    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;">' + t('pdfBirthData') + '</h2>';
    body += '<p style="font-size:13px;color:#334155;"><strong>' + t('pdfLocation') + '</strong> ' + lastBirthPlace + '</p>';
    body += '<p style="font-size:13px;color:#334155;"><strong>' + t('pdfAsc') + '</strong> ' + asc.symbol + ' ' + asc.sign + ' ' + asc.degree + '°' + asc.minute + '\'&nbsp;&nbsp;&nbsp;<strong>' + t('pdfMc') + '</strong> ' + mc.symbol + ' ' + mc.sign + ' ' + mc.degree + '°' + mc.minute + '\'</p>';

    // Vitality
    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;margin-top:20px;">' + t('pdfDiagnosis') + '</h2>';
    body += '<table style="width:100%;font-size:13px;color:#334155;"><tr>';
    body += '<td style="padding:8px;background:#f1f5f9;border-radius:6px;text-align:center;width:33%;"><strong>' + t('pdfVitality') + '</strong><br><span style="font-size:18px;font-weight:bold;color:' + (v.score >= 70 ? '#22c55e' : v.score >= 40 ? '#f59e0b' : '#ef4444') + ';">' + v.score + '%</span><br>' + v.level + '</td>';
    body += '<td style="padding:8px;background:#f1f5f9;border-radius:6px;text-align:center;width:33%;"><strong>' + t('pdfElement') + '</strong><br><span style="font-size:18px;font-weight:bold;">' + e.dominantElement + '</span><br>' + t('dominant') + '</td>';
    body += '<td style="padding:8px;background:#f1f5f9;border-radius:6px;text-align:center;width:33%;"><strong>' + t('pdfVitality') + '</strong><br><span style="font-size:18px;font-weight:bold;">' + (v.score >= 70 ? t('pdfFavorable') : v.score >= 40 ? t('pdfModerate') : t('pdfAttention')) + '</span><br>' + v.description.substring(0, 60) + '...</td>';
    body += '</tr></table>';

    // Planetary positions
    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;margin-top:20px;">' + t('pdfPlanets') + '</h2>';
    body += '<table style="width:100%;border-collapse:collapse;font-size:12px;color:#334155;">';
    body += '<tr style="background:#f1f5f9;"><th style="padding:6px;text-align:left;border:1px solid #e2e8f0;">' + t('pdfPlanet') + '</th><th style="padding:6px;text-align:left;border:1px solid #e2e8f0;">' + t('pdfSign') + '</th><th style="padding:6px;text-align:left;border:1px solid #e2e8f0;">' + t('pdfDegrees') + '</th><th style="padding:6px;text-align:left;border:1px solid #e2e8f0;">' + t('pdfRet') + '</th></tr>';
    lastChart.planets.forEach(p => {
        body += '<tr><td style="padding:5px;border:1px solid #e2e8f0;">' + p.symbol + ' ' + translatePlanet(p.name) + '</td><td style="padding:5px;border:1px solid #e2e8f0;">' + p.signSymbol + ' ' + translateSign(p.sign) + '</td><td style="padding:5px;border:1px solid #e2e8f0;">' + p.degree + '°' + String(p.minute).padStart(2, '0') + '\'</td><td style="padding:5px;border:1px solid #e2e8f0;">' + (p.isRetrograde ? '℞' : '') + '</td></tr>';
    });
    body += '</table>';

    // Houses
    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;margin-top:20px;">' + t('pdfHouses') + '</h2>';
    body += '<table style="width:100%;border-collapse:collapse;font-size:12px;color:#334155;">';
    body += '<tr style="background:#f1f5f9;"><th style="padding:6px;text-align:left;border:1px solid #e2e8f0;">' + t('pdfHouse') + '</th><th style="padding:6px;text-align:left;border:1px solid #e2e8f0;">' + t('pdfSign') + '</th><th style="padding:6px;text-align:left;border:1px solid #e2e8f0;">' + t('pdfDegrees') + '</th></tr>';
    const houseNames = ['I Asc', 'II', 'III', 'IV IC', 'V', 'VI', 'VII Dsc', 'VIII', 'IX', 'X MC', 'XI', 'XII'];
    lastChart.houses.cusps.forEach((c, i) => {
        body += '<tr><td style="padding:5px;border:1px solid #e2e8f0;">' + houseNames[i] + '</td><td style="padding:5px;border:1px solid #e2e8f0;">' + c.signSymbol + ' ' + c.sign + '</td><td style="padding:5px;border:1px solid #e2e8f0;">' + c.degreeInSign + '°' + String(c.minuteInSign).padStart(2, '0') + '\'</td></tr>';
    });
    body += '</table>';

    // Signs analysis
    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;margin-top:20px;">' + t('signAnalysis') + '</h2>';
    lastHealth.signAnalysis.forEach(s => {
        const pc = s.riskPercentage >= 60 ? '#ef4444' : s.riskPercentage >= 35 ? '#f59e0b' : '#22c55e';
        body += '<div style="margin-bottom:8px;padding:8px;background:#f8fafc;border-left:3px solid ' + pc + ';border-radius:4px;">';
        body += '<strong style="font-size:13px;">' + s.symbol + ' ' + s.sign + '</strong> ';
        body += '<span style="font-weight:bold;color:' + pc + ';">' + s.riskPercentage + '%</span> ';
        body += '<span style="font-size:11px;color:#64748b;">— ' + s.organs.join(', ') + '</span>';
        body += '</div>';
    });

    // Diseases
    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;margin-top:20px;">' + t('pdfDiseaseTrends') + '</h2>';
    lastHealth.detailedDiseases.slice(0, 8).forEach((d, idx) => {
        const pc = d.probability >= 70 ? '#ef4444' : d.probability >= 50 ? '#f59e0b' : '#22c55e';
        body += '<div style="margin-bottom:6px;padding:6px 8px;background:#f8fafc;border-radius:4px;">';
        body += '<strong style="font-size:12px;">' + (idx + 1) + '. ' + d.name + '</strong> ';
        body += '<span style="font-weight:bold;color:' + pc + ';">' + d.probability + '%</span> ';
        body += '<span style="font-size:11px;color:#64748b;">— ' + d.type + ' | ' + d.severity + '</span>';
        body += '</div>';
    });

    // Risk zones
    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;margin-top:20px;">' + t('pdfRiskZones') + '</h2>';
    const zoneLabels = { cabeza: t('zoneHead'), cuello: t('zoneNeck'), hombros: t('zoneShoulders'), pecho: t('zoneChest'), estomago: t('zoneStomach'), abdomen: t('zoneAbdomen'), caderas: t('zoneHips'), muslos: t('zoneThighs'), rodillas: t('zoneKnees'), piernas: t('zoneLegs'), pies: t('zoneFeet') };
    Object.entries(zoneLabels).forEach(([k, label]) => {
        const val = lastHealth.bodyRiskZones[k] || 0;
        const c = val >= 60 ? '#ef4444' : val >= 35 ? '#f59e0b' : '#22c55e';
        body += '<div style="margin-bottom:4px;font-size:12px;color:#334155;">';
        body += '<span style="display:inline-block;width:140px;">' + label + '</span>';
        body += '<span style="display:inline-block;width:120px;background:#e2e8f0;border-radius:3px;height:8px;vertical-align:middle;"><span style="display:inline-block;width:' + val + '%;background:' + c + ';border-radius:3px;height:8px;"></span></span> ';
        body += '<strong style="color:' + c + ';">' + val + '%</strong>';
        body += '</div>';
    });

    // Aspects summary
    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;margin-top:20px;">' + t('pdfAspects') + '</h2>';
    lastChart.aspects.forEach(a => {
        const natureColor = a.nature === 'tensión' ? '#ef4444' : a.nature === 'desafío' ? '#f59e0b' : '#22c55e';
        body += '<div style="margin-bottom:4px;font-size:12px;color:#334155;">';
        body += '<strong>' + a.planet1Name + ' ' + a.symbol + ' ' + a.planet2Name + '</strong> ';
        body += '<span style="color:#64748b;">(' + a.type + ' ' + a.angle.toFixed(1) + '°)</span> ';
        body += '<span style="color:' + natureColor + ';font-size:11px;">' + a.nature + '</span>';
        body += '</div>';
    });

    // Medical history cross-reference
    if (lastMedicalHistory) {
        body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;margin-top:20px;">' + t('pdfMedicalHistory') + '</h2>';
        if (lastMedicalHistory.chronicDiseases) body += '<p style="font-size:12px;color:#334155;"><strong>' + t('pdfChronic') + '</strong> ' + lastMedicalHistory.chronicDiseases + '</p>';
        if (lastMedicalHistory.recurrentAilments) body += '<p style="font-size:12px;color:#334155;"><strong>' + t('pdfRecurrent') + '</strong> ' + lastMedicalHistory.recurrentAilments + '</p>';
        if (lastMedicalHistory.birthDefects) body += '<p style="font-size:12px;color:#334155;"><strong>' + t('pdfBirth') + '</strong> ' + lastMedicalHistory.birthDefects + '</p>';
        if (lastMedicalHistory.harmfulBehaviors) body += '<p style="font-size:12px;color:#334155;"><strong>' + t('pdfBehavior') + '</strong> ' + lastMedicalHistory.harmfulBehaviors + '</p>';

        const crossRef = crossReferenceMedical(lastChart, lastHealth, lastMedicalHistory);
        if (crossRef.length > 0) {
            body += '<h3 style="color:#1e293b;font-size:14px;margin-top:12px;">' + t('pdfCrossRef') + '</h3>';
            crossRef.forEach(cr => {
                const borderColor = cr.confidence === 'alta' ? '#ef4444' : cr.confidence === 'media' ? '#f59e0b' : '#22c55e';
                body += '<div style="margin-bottom:10px;padding:8px;border-left:3px solid ' + borderColor + ';background:#f8fafc;border-radius:4px;">';
                body += '<strong style="font-size:12px;">' + cr.icon + ' ' + cr.title + '</strong> ';
                body += '<span style="font-size:10px;padding:2px 6px;border-radius:8px;background:' + (cr.confidence === 'alta' ? '#fef2f2;color:#ef4444' : cr.confidence === 'media' ? '#fffbeb;color:#f59e0b' : '#f0fdf4;color:#22c55e') + ';">' + cr.confidenceLabel + '</span><br>';
                body += '<span style="font-size:11px;color:#6366f1;">' + cr.astroEvidence + '</span><br>';
                body += '<span style="font-size:11px;color:#64748b;font-style:italic;">' + cr.medicalEvidence + '</span><br>';
                body += '<span style="font-size:11px;color:#1e293b;">' + cr.conclusion + '</span>';
                if (cr.recommendation) body += '<br><span style="font-size:11px;color:#22c55e;">→ ' + cr.recommendation + '</span>';
                body += '</div>';
            });
        }
    }

    // Disclaimer
    body += '<hr style="border:1px solid #e2e8f0;margin:20px 0 10px;">';
    body += '<p style="text-align:center;font-size:10px;color:#ef4444;font-weight:bold;">' + t('pdfWarning') + '</p>';
    body += '<p style="text-align:center;font-size:10px;color:#94a3b8;">' + t('pdfFooter') + '</p>';

    const printWindow = window.open('', '_blank');
    printWindow.document.write('<!DOCTYPE html><html><head><title>' + t('pdfTitle') + '</title>');
    printWindow.document.write('<style>@page{margin:1.5cm;} body{font-family:Arial,Helvetica,sans-serif;color:#1e293b;margin:0;padding:20px;line-height:1.4;} h1{font-size:20px;} h2{font-size:14px;} h3{font-size:12px;} table{margin:8px 0;} @media print{body{padding:0;}}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(body);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 500);
};

window.downloadTransitPDF = function() {
    if (!lastTransitAnalysis || !lastChart) { alert(t('generateAnalysisFirst')); return; }

    const vi = lastTransitAnalysis.vulnerabilityIndex;
    const asc = lastChart.ascendant;
    const mc = lastChart.mc;
    const transitDate = document.getElementById('transitDate').value;

    let body = '';

    body += '<h1 style="text-align:center;color:#1e293b;margin-bottom:5px;">' + t('transitPdfTitle') + '</h1>';
    body += '<p style="text-align:center;color:#64748b;margin-top:0;">' + t('transitPdfSubtitle') + '</p>';
    body += '<hr style="border:1px solid #f59e0b;margin:15px 0;">';

    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;">' + t('pdfBirthData') + '</h2>';
    body += '<p style="font-size:13px;color:#334155;"><strong>' + t('pdfLocation') + '</strong> ' + lastBirthPlace + '</p>';
    body += '<p style="font-size:13px;color:#334155;"><strong>' + t('pdfAsc') + '</strong> ' + asc.symbol + ' ' + asc.sign + ' ' + asc.degree + '°' + asc.minute + '\'&nbsp;&nbsp;&nbsp;<strong>' + t('pdfMc') + '</strong> ' + mc.symbol + ' ' + mc.sign + ' ' + mc.degree + '°' + mc.minute + '\'</p>';
    body += '<p style="font-size:13px;color:#334155;"><strong>' + t('transitDate') + '</strong> ' + transitDate + '</p>';

    const viColor = vi.score <= 15 ? '#22c55e' : vi.score <= 40 ? '#60a5fa' : vi.score <= 65 ? '#f59e0b' : '#ef4444';
    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;margin-top:20px;">' + t('vulnIndex') + '</h2>';
    body += '<div style="text-align:center;margin:10px 0;"><span style="font-size:24px;font-weight:bold;color:' + viColor + ';">' + vi.level + '</span></div>';
    body += '<div style="background:#e2e8f0;border-radius:5px;height:12px;margin:8px 0;"><div style="width:' + vi.score + '%;background:' + viColor + ';border-radius:5px;height:12px;"></div></div>';
    body += '<p style="font-size:13px;color:#334155;">' + vi.description + '</p>';
    if (vi.factors.length > 0) {
        body += '<ul style="font-size:12px;color:#334155;">';
        vi.factors.forEach(f => { body += '<li><strong>' + f.planet + ' → ' + f.target + ' (' + f.aspect + '):</strong> ' + f.impact + '</li>'; });
        body += '</ul>';
    }

    body += '<h2 style="color:#1e293b;font-size:16px;border-bottom:2px solid #e2e8f0;padding-bottom:5px;margin-top:20px;">' + t('transitInterp') + '</h2>';
    if (lastTransitAnalysis.transitHealthImpact.length === 0) {
        body += '<p>' + t('noTransits') + '</p>';
    } else {
        lastTransitAnalysis.transitHealthImpact.forEach(tr => {
            const lc = tr.level === 'I' ? '#22c55e' : tr.level === 'II' ? '#f59e0b' : '#ef4444';
            body += '<div style="margin-bottom:8px;padding:8px;background:#f8fafc;border-left:3px solid ' + lc + ';border-radius:4px;">';
            body += '<strong style="font-size:13px;">' + tr.transitSymbol + ' ' + tr.transitPlanet + ' ' + tr.aspectSymbol + ' ' + tr.natalSymbol + ' ' + tr.natalPlanet + '</strong> ';
            body += '<span style="font-size:10px;padding:2px 6px;border-radius:8px;background:' + (tr.level === 'I' ? '#f0fdf4;color:#22c55e' : tr.level === 'II' ? '#fffbeb;color:#f59e0b' : '#fef2f2;color:#ef4444') + ';">' + t('level') + ' ' + tr.level + '</span><br>';
            body += '<span style="font-size:12px;color:#334155;">' + tr.interpretation + '</span><br>';
            body += '<span style="font-size:11px;color:#64748b;">' + t('orbe') + ' ' + tr.orb.toFixed(1) + '°</span>';
            body += '</div>';
        });
    }

    body += '<hr style="border:1px solid #e2e8f0;margin:20px 0 10px;">';
    body += '<p style="text-align:center;font-size:10px;color:#ef4444;font-weight:bold;">' + t('pdfWarning') + '</p>';
    body += '<p style="text-align:center;font-size:10px;color:#94a3b8;">' + t('pdfFooter') + '</p>';

    const printWindow = window.open('', '_blank');
    printWindow.document.write('<!DOCTYPE html><html><head><title>' + t('transitPdfTitle') + '</title>');
    printWindow.document.write('<style>@page{margin:1.5cm;} body{font-family:Arial,Helvetica,sans-serif;color:#1e293b;margin:0;padding:20px;line-height:1.4;} h1{font-size:20px;} h2{font-size:14px;} @media print{body{padding:0;}}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(body);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 500);
};

// ==================== TRANSIT MODAL ====================

function openTransitModal() {
    const modal = document.getElementById('transitModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    document.getElementById('modalFormTitle').textContent = t('formTitle');
    document.getElementById('modalFormSubtitle').textContent = t('formSubtitle');
    document.getElementById('modalLabelName').textContent = t('formName');
    document.getElementById('modalLabelEmail').textContent = t('formEmail');
    document.getElementById('modalLabelPhone').textContent = t('formPhone');
    document.getElementById('modalLabelCpf').textContent = t('formCpf');
    document.getElementById('modalNextBtn').textContent = '→ ' + t('formSubmit').split(' ')[0];

    document.getElementById('modalFormTitle2').textContent = t('formTitle');
    document.getElementById('modalLabelCardNumber').textContent = t('formCardNumber');
    document.getElementById('modalLabelCardName').textContent = t('formCardName');
    document.getElementById('modalLabelCardExpiry').textContent = t('formCardExpiry');
    document.getElementById('modalLabelCardCvv').textContent = t('formCardCvv');
    document.getElementById('modalLabelInstallments').textContent = t('formCardInstallments');
    document.getElementById('modalPriceLabel').textContent = t('formPrice');
    document.getElementById('modalSecureText').textContent = t('formSecure');
    document.getElementById('modalTermsText').textContent = t('formTerms');
    document.getElementById('modalPayBtn').textContent = t('formSubmit');

    document.getElementById('modalSuccessTitle').textContent = t('formSuccessTitle');
    document.getElementById('modalSuccessMsg').textContent = t('formSuccessMsg');
}

function closeTransitModal() {
    document.getElementById('transitModal').style.display = 'none';
    document.body.style.overflow = '';
    document.getElementById('modalStep1').style.display = 'block';
    document.getElementById('modalStep2').style.display = 'none';
    document.getElementById('modalStep3').style.display = 'none';
}

function goToPaymentStep() {
    const name = document.getElementById('modalName').value.trim();
    const email = document.getElementById('modalEmail').value.trim();
    const phone = document.getElementById('modalPhone').value.trim();

    if (!name || !email || !phone) {
        alert(t('fillRequired'));
        return;
    }

    document.getElementById('modalStep1').style.display = 'none';
    document.getElementById('modalStep2').style.display = 'block';
}

function goToDataStep() {
    document.getElementById('modalStep2').style.display = 'none';
    document.getElementById('modalStep1').style.display = 'block';
}

function processPayment() {
    const cardNumber = document.getElementById('modalCardNumber').value.trim();
    const cardName = document.getElementById('modalCardName').value.trim();
    const cardExpiry = document.getElementById('modalCardExpiry').value.trim();
    const cardCvv = document.getElementById('modalCardCvv').value.trim();
    const installments = document.getElementById('modalInstallments').value;
    const accepted = document.getElementById('modalAcceptTerms').checked;

    const name = document.getElementById('modalName').value.trim();
    const email = document.getElementById('modalEmail').value.trim();
    const phone = document.getElementById('modalPhone').value.trim();
    const cpf = document.getElementById('modalCpf').value.trim();

    if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
        alert(t('fillRequired'));
        return;
    }

    if (!accepted) {
        alert(t('acceptTerms'));
        return;
    }

    const btn = document.getElementById('btnPay');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>' + t('formProcessing') + '</span>';
    btn.disabled = true;

    // Parse expiry
    const [expMonth, expYear] = cardExpiry.split('/');

    // Check if Mercado Pago SDK is loaded
    if (!window.MercadoPago) {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('Error: Mercado Pago SDK no se cargó. Verifica tu conexión a internet.');
        return;
    }

    try {
        const mp = new window.MercadoPago(window.MP_PUBLIC_KEY);

        const cleanCardNumber = cardNumber.replace(/[\s-]/g, '');
        const cleanCpf = cpf.replace(/\D/g, '');
        const fullYear = expYear.length === 2 ? '20' + expYear : expYear;

        mp.createCardToken({
            cardNumber: cleanCardNumber,
            cardholderName: cardName,
            cardExpirationMonth: expMonth,
            cardExpirationYear: fullYear,
            securityCode: cardCvv,
            identificationType: 'CPF',
            identificationNumber: cleanCpf,
        })
        .then(result => {
            if (result.id) {
                return fetch(window.PAYMENT_WORKER_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        token: result.id,
                        paymentMethodId: result.payment_method_id,
                        installments: installments,
                        amount: '49.90',
                        email: email,
                        name: name,
                        cpf: cpf,
                        phone: phone,
                    }),
                });
            } else {
                throw new Error(t('cardError'));
            }
        })
        .then(r => r.json())
        .then(result => {
            btn.innerHTML = originalText;
            btn.disabled = false;

            if (result.status === 'approved' || result.status === 'pending') {
                closeTransitModal();
                showFullTransitReport();
            } else {
                alert(t('paymentError') + ': ' + (result.error || result.status_detail));
            }
        })
        .catch(err => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            let msg = t('cardError');
            if (err && err.message) msg += ': ' + err.message;
            else if (err && err.cause) msg += ': ' + JSON.stringify(err.cause);
            else if (err) msg += ': ' + JSON.stringify(err);
            alert(msg);
        });
    } catch (err) {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert(t('paymentError') + ': ' + err.message);
    }
}

window.openTransitModal = openTransitModal;
window.closeTransitModal = closeTransitModal;
window.goToPaymentStep = goToPaymentStep;
window.goToDataStep = goToDataStep;
window.processPayment = processPayment;
