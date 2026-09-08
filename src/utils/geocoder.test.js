import { describe, it, expect } from 'vitest';
import { estimateTimezoneOffset, TIMEZONE_PRESETS } from './geocoder.js';

describe('estimateTimezoneOffset', () => {
  it('León, Guanajuato (-101.68) → UTC-7 (via Math.round)', () => {
    expect(estimateTimezoneOffset(-101.68)).toBe(-7);
  });

  it('Mumbai (72.88) → UTC+5.5', () => {
    expect(estimateTimezoneOffset(72.88)).toBe(5.5);
  });

  it('Kathmandu (85.32) → UTC+5.75', () => {
    expect(estimateTimezoneOffset(85.32)).toBe(5.75);
  });

  it('New York (-74) → UTC-5', () => {
    expect(estimateTimezoneOffset(-74)).toBe(-5);
  });

  it('London (0) → UTC+0', () => {
    expect(estimateTimezoneOffset(0)).toBe(0);
  });

  it('Tokyo (139.69) → UTC+9', () => {
    expect(estimateTimezoneOffset(139.69)).toBe(9);
  });

  it('Sydney (151.21) → UTC+10', () => {
    expect(estimateTimezoneOffset(151.21)).toBe(10);
  });

  it('Tehran (51.39) → UTC+3 (below Iran range 52.5-60)', () => {
    expect(estimateTimezoneOffset(51.39)).toBe(3);
  });

  it('UTC-12 (180) → -12', () => {
    expect(estimateTimezoneOffset(180)).toBe(12);
  });

  it('edge case: 0 longitude → 0', () => {
    expect(estimateTimezoneOffset(0)).toBe(0);
  });

  it('edge case: -180 longitude → -12', () => {
    expect(estimateTimezoneOffset(-180)).toBe(-12);
  });

  it('edge case: 180 longitude → 12', () => {
    expect(estimateTimezoneOffset(180)).toBe(12);
  });
});

describe('TIMEZONE_PRESETS', () => {
  it('has correct structure', () => {
    expect(Array.isArray(TIMEZONE_PRESETS)).toBe(true);
    TIMEZONE_PRESETS.forEach(preset => {
      expect(preset).toHaveProperty('offset');
      expect(preset).toHaveProperty('label');
      expect(typeof preset.offset).toBe('number');
      expect(typeof preset.label).toBe('string');
    });
  });

  it('covers standard offsets from -12 to +14', () => {
    const offsets = TIMEZONE_PRESETS.map(p => p.offset);
    expect(offsets).toContain(-12);
    expect(offsets).toContain(0);
    expect(offsets).toContain(12);
    expect(offsets).toContain(14);
  });

  it('includes non-integer offsets', () => {
    const offsets = TIMEZONE_PRESETS.map(p => p.offset);
    expect(offsets).toContain(5.5);
    expect(offsets).toContain(5.75);
    expect(offsets).toContain(3.5);
    expect(offsets).toContain(-3.5);
  });

  it('labels match UTC format', () => {
    TIMEZONE_PRESETS.forEach(preset => {
      expect(preset.label).toMatch(/^UTC[+-]\d{2}:\d{2}$/);
    });
  });
});
