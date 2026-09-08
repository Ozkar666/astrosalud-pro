/**
 * Motor de Carta Natal - Swiss Ephemeris (JPL Precision)
 * Usa @swisseph/browser con archivos Swiss Ephemeris desde CDN
 */

import { SwissEphemeris, Planet, HouseSystem, CalculationFlag, EclipseType } from '@swisseph/browser';

const PLANET_INFO = [
    { name: 'Sol', symbol: '☉', planet: Planet.Sun },
    { name: 'Luna', symbol: '☽', planet: Planet.Moon },
    { name: 'Mercurio', symbol: '☿', planet: Planet.Mercury },
    { name: 'Venus', symbol: '♀', planet: Planet.Venus },
    { name: 'Marte', symbol: '♂', planet: Planet.Mars },
    { name: 'Júpiter', symbol: '♃', planet: Planet.Jupiter },
    { name: 'Saturno', symbol: '♄', planet: Planet.Saturn },
    { name: 'Urano', symbol: '♅', planet: Planet.Uranus },
    { name: 'Neptuno', symbol: '♆', planet: Planet.Neptune },
    { name: 'Plutón', symbol: '♇', planet: Planet.Pluto }
];

const SIGNS = [
    { name: 'Aries', symbol: '♈', element: 'Fuego', modality: 'Cardinal', start: 0 },
    { name: 'Tauro', symbol: '♉', element: 'Tierra', modality: 'Fijo', start: 30 },
    { name: 'Géminis', symbol: '♊', element: 'Aire', modality: 'Mutable', start: 60 },
    { name: 'Cáncer', symbol: '♋', element: 'Agua', modality: 'Cardinal', start: 90 },
    { name: 'Leo', symbol: '♌', element: 'Fuego', modality: 'Fijo', start: 120 },
    { name: 'Virgo', symbol: '♍', element: 'Tierra', modality: 'Mutable', start: 150 },
    { name: 'Libra', symbol: '♎', element: 'Aire', modality: 'Cardinal', start: 180 },
    { name: 'Escorpio', symbol: '♏', element: 'Agua', modality: 'Fijo', start: 210 },
    { name: 'Sagitario', symbol: '♐', element: 'Fuego', modality: 'Mutable', start: 240 },
    { name: 'Capricornio', symbol: '♑', element: 'Tierra', modality: 'Cardinal', start: 270 },
    { name: 'Acuario', symbol: '♒', element: 'Aire', modality: 'Fijo', start: 300 },
    { name: 'Piscis', symbol: '♓', element: 'Agua', modality: 'Mutable', start: 330 }
];

const HOUSE_SYSTEMS = {
    'placidus': HouseSystem.Placidus,
    'koch': HouseSystem.Koch,
    'whole': HouseSystem.WholeSign,
    'equal': HouseSystem.Equal,
    'regiomontanus': HouseSystem.Regiomontanus,
    'campanus': HouseSystem.Campanus
};

const ASPECT_TYPES = [
    { name: 'Conjunción', symbol: '☌', angle: 0, orb: 10, nature: 'fuerte' },
    { name: 'Semisextil', symbol: '⚺', angle: 30, orb: 3, nature: 'menor' },
    { name: 'Semicuadratura', symbol: '⚻', angle: 45, orb: 2, nature: 'menor' },
    { name: 'Sextil', symbol: '⚹', angle: 60, orb: 6, nature: 'moderado' },
    { name: 'Cuadratura', symbol: '□', angle: 90, orb: 8, nature: 'tensión' },
    { name: 'Trígono', symbol: '△', angle: 120, orb: 8, nature: 'armonía' },
    { name: 'Quincuncio', symbol: '⚻', angle: 150, orb: 3, nature: 'menor' },
    { name: 'Oposición', symbol: '☍', angle: 180, orb: 10, nature: 'desafío' }
];

export class NatalChart {
    constructor() {
        this.swe = null;
        this.ready = false;
        this.useSwissEphemeris = false;
    }

    async init() {
        if (this.ready) return;
        this.swe = new SwissEphemeris();
        await this.swe.init();

        // Cargar archivos Swiss Ephemeris desde CDN para precisión JPL
        try {
            await this.swe.loadStandardEphemeris();
            this.useSwissEphemeris = true;
        } catch (e) {
            this.useSwissEphemeris = false;
        }

        this.ready = true;
    }

    calculate(year, month, day, hour, minute, latitude, longitude, tzOffset, houseSystem = 'placidus') {
        if (!this.ready) throw new Error('Swiss Ephemeris no inicializado');

        // Convertir hora local a UTC decimal
        const utcHour = hour + minute / 60 - tzOffset;

        // Calcular Julian Day en UTC (precisión decimal preservada)
        const jd = this.swe.julianDay(year, month, day, utcHour);

        // Calcular posiciones planetarias
        const planets = this._calculatePlanets(jd);

        // Calcular casas
        const houses = this._calculateHouses(jd, latitude, longitude, houseSystem);

        // Calcular aspectos
        const aspects = this._calculateAspects(planets);

        // Nodo Norte (mean node)
        const northNode = this._calculateNorthNode(jd);

        return {
            planets,
            houses,
            aspects,
            northNode,
            ascendant: houses.ascendant,
            mc: houses.mc,
            julianDay: jd
        };
    }

    _calculatePlanets(jd) {
        const planets = [];
        // Moshier: built into WASM, ~1' accuracy for Sun/Moon
        // SwissEphemeris requires external .se1 files not available in browser
        const flags = this.useSwissEphemeris
            ? CalculationFlag.SwissEphemeris | CalculationFlag.Speed
            : CalculationFlag.MoshierEphemeris | CalculationFlag.Speed;

        for (let i = 0; i < PLANET_INFO.length; i++) {
            const info = PLANET_INFO[i];
            const pos = this.swe.calculatePosition(jd, info.planet, flags);
            const signData = this._getSign(pos.longitude);
            const dms = this._decimalToDMS(pos.longitude % 30);

            planets.push({
                index: i,
                name: info.name,
                symbol: info.symbol,
                longitude: pos.longitude,
                latitude: pos.latitude,
                distance: pos.distance,
                speed: pos.longitudeSpeed,
                isRetrograde: pos.longitudeSpeed < 0,
                sign: signData.name,
                signSymbol: signData.symbol,
                signIndex: signData.index,
                degree: dms.degrees,
                minute: dms.minutes,
                second: dms.seconds,
                element: signData.element,
                modality: signData.modality
            });
        }

        return planets;
    }

    _calculateHouses(jd, latitude, longitude, houseSystem) {
        const hs = HOUSE_SYSTEMS[houseSystem] || HouseSystem.Placidus;
        const result = this.swe.calculateHouses(jd, latitude, longitude, hs);

        const cusps = [];
        for (let i = 1; i <= 12; i++) {
            const deg = result.cusps[i];
            const actualDeg = (deg !== undefined && deg !== null) ? deg : result.cusps[i - 1];
            const signData = this._getSign(actualDeg);
            const dms = this._decimalToDMS(actualDeg % 30);
            cusps.push({
                house: i,
                degree: actualDeg,
                sign: signData.name,
                signSymbol: signData.symbol,
                signIndex: signData.index,
                degreeInSign: dms.degrees,
                minuteInSign: dms.minutes,
                secondInSign: dms.seconds
            });
        }

        return {
            cusps,
            ascendant: result.ascendant,
            mc: result.mc,
            armc: result.armc,
            vertex: result.vertex,
            ascendantSign: this._getSign(result.ascendant),
            mcSign: this._getSign(result.mc)
        };
    }

    _calculateAspects(planets) {
        const aspects = [];

        for (let i = 0; i < planets.length; i++) {
            for (let j = i + 1; j < planets.length; j++) {
                let diff = planets[i].longitude - planets[j].longitude;

                // Normalizar a -180..+180
                while (diff > 180) diff -= 360;
                while (diff < -180) diff += 360;

                const absDiff = Math.abs(diff);

                for (const t of ASPECT_TYPES) {
                    const orb = absDiff - t.angle;
                    if (Math.abs(orb) <= t.orb) {
                        aspects.push({
                            planet1: i,
                            planet2: j,
                            planet1Name: planets[i].name,
                            planet2Name: planets[j].name,
                            type: t.name,
                            symbol: t.symbol,
                            angle: absDiff,
                            exactAngle: t.angle,
                            orb: orb,
                            nature: t.nature
                        });
                        break;
                    }
                }
            }
        }

        // Ordenar por exactitud del aspecto
        aspects.sort((a, b) => Math.abs(a.orb) - Math.abs(b.orb));

        return aspects;
    }

    _calculateNorthNode(jd) {
        // Mean North Node (Meeus formula)
        const T = (jd - 2451545.0) / 36525.0;
        const longitude = this._normalize(((125.0445 - 1934.1362 * T) % 360 + 360) % 360);
        const signData = this._getSign(longitude);
        const dms = this._decimalToDMS(longitude % 30);

        return {
            name: 'Nodo Norte',
            symbol: '☊',
            longitude,
            sign: signData.name,
            signSymbol: signData.symbol,
            degree: dms.degrees,
            minute: dms.minutes,
            second: dms.seconds
        };
    }

    _getSign(longitude) {
        const normalized = this._normalize(longitude);
        const index = Math.floor(normalized / 30);
        return {
            index,
            name: SIGNS[index].name,
            symbol: SIGNS[index].symbol,
            element: SIGNS[index].element,
            modality: SIGNS[index].modality
        };
    }

    _normalize(deg) {
        return ((deg % 360) + 360) % 360;
    }

    _decimalToDMS(decimal) {
        const degrees = Math.floor(decimal);
        const minutesDecimal = (decimal - degrees) * 60;
        const minutes = Math.floor(minutesDecimal);
        const seconds = Math.floor((minutesDecimal - minutes) * 60);
        return { degrees, minutes, seconds };
    }

    _formatPosition(longitude) {
        const signData = this._getSign(longitude);
        const dms = this._decimalToDMS(longitude % 30);
        return `${signData.symbol} ${signData.name} ${dms.degrees}°${String(dms.minutes).padStart(2,'0')}'${String(dms.seconds).padStart(2,'0')}" (${longitude.toFixed(4)}°)`;
    }

    close() {
        if (this.swe) {
            this.swe.close();
            this.ready = false;
        }
    }

    calculateTransits(natalChart, transitYear, transitMonth, transitDay, transitHour, transitMinute, latitude, longitude, tzOffset) {
        if (!this.ready) throw new Error('Swiss Ephemeris no inicializado');

        const utcHour = transitHour + transitMinute / 60 - tzOffset;
        const jd = this.swe.julianDay(transitYear, transitMonth, transitDay, utcHour);
        const transitPlanets = this._calculatePlanets(jd);
        const transitAspects = [];

        for (let i = 0; i < transitPlanets.length; i++) {
            for (let j = 0; j < natalChart.planets.length; j++) {
                let diff = transitPlanets[i].longitude - natalChart.planets[j].longitude;
                while (diff > 180) diff -= 360;
                while (diff < -180) diff += 360;
                const absDiff = Math.abs(diff);

                for (const t of ASPECT_TYPES) {
                    const orb = absDiff - t.angle;
                    if (Math.abs(orb) <= t.orb) {
                        transitAspects.push({
                            transitPlanet: transitPlanets[i].name,
                            transitSymbol: transitPlanets[i].symbol,
                            natalPlanet: natalChart.planets[j].name,
                            natalSymbol: natalChart.planets[j].symbol,
                            type: t.name,
                            symbol: t.symbol,
                            angle: absDiff,
                            exactAngle: t.angle,
                            orb: Math.abs(orb),
                            nature: t.nature,
                            isApplying: Math.abs(orb) < 1
                        });
                        break;
                    }
                }
            }
        }

        transitAspects.sort((a, b) => a.orb - b.orb);

        return {
            planets: transitPlanets,
            aspects: transitAspects,
            julianDay: jd
        };
    }

    findEclipses(startJd, forward = true) {
        const results = [];

        try {
            const solar = this.swe.findNextSolarEclipse(startJd, undefined, undefined, !forward);
            if (solar) {
                const date = this.swe.julianDayToDate(solar.julianDayEclipse || solar.julianDay || startJd + 29.5);
                results.push({
                    type: 'Solar',
                    date: date,
                    kind: solar.eclipseKind || 'Parcial',
                    julianDay: solar.julianDayEclipse || solar.julianDay
                });
            }
        } catch (e) { /* ignore */ }

        try {
            const lunar = this.swe.findNextLunarEclipse(startJd, undefined, undefined, !forward);
            if (lunar) {
                const date = this.swe.julianDayToDate(lunar.julianDayEclipse || lunar.julianDay || startJd + 14.77);
                results.push({
                    type: 'Lunar',
                    date: date,
                    kind: lunar.eclipseKind || 'Parcial',
                    julianDay: lunar.julianDayEclipse || lunar.julianDay
                });
            }
        } catch (e) { /* ignore */ }

        return results;
    }

    calculateTransitsForPeriod(natalChart, year, month, latitude, longitude, tzOffset, months = 12) {
        const periods = [];
        const startJd = this.swe.julianDay(year, month, 1, 12);

        for (let m = 0; m < months; m++) {
            const d = new Date(year, month - 1 + m, 15);
            const jd = this.swe.julianDay(d.getFullYear(), d.getMonth() + 1, 15, 12);
            const transitPlanets = [];
            const flags = this.useSwissEphemeris
                ? CalculationFlag.SwissEphemeris | CalculationFlag.Speed
                : CalculationFlag.MoshierEphemeris | CalculationFlag.Speed;

            for (let i = 0; i < PLANET_INFO.length; i++) {
                const info = PLANET_INFO[i];
                const pos = this.swe.calculatePosition(jd, info.planet, flags);
                transitPlanets.push({
                    index: i,
                    name: info.name,
                    symbol: info.symbol,
                    longitude: pos.longitude,
                    speed: pos.longitudeSpeed,
                    isRetrograde: pos.longitudeSpeed < 0,
                    sign: this._getSign(pos.longitude).name,
                    signSymbol: this._getSign(pos.longitude).symbol
                });
            }

            const monthAspects = [];
            for (const tp of transitPlanets) {
                for (let j = 0; j < natalChart.planets.length; j++) {
                    let diff = tp.longitude - natalChart.planets[j].longitude;
                    while (diff > 180) diff -= 360;
                    while (diff < -180) diff += 360;
                    const absDiff = Math.abs(diff);

                    for (const t of ASPECT_TYPES) {
                        if (t.nature === 'menor') continue;
                        const orb = absDiff - t.angle;
                        if (Math.abs(orb) <= t.orb) {
                            monthAspects.push({
                                transitPlanet: tp.name,
                                transitSymbol: tp.symbol,
                                natalPlanet: natalChart.planets[j].name,
                                natalSymbol: natalChart.planets[j].symbol,
                                type: t.name,
                                symbol: t.symbol,
                                angle: absDiff,
                                orb: Math.abs(orb),
                                nature: t.nature,
                                isExact: Math.abs(orb) < 0.5
                            });
                            break;
                        }
                    }
                }
            }

            const eclipses = this.findEclipses(jd);

            periods.push({
                month: d.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' }),
                year: d.getFullYear(),
                monthNum: d.getMonth() + 1,
                planets: transitPlanets,
                aspects: monthAspects,
                eclipses: eclipses
            });
        }

        return periods;
    }
}

export { PLANET_INFO, SIGNS, HOUSE_SYSTEMS, ASPECT_TYPES };
