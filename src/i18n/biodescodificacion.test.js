import { describe, it, expect } from 'vitest';
import {
  BIODECODIFICACION,
  buscarEnGlosario,
  obtenerInfoBiodescodificacion,
  obtenerPorCategoria,
  buscarMultiples
} from './biodescodificacion.js';

describe('buscarEnGlosario', () => {
  it('finds ASMA by lowercase', () => {
    const result = buscarEnGlosario('asma');
    expect(result).not.toBeNull();
    expect(result.nombre).toBe('Asma');
    expect(result.categoria).toBe('respiratorio');
  });

  it('finds ASMA by uppercase (case insensitive)', () => {
    const result = buscarEnGlosario('ASMA');
    expect(result).not.toBeNull();
    expect(result.nombre).toBe('Asma');
  });

  it('returns null for unknown term', () => {
    const result = buscarEnGlosario('xyz123');
    expect(result).toBeNull();
  });

  it('finds by partial match', () => {
    const result = buscarEnGlosario('diab');
    expect(result).not.toBeNull();
    expect(result.nombre).toBe('Diabetes');
  });
});

describe('obtenerInfoBiodescodificacion', () => {
  it('returns full info object for asma', () => {
    const result = obtenerInfoBiodescodificacion('asma');
    expect(result).not.toBeNull();
    expect(result).toHaveProperty('nombre');
    expect(result).toHaveProperty('categoria');
    expect(result).toHaveProperty('conflicto');
    expect(result).toHaveProperty('etapa');
    expect(result).toHaveProperty('fuentes');
    expect(result).toHaveProperty('consejos');
    expect(Array.isArray(result.consejos)).toBe(true);
  });

  it('returns null for unknown condition', () => {
    const result = obtenerInfoBiodescodificacion('xyz123');
    expect(result).toBeNull();
  });
});

describe('obtenerPorCategoria', () => {
  it('returns array of respiratory conditions', () => {
    const result = obtenerPorCategoria('respiratorio');
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    result.forEach(item => {
      expect(item.categoria).toBe('respiratorio');
    });
  });

  it('returns empty array for non-existent category', () => {
    const result = obtenerPorCategoria('nonexistent');
    expect(result).toEqual([]);
  });
});

describe('buscarMultiples', () => {
  it('returns array of results for multiple conditions', () => {
    const result = buscarMultiples(['asma', 'diabetes']);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
  });

  it('skips unknown conditions gracefully', () => {
    const result = buscarMultiples(['asma', 'xyz123', 'diabetes']);
    expect(result.length).toBe(2);
  });

  it('returns empty array for all unknown', () => {
    const result = buscarMultiples(['xyz123', 'abc456']);
    expect(result).toEqual([]);
  });
});
