/**
 * Base de datos de ciudades verificadas
 * Coordenadas exactas y zona horaria
 */

const CITIES = {
    'leon': { name: 'León', state: 'Guanajuato', country: 'México', lat: 21.116667, lon: -101.683334, tz: -6 },
    'guadalajara': { name: 'Guadalajara', state: 'Jalisco', country: 'México', lat: 20.659699, lon: -103.349609, tz: -6 },
    'mexico': { name: 'Ciudad de México', state: 'CDMX', country: 'México', lat: 19.4326, lon: -99.1332, tz: -6 },
    'monterrey': { name: 'Monterrey', state: 'Nuevo León', country: 'México', lat: 25.686614, lon: -100.316116, tz: -6 },
    'puebla': { name: 'Puebla', state: 'Puebla', country: 'México', lat: 19.0414, lon: -98.2063, tz: -6 },
    'queretaro': { name: 'Querétaro', state: 'Querétaro', country: 'México', lat: 20.5888, lon: -100.3899, tz: -6 },
    'merida': { name: 'Mérida', state: 'Yucatán', country: 'México', lat: 20.9674, lon: -89.5926, tz: -6 },
    'cancun': { name: 'Cancún', state: 'Quintana Roo', country: 'México', lat: 21.1619, lon: -86.8515, tz: -5 },
    'tijuana': { name: 'Tijuana', state: 'Baja California', country: 'México', lat: 32.5149, lon: -117.0382, tz: -8 },
    'newyork': { name: 'New York', state: 'NY', country: 'USA', lat: 40.7128, lon: -74.006, tz: -5 },
    'losangeles': { name: 'Los Angeles', state: 'CA', country: 'USA', lat: 34.0522, lon: -118.2437, tz: -8 },
    'chicago': { name: 'Chicago', state: 'IL', country: 'USA', lat: 41.8781, lon: -87.6298, tz: -6 },
    'miami': { name: 'Miami', state: 'FL', country: 'USA', lat: 25.7617, lon: -80.1918, tz: -5 },
    'houston': { name: 'Houston', state: 'TX', country: 'USA', lat: 29.7604, lon: -95.3698, tz: -6 },
    'madrid': { name: 'Madrid', state: 'Madrid', country: 'España', lat: 40.4168, lon: -3.7038, tz: 1 },
    'barcelona': { name: 'Barcelona', state: 'Cataluña', country: 'España', lat: 41.3851, lon: 2.1734, tz: 1 },
    'bogota': { name: 'Bogotá', state: 'Cundinamarca', country: 'Colombia', lat: 4.711, lon: -74.0721, tz: -5 },
    'lima': { name: 'Lima', state: 'Lima', country: 'Perú', lat: -12.0464, lon: -77.0428, tz: -5 },
    'buenosaires': { name: 'Buenos Aires', state: 'BA', country: 'Argentina', lat: -34.6037, lon: -58.3816, tz: -3 },
    'santiagochile': { name: 'Santiago', state: 'RM', country: 'Chile', lat: -33.4489, lon: -70.6693, tz: -4 },
    'santiagodc': { name: 'Santiago de los Caballeros', state: 'Santiago', country: 'República Dominicana', lat: 19.4517, lon: -70.697, tz: -4 },
    'sanjose': { name: 'San José', state: 'San José', country: 'Costa Rica', lat: 9.9281, lon: -84.0907, tz: -6 },
    'panama': { name: 'Ciudad de Panamá', state: 'Panamá', country: 'Panamá', lat: 8.9824, lon: -79.5199, tz: -5 },
    'caracas': { name: 'Caracas', state: 'Distrito Capital', country: 'Venezuela', lat: 10.4806, lon: -66.9036, tz: -4 },
    'guayaquil': { name: 'Guayaquil', state: 'Guayas', country: 'Ecuador', lat: -2.171, lon: -79.9224, tz: -5 },
    'havana': { name: 'La Habana', state: 'La Habana', country: 'Cuba', lat: 23.1136, lon: -82.3666, tz: -5 },
    'santodomingo': { name: 'Santo Domingo', state: 'Distrito Nacional', country: 'República Dominicana', lat: 18.4861, lon: -69.9312, tz: -4 },
    'sanjuan': { name: 'San Juan', state: 'San Juan', country: 'Puerto Rico', lat: 18.4655, lon: -66.1057, tz: -4 },
    'london': { name: 'London', state: 'England', country: 'UK', lat: 51.5074, lon: -0.1278, tz: 0 },
    'paris': { name: 'Paris', state: 'Île-de-France', country: 'Francia', lat: 48.8566, lon: 2.3522, tz: 1 },
    'berlin': { name: 'Berlin', state: 'Berlin', country: 'Alemania', lat: 52.52, lon: 13.405, tz: 1 },
    'tokyo': { name: 'Tokio', state: 'Tokyo', country: 'Japón', lat: 35.6762, lon: 139.6503, tz: 9 },
    'sydney': { name: 'Sydney', state: 'NSW', country: 'Australia', lat: -33.8688, lon: 151.2093, tz: 10 }
};

export function getCityCoordinates(place) {
    if (!place) return null;
    const normalized = place.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

    // Buscar coincidencia exacta
    for (const [key, city] of Object.entries(CITIES)) {
        if (normalized.includes(key) || normalized.includes(city.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
            return city;
        }
    }

    // Buscar por país
    for (const [key, city] of Object.entries(CITIES)) {
        if (normalized.includes(city.country.toLowerCase())) {
            return city;
        }
    }

    return null;
}

export { CITIES };
