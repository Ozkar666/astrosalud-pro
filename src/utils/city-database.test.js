import { describe, it, expect } from 'vitest';
import { getCityCoordinates, CITIES } from './city-database.js';

describe('getCityCoordinates', () => {
  it('finds León by name', () => {
    const result = getCityCoordinates('León');
    expect(result).not.toBeNull();
    expect(result.name).toBe('León');
    expect(result.country).toBe('México');
    expect(result.lat).toBeCloseTo(21.116667, 3);
    expect(result.lon).toBeCloseTo(-101.683334, 3);
  });

  it('finds León with accent normalization', () => {
    const result = getCityCoordinates('leon');
    expect(result).not.toBeNull();
    expect(result.name).toBe('León');
  });

  it('finds Leon, Mexico by country', () => {
    const result = getCityCoordinates('Leon, Mexico');
    expect(result).not.toBeNull();
    expect(result.country).toBe('México');
  });

  it('returns null for unknown city', () => {
    const result = getCityCoordinates('xyz123');
    expect(result).toBeNull();
  });

  it('returns null for empty input', () => {
    expect(getCityCoordinates('')).toBeNull();
    expect(getCityCoordinates(null)).toBeNull();
    expect(getCityCoordinates(undefined)).toBeNull();
  });

  it('finds New York', () => {
    const result = getCityCoordinates('New York');
    expect(result).not.toBeNull();
    expect(result.name).toBe('New York');
    expect(result.country).toBe('USA');
  });

  it('finds London', () => {
    const result = getCityCoordinates('London');
    expect(result).not.toBeNull();
    expect(result.name).toBe('London');
    expect(result.country).toBe('UK');
  });

  it('finds Tokyo', () => {
    const result = getCityCoordinates('Tokyo');
    expect(result).not.toBeNull();
    expect(result.name).toBe('Tokio');
  });

  it('finds Sydney', () => {
    const result = getCityCoordinates('Sydney');
    expect(result).not.toBeNull();
    expect(result.name).toBe('Sydney');
  });
});

describe('CITIES', () => {
  it('has at least 20 entries', () => {
    expect(Object.keys(CITIES).length).toBeGreaterThanOrEqual(20);
  });

  it('each entry has required fields', () => {
    Object.values(CITIES).forEach(city => {
      expect(city).toHaveProperty('name');
      expect(city).toHaveProperty('lat');
      expect(city).toHaveProperty('lon');
      expect(city).toHaveProperty('tz');
      expect(typeof city.lat).toBe('number');
      expect(typeof city.lon).toBe('number');
    });
  });
});
