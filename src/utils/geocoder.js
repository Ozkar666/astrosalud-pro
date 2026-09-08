/**
 * Geocodificación全球 con Nominatim (OpenStreetMap)
 * API gratuita sin clave, límite: 1 request/segundo
 */

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org';
const APP_NAME = 'AstroSaludPro/1.0';

let lastRequestTime = 0;
const MIN_INTERVAL_MS = 1100;

async function rateLimitedFetch(url) {
    const now = Date.now();
    const elapsed = now - lastRequestTime;
    if (elapsed < MIN_INTERVAL_MS) {
        await new Promise(resolve => setTimeout(resolve, MIN_INTERVAL_MS - elapsed));
    }
    lastRequestTime = Date.now();
    return fetch(url);
}

/**
 * Buscar ciudades por texto (autocomplete)
 * @param {string} query - Texto de búsqueda
 * @param {string} lang - Código de idioma (default: 'es')
 * @returns {Promise<Array>} Lista de resultados con nombre, coords, etc.
 */
export async function searchCities(query, lang = 'es') {
    if (!query || query.length < 2) return [];

    const url = `${NOMINATIM_URL}/search?q=${encodeURIComponent(query)}&format=json&limit=8&addressdetails=1&accept-language=${lang}`;
    
    try {
        const res = await rateLimitedFetch(url);
        if (!res.ok) return [];
        const data = await res.json();
        
        return data.map(item => ({
            displayName: item.display_name,
            name: item.address?.city || item.address?.town || item.address?.village || item.address?.municipality || item.name || query,
            state: item.address?.state || item.address?.region || '',
            country: item.address?.country || '',
            countryCode: item.address?.country_code?.toUpperCase() || '',
            lat: parseFloat(item.lat),
            lon: parseFloat(item.lon),
            type: item.type,
            importance: item.importance
        })).filter(item => item.lat && item.lon);
    } catch (err) {
        console.warn('Geocoding search error:', err);
        return [];
    }
}

/**
 * Obtener coordenadas exactas de una ciudad por geocodificación inversa
 * @param {number} lat - Latitud
 * @param {number} lon - Longitud
 * @returns {Promise<Object>} Información de la ubicación
 */
export async function reverseGeocode(lat, lon) {
    const url = `${NOMINATIM_URL}/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1&accept-language=es,en`;
    
    try {
        const res = await rateLimitedFetch(url);
        if (!res.ok) return null;
        const data = await res.json();
        
        return {
            displayName: data.display_name,
            name: data.address?.city || data.address?.town || data.address?.village || data.name || '',
            state: data.address?.state || data.address?.region || '',
            country: data.address?.country || '',
            countryCode: data.address?.country_code?.toUpperCase() || ''
        };
    } catch (err) {
        console.warn('Reverse geocoding error:', err);
        return null;
    }
}

/**
 * Estimar zona horaria basada en la longitud
 * Esto es una aproximación - para precisión se necesita la base de datos IANA tz
 * @param {number} lon - Longitud
 * @returns {number} Offset horario estimado (horas)
 */
export function estimateTimezoneOffset(lon) {
    const NON_INTEGER_TZ = [
        { lonMin: 52.5, lonMax: 60, offset: 3.5 },    // Iran UTC+3:30
        { lonMin: 60, lonMax: 72, offset: 4.5 },       // Afghanistan UTC+4:30
        { lonMin: 72, lonMax: 82.5, offset: 5.5 },     // India UTC+5:30
        { lonMin: 82.5, lonMax: 88, offset: 5.75 },    // Nepal UTC+5:45
        { lonMin: 88, lonMax: 98, offset: 6.5 },       // Myanmar UTC+6:30
        { lonMin: -65, lonMax: -57, offset: -3.5 },    // Newfoundland UTC-3:30
        { lonMin: -67.5, lonMax: -60, offset: -4.5 },  // Venezuela UTC-4:30
        { lonMin: 172, lonMax: 178, offset: 12.75 },   // Chatham Islands UTC+12:45
    ];

    for (const tz of NON_INTEGER_TZ) {
        if (lon >= tz.lonMin && lon < tz.lonMax) return tz.offset;
    }

    // Default: round to nearest integer
    return Math.round(lon / 15);
}

export const TIMEZONE_PRESETS = [
    { offset: -12, label: 'UTC-12:00' },
    { offset: -11, label: 'UTC-11:00' },
    { offset: -10, label: 'UTC-10:00' },
    { offset: -9.5, label: 'UTC-09:30' },
    { offset: -9, label: 'UTC-09:00' },
    { offset: -8, label: 'UTC-08:00' },
    { offset: -7, label: 'UTC-07:00' },
    { offset: -6, label: 'UTC-06:00' },
    { offset: -5, label: 'UTC-05:00' },
    { offset: -4.5, label: 'UTC-04:30' },
    { offset: -4, label: 'UTC-04:00' },
    { offset: -3.5, label: 'UTC-03:30' },
    { offset: -3, label: 'UTC-03:00' },
    { offset: -2, label: 'UTC-02:00' },
    { offset: -1, label: 'UTC-01:00' },
    { offset: 0, label: 'UTC+00:00' },
    { offset: 1, label: 'UTC+01:00' },
    { offset: 2, label: 'UTC+02:00' },
    { offset: 3, label: 'UTC+03:00' },
    { offset: 3.5, label: 'UTC+03:30' },
    { offset: 4, label: 'UTC+04:00' },
    { offset: 4.5, label: 'UTC+04:30' },
    { offset: 5, label: 'UTC+05:00' },
    { offset: 5.5, label: 'UTC+05:30' },
    { offset: 5.75, label: 'UTC+05:45' },
    { offset: 6, label: 'UTC+06:00' },
    { offset: 6.5, label: 'UTC+06:30' },
    { offset: 7, label: 'UTC+07:00' },
    { offset: 8, label: 'UTC+08:00' },
    { offset: 8.75, label: 'UTC+08:45' },
    { offset: 9, label: 'UTC+09:00' },
    { offset: 9.5, label: 'UTC+09:30' },
    { offset: 10, label: 'UTC+10:00' },
    { offset: 10.5, label: 'UTC+10:30' },
    { offset: 11, label: 'UTC+11:00' },
    { offset: 12, label: 'UTC+12:00' },
    { offset: 12.75, label: 'UTC+12:45' },
    { offset: 13, label: 'UTC+13:00' },
    { offset: 14, label: 'UTC+14:00' },
];
