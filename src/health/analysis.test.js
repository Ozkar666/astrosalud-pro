import { describe, it, expect, beforeEach } from 'vitest';
import {
  analyzeHealthTendencies,
  setAnalysisLanguage,
  translatePlanet,
  translateSign,
  getTranslatedPracticalAdvice
} from './analysis.js';

const mockChart = {
  planets: [
    { name: 'Sol', symbol: '☉', longitude: 45, latitude: 0, distance: 1, speed: 1, isRetrograde: false, sign: 'Tauro', signSymbol: '♉', signIndex: 1, degree: 15, minute: 0, second: 0, element: 'Tierra', modality: 'Fijo', index: 0 },
    { name: 'Luna', symbol: '☽', longitude: 120, latitude: 0, distance: 1, speed: 13, isRetrograde: false, sign: 'Leo', signSymbol: '♌', signIndex: 4, degree: 0, minute: 0, second: 0, element: 'Fuego', modality: 'Fijo', index: 1 },
    { name: 'Mercurio', symbol: '☿', longitude: 20, latitude: 0, distance: 1, speed: 1, isRetrograde: false, sign: 'Aries', signSymbol: '♈', signIndex: 0, degree: 20, minute: 0, second: 0, element: 'Fuego', modality: 'Cardinal', index: 2 },
    { name: 'Venus', symbol: '♀', longitude: 90, latitude: 0, distance: 1, speed: 1, isRetrograde: false, sign: 'Cáncer', signSymbol: '♋', signIndex: 3, degree: 0, minute: 0, second: 0, element: 'Agua', modality: 'Cardinal', index: 3 },
    { name: 'Marte', symbol: '♂', longitude: 200, latitude: 0, distance: 1, speed: 0.5, isRetrograde: false, sign: 'Libra', signSymbol: '♎', signIndex: 6, degree: 20, minute: 0, second: 0, element: 'Aire', modality: 'Cardinal', index: 4 },
    { name: 'Júpiter', symbol: '♃', longitude: 250, latitude: 0, distance: 1, speed: 0.1, isRetrograde: false, sign: 'Escorpio', signSymbol: '♏', signIndex: 7, degree: 10, minute: 0, second: 0, element: 'Agua', modality: 'Fijo', index: 5 },
    { name: 'Saturno', symbol: '♄', longitude: 300, latitude: 0, distance: 1, speed: 0.05, isRetrograde: false, sign: 'Acuario', signSymbol: '♒', signIndex: 10, degree: 0, minute: 0, second: 0, element: 'Aire', modality: 'Fijo', index: 6 },
    { name: 'Urano', symbol: '♅', longitude: 310, latitude: 0, distance: 1, speed: 0.02, isRetrograde: false, sign: 'Acuario', signSymbol: '♒', signIndex: 10, degree: 10, minute: 0, second: 0, element: 'Aire', modality: 'Fijo', index: 7 },
    { name: 'Neptuno', symbol: '♆', longitude: 350, latitude: 0, distance: 1, speed: 0.01, isRetrograde: false, sign: 'Piscis', signSymbol: '♓', signIndex: 11, degree: 20, minute: 0, second: 0, element: 'Agua', modality: 'Mutable', index: 8 },
    { name: 'Plutón', symbol: '♇', longitude: 150, latitude: 0, distance: 1, speed: 0.005, isRetrograde: false, sign: 'Virgo', signSymbol: '♍', signIndex: 5, degree: 0, minute: 0, second: 0, element: 'Tierra', modality: 'Mutable', index: 9 }
  ],
  houses: {
    cusps: [
      { house: 1, degree: 0, sign: 'Aries', signSymbol: '♈', signIndex: 0, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 2, degree: 30, sign: 'Tauro', signSymbol: '♉', signIndex: 1, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 3, degree: 60, sign: 'Géminis', signSymbol: '♊', signIndex: 2, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 4, degree: 90, sign: 'Cáncer', signSymbol: '♋', signIndex: 3, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 5, degree: 120, sign: 'Leo', signSymbol: '♌', signIndex: 4, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 6, degree: 150, sign: 'Virgo', signSymbol: '♍', signIndex: 5, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 7, degree: 180, sign: 'Libra', signSymbol: '♎', signIndex: 6, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 8, degree: 210, sign: 'Escorpio', signSymbol: '♏', signIndex: 7, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 9, degree: 240, sign: 'Sagitario', signSymbol: '♐', signIndex: 8, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 10, degree: 270, sign: 'Capricornio', signSymbol: '♑', signIndex: 9, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 11, degree: 300, sign: 'Acuario', signSymbol: '♒', signIndex: 10, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 },
      { house: 12, degree: 330, sign: 'Piscis', signSymbol: '♓', signIndex: 11, degreeInSign: 0, minuteInSign: 0, secondInSign: 0 }
    ],
    ascendant: 0,
    mc: 270
  },
  aspects: [
    { planet1: 0, planet2: 1, planet1Name: 'Sol', planet2Name: 'Luna', type: 'Trígono', symbol: '△', angle: 75, exactAngle: 120, orb: 45, nature: 'armonía' }
  ],
  northNode: { name: 'Nodo Norte', symbol: '☊', longitude: 180, sign: 'Libra', signSymbol: '♎', degree: 0, minute: 0, second: 0 },
  ascendant: 0,
  mc: 270,
  julianDay: 2459000
};

describe('analyzeHealthTendencies', () => {
  it('returns all expected dimensions', () => {
    const result = analyzeHealthTendencies(mockChart);
    expect(result).toHaveProperty('signAnalysis');
    expect(result).toHaveProperty('houseAnalysis');
    expect(result).toHaveProperty('planetAnalysis');
    expect(result).toHaveProperty('aspectAnalysis');
    expect(result).toHaveProperty('bodyRiskZones');
    expect(result).toHaveProperty('detailedDiseases');
    expect(result).toHaveProperty('overallVitality');
    expect(result).toHaveProperty('elementBalance');
    expect(result).toHaveProperty('modalityBalance');
    expect(result).toHaveProperty('healthHousesAnalysis');
    expect(result).toHaveProperty('acuteChronic');
    expect(result).toHaveProperty('recommendations');
  });

  it('signAnalysis is array with entries for each sign', () => {
    const result = analyzeHealthTendencies(mockChart);
    expect(Array.isArray(result.signAnalysis)).toBe(true);
    expect(result.signAnalysis.length).toBeGreaterThan(0);
  });

  it('bodyRiskZones has all zone keys', () => {
    const result = analyzeHealthTendencies(mockChart);
    expect(result.bodyRiskZones).toHaveProperty('cabeza');
    expect(result.bodyRiskZones).toHaveProperty('cuello');
    expect(result.bodyRiskZones).toHaveProperty('pecho');
    expect(result.bodyRiskZones).toHaveProperty('estomago');
  });
});

describe('setAnalysisLanguage', () => {
  it('switches to Spanish', () => {
    setAnalysisLanguage('es');
    const translated = translatePlanet('Sol');
    expect(translated).toBe('Sol');
  });

  it('switches to English', () => {
    setAnalysisLanguage('en');
    const translated = translatePlanet('Sol');
    expect(translated).toBe('Sun');
  });
});

describe('translatePlanet', () => {
  beforeEach(() => { setAnalysisLanguage('es'); });

  it('translates Sol in Spanish', () => {
    expect(translatePlanet('Sol')).toBe('Sol');
  });

  it('translates Luna in Spanish', () => {
    expect(translatePlanet('Luna')).toBe('Luna');
  });
});

describe('translateSign', () => {
  beforeEach(() => { setAnalysisLanguage('es'); });

  it('translates Aries in Spanish', () => {
    expect(translateSign('Aries')).toBe('Aries');
  });

  it('translates Leo in Spanish', () => {
    expect(translateSign('Leo')).toBe('Leo');
  });
});

describe('getTranslatedPracticalAdvice', () => {
  beforeEach(() => { setAnalysisLanguage('en'); });

  it('returns advice for Sol', () => {
    const advice = getTranslatedPracticalAdvice('Sol');
    expect(advice).not.toBeNull();
    expect(advice).toHaveProperty('diet');
    expect(advice).toHaveProperty('exercise');
    expect(advice).toHaveProperty('emotions');
    expect(advice).toHaveProperty('behavior');
  });

  it('returns advice for Luna', () => {
    const advice = getTranslatedPracticalAdvice('Luna');
    expect(advice).not.toBeNull();
    expect(advice.diet).toBeTruthy();
  });
});
