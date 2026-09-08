import { describe, it, expect } from 'vitest';
import { NatalChart } from './engine.js';

const chart = new NatalChart();

describe('NatalChart._normalize', () => {
  it('370 → 10', () => {
    expect(chart._normalize(370)).toBe(10);
  });

  it('-10 → 350', () => {
    expect(chart._normalize(-10)).toBe(350);
  });

  it('0 → 0', () => {
    expect(chart._normalize(0)).toBe(0);
  });

  it('360 → 0', () => {
    expect(chart._normalize(360)).toBe(0);
  });

  it('-360 → 0', () => {
    expect(chart._normalize(-360)).toBe(0);
  });

  it('720 → 0', () => {
    expect(chart._normalize(720)).toBe(0);
  });
});

describe('NatalChart._getSign', () => {
  it('15 → Aries', () => {
    expect(chart._getSign(15).name).toBe('Aries');
  });

  it('45 → Tauro', () => {
    expect(chart._getSign(45).name).toBe('Tauro');
  });

  it('359 → Piscis', () => {
    expect(chart._getSign(359).name).toBe('Piscis');
  });

  it('0 → Aries', () => {
    expect(chart._getSign(0).name).toBe('Aries');
  });

  it('30 → Tauro', () => {
    expect(chart._getSign(30).name).toBe('Tauro');
  });

  it('120 → Leo', () => {
    expect(chart._getSign(120).name).toBe('Leo');
  });

  it('270 → Capricornio', () => {
    expect(chart._getSign(270).name).toBe('Capricornio');
  });

  it('330 → Piscis', () => {
    expect(chart._getSign(330).name).toBe('Piscis');
  });
});

describe('NatalChart._decimalToDMS', () => {
  it('25.5 → degrees=25, minutes=30, seconds=0', () => {
    const dms = chart._decimalToDMS(25.5);
    expect(dms.degrees).toBe(25);
    expect(dms.minutes).toBe(30);
    expect(dms.seconds).toBe(0);
  });

  it('0 → degrees=0, minutes=0, seconds=0', () => {
    const dms = chart._decimalToDMS(0);
    expect(dms.degrees).toBe(0);
    expect(dms.minutes).toBe(0);
    expect(dms.seconds).toBe(0);
  });

  it('10.75 → degrees=10, minutes=45, seconds=0', () => {
    const dms = chart._decimalToDMS(10.75);
    expect(dms.degrees).toBe(10);
    expect(dms.minutes).toBe(45);
    expect(dms.seconds).toBe(0);
  });

  it('15.5033 → degrees=15, minutes=30, seconds=11', () => {
    const dms = chart._decimalToDMS(15.5033);
    expect(dms.degrees).toBe(15);
    expect(dms.minutes).toBe(30);
    expect(dms.seconds).toBe(11);
  });
});
