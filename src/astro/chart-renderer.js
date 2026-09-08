/**
 * Renderizador SVG Profesional - Estilo AstroWorld/Solar Fire
 * Fórmula: svgAngle = (acDeg - eclipticDeg + 180) % 360
 */

import { SIGNS } from './engine.js';

const SIGN_COLORS = ['#cc0000', '#006600', '#cc9900', '#0000cc',
                     '#cc6600', '#006600', '#cc9900', '#333399',
                     '#cc0000', '#006600', '#cc9900', '#0000cc'];

export function generateChartSVG(chart, width = 600, height = 600) {
    const cx = width / 2;
    const cy = height / 2;

    const R_OUTER = 280;
    const R_DEG = 265;
    const R_SIGNS_OUT = 255;
    const R_SIGNS_IN = 220;
    const R_HOUSE_OUT = 220;
    const R_HOUSE_IN = 155;
    const R_ASPECT = 80;
    const R_PLANET = 135;

    const acDeg = chart.ascendant;

    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect width="${width}" height="${height}" fill="#ffffff"/>`;

    // Círculos principales
    svg += circle(cx, cy, R_OUTER, 'none', '#000000', 2.5);
    svg += circle(cx, cy, R_DEG, 'none', '#999999', 0.3);
    svg += circle(cx, cy, R_SIGNS_IN, 'none', '#000000', 1.2);
    svg += circle(cx, cy, R_HOUSE_IN, 'none', '#000000', 0.5);
    svg += circle(cx, cy, 40, 'none', '#000000', 0.5);

    // Ticks de grado (cada 1°, 5°, 10°, 30°)
    svg += drawDegreeTicks(cx, cy, R_OUTER, acDeg);

    // Divisores de signo (cada 30°)
    svg += drawSignDividers(cx, cy, R_SIGNS_OUT, R_SIGNS_IN, acDeg);

    // Símbolos de signos
    svg += drawSignSymbols(cx, cy, R_SIGNS_OUT, R_SIGNS_IN, acDeg);

    // Nombres de signos
    svg += drawSignNames(cx, cy, R_OUTER, acDeg);

    // Casas
    svg += drawHouses(chart.houses.cusps, cx, cy, R_HOUSE_OUT, R_HOUSE_IN, acDeg);

    // Aspectos
    svg += drawAspects(chart.aspects, chart.planets, cx, cy, R_ASPECT, acDeg);

    // Planetas
    svg += drawPlanets(chart.planets, cx, cy, R_PLANET, acDeg);

    // Nodo Norte
    if (chart.northNode) {
        svg += drawNorthNode(chart.northNode, cx, cy, R_PLANET, acDeg);
    }

    // Etiquetas de ángulos (AC, MC, DC, IC)
    svg += drawAngleLabels(chart, cx, cy, R_OUTER, acDeg);

    svg += '</svg>';
    return svg;
}

function circle(cx, cy, r, fill, stroke, sw) {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}

function toA(eclipticDeg, acDeg) {
    const svgDeg = ((acDeg - eclipticDeg + 180) % 360 + 360) % 360;
    return svgDeg * Math.PI / 180;
}

function drawDegreeTicks(cx, cy, R1, acDeg) {
    let svg = '';
    for (let d = 0; d < 360; d++) {
        const a = toA(d, acDeg);
        const isSignBoundary = (d % 30 === 0);
        const is10Degree = (d % 10 === 0);
        const is5Degree = (d % 5 === 0);

        let len, sw;
        if (isSignBoundary) { len = 18; sw = 1.2; }
        else if (is10Degree) { len = 12; sw = 0.8; }
        else if (is5Degree) { len = 8; sw = 0.5; }
        else { len = 4; sw = 0.3; }

        const x1 = cx + R1 * Math.cos(a);
        const y1 = cy + R1 * Math.sin(a);
        const x2 = cx + (R1 - len) * Math.cos(a);
        const y2 = cy + (R1 - len) * Math.sin(a);

        svg += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#333" stroke-width="${sw}"/>`;
    }
    return svg;
}

function drawSignDividers(cx, cy, R1, R2, acDeg) {
    let svg = '';
    for (let d = 0; d < 360; d += 30) {
        const a = toA(d, acDeg);
        const x1 = cx + R1 * Math.cos(a);
        const y1 = cy + R1 * Math.sin(a);
        const x2 = cx + R2 * Math.cos(a);
        const y2 = cy + R2 * Math.sin(a);
        svg += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#333" stroke-width="1.2"/>`;
    }
    return svg;
}

function drawSignSymbols(cx, cy, R1, R2, acDeg) {
    let svg = '';
    const Rm = (R1 + R2) / 2;

    for (let i = 0; i < 12; i++) {
        const degStart = i * 30;
        const aMid = toA(degStart + 15, acDeg);
        const x = cx + Rm * Math.cos(aMid);
        const y = cy + Rm * Math.sin(aMid);

        svg += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="${SIGN_COLORS[i]}" font-size="24" font-family="serif">${SIGNS[i].symbol}</text>`;
    }
    return svg;
}

function drawSignNames(cx, cy, R, acDeg) {
    let svg = '';
    const names = ['Ari', 'Tau', 'Gem', 'Can', 'Leo', 'Vir', 'Lib', 'Esc', 'Sag', 'Cap', 'Acu', 'Pic'];

    for (let i = 0; i < 12; i++) {
        const mid = i * 30 + 15;
        const a = toA(mid, acDeg);
        const Rn = R + 12;
        svg += `<text x="${(cx + Rn * Math.cos(a)).toFixed(1)}" y="${(cy + Rn * Math.sin(a)).toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="#666" font-size="8" font-family="Arial" font-weight="bold">${names[i]}</text>`;
    }
    return svg;
}

function drawHouses(cusps, cx, cy, R1, R2, acDeg) {
    let svg = '';

    cusps.forEach((c, i) => {
        const a = toA(c.degree, acDeg);
        const isAngle = (i === 0 || i === 3 || i === 6 || i === 9);
        const sw = isAngle ? 2.5 : 1;

        svg += `<line x1="${(cx + R1 * Math.cos(a)).toFixed(1)}" y1="${(cy + R1 * Math.sin(a)).toFixed(1)}" x2="${(cx + R2 * Math.cos(a)).toFixed(1)}" y2="${(cy + R2 * Math.sin(a)).toFixed(1)}" stroke="${isAngle ? '#000' : '#333'}" stroke-width="${sw}"/>`;

        // Número de casa
        const nextDeg = cusps[(i + 1) % 12].degree;
        let midDeg = (c.degree + nextDeg) / 2;
        if (nextDeg < c.degree) midDeg = ((c.degree + nextDeg + 360) / 2) % 360;
        const aMid = toA(midDeg, acDeg);
        const nr = R2 - 20;
        svg += `<text x="${(cx + nr * Math.cos(aMid)).toFixed(1)}" y="${(cy + nr * Math.sin(aMid)).toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="#666" font-size="10" font-family="Arial">${i + 1}</text>`;
    });

    return svg;
}

function drawAspects(aspects, planets, cx, cy, R, acDeg) {
    let svg = '';

    const colors = {
        'Conjunción': '#000000',
        'Semisextil': '#999999',
        'Semicuadratura': '#999999',
        'Sextil': '#22aa22',
        'Cuadratura': '#cc0000',
        'Trígono': '#0000cc',
        'Quincuncio': '#999999',
        'Oposición': '#cc0000'
    };
    const widths = {
        'Conjunción': 1.2,
        'Semisextil': 0.5,
        'Semicuadratura': 0.5,
        'Sextil': 0.8,
        'Cuadratura': 1.0,
        'Trígono': 1.0,
        'Quincuncio': 0.5,
        'Oposición': 1.2
    };
    const dashes = {
        'Conjunción': '',
        'Semisextil': '2,2',
        'Semicuadratura': '2,2',
        'Sextil': '4,3',
        'Cuadratura': '6,3',
        'Trígono': '6,3',
        'Quincuncio': '2,2',
        'Oposición': '8,4'
    };

    // Solo dibujar aspectos principales (orb < 8°) para no saturar
    const mainAspects = aspects.filter(a => Math.abs(a.orb) < 8);

    mainAspects.forEach(asp => {
        const p1 = planets[asp.planet1];
        const p2 = planets[asp.planet2];
        if (!p1 || !p2) return;

        const a1 = toA(p1.longitude, acDeg);
        const a2 = toA(p2.longitude, acDeg);

        svg += `<line x1="${(cx + R * Math.cos(a1)).toFixed(1)}" y1="${(cy + R * Math.sin(a1)).toFixed(1)}" x2="${(cx + R * Math.cos(a2)).toFixed(1)}" y2="${(cy + R * Math.sin(a2)).toFixed(1)}" stroke="${colors[asp.type] || '#666'}" stroke-width="${widths[asp.type] || 0.8}" stroke-dasharray="${dashes[asp.type] || ''}"/>`;
    });

    return svg;
}

function drawPlanets(planets, cx, cy, R, acDeg) {
    let svg = '';

    planets.forEach((p, i) => {
        const a = toA(p.longitude, acDeg);
        const x = cx + R * Math.cos(a);
        const y = cy + R * Math.sin(a);

        const isLuminary = (i <= 1);
        const fs = isLuminary ? 18 : 14;

        svg += `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="#000000" font-size="${fs}" font-family="serif" font-weight="bold">${p.symbol}</text>`;

        if (p.isRetrograde) {
            svg += `<text x="${(x + 10).toFixed(1)}" y="${(y - 8).toFixed(1)}" fill="#cc0000" font-size="8" font-weight="bold" font-family="Arial">℞</text>`;
        }
    });

    return svg;
}

function drawNorthNode(nn, cx, cy, R, acDeg) {
    const a = toA(nn.longitude, acDeg);
    const x = cx + R * Math.cos(a);
    const y = cy + R * Math.sin(a);
    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="#333333" font-size="12" font-family="serif">☊</text>`;
}

function drawAngleLabels(chart, cx, cy, R, acDeg) {
    let svg = '';
    const lr = R + 25;

    const ascDMS = decimalToDMS(chart.ascendant % 30);
    const mcDMS = decimalToDMS(chart.mc % 30);
    const dscDMS = decimalToDMS(chart.houses.cusps[6].degree % 30);
    const icDMS = decimalToDMS(chart.houses.cusps[3].degree % 30);

    const angles = [
        { deg: chart.ascendant, text: 'AC', sub: `${chart.houses.ascendantSign.symbol} ${ascDMS.d}°${ascDMS.m}'${ascDMS.s}"`, color: '#cc0000' },
        { deg: chart.mc, text: 'MC', sub: `${chart.houses.mcSign.symbol} ${mcDMS.d}°${mcDMS.m}'${mcDMS.s}"`, color: '#0000cc' },
        { deg: ((chart.ascendant + 180) % 360), text: 'DC', sub: `${chart.houses.cusps[6].signSymbol} ${dscDMS.d}°${dscDMS.m}'`, color: '#cc6600' },
        { deg: ((chart.mc + 180) % 360), text: 'IC', sub: `${chart.houses.cusps[3].signSymbol} ${icDMS.d}°${icDMS.m}'`, color: '#006600' }
    ];

    angles.forEach(l => {
        const a = toA(l.deg, acDeg);
        const x = cx + lr * Math.cos(a);
        const y = cy + lr * Math.sin(a);

        svg += `<text x="${x.toFixed(1)}" y="${(y - 6).toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="${l.color}" font-size="11" font-family="Arial" font-weight="bold">${l.text}</text>`;
        svg += `<text x="${x.toFixed(1)}" y="${(y + 8).toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="#333" font-size="8" font-family="Arial">${l.sub}</text>`;
    });

    return svg;
}

function decimalToDMS(decimal) {
    const d = Math.floor(decimal);
    const mDecimal = (decimal - d) * 60;
    const m = Math.floor(mDecimal);
    const s = Math.floor((mDecimal - m) * 60);
    return { d, m, s };
}
