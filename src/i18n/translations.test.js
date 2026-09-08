import { describe, it, expect } from 'vitest';
import { STRINGS, LANGUAGES } from './translations.js';

const REQUIRED_KEYS = [
  'title', 'subtitle', 'birthData', 'date', 'time', 'place',
  'generateChart', 'disclaimer'
];

const REQUIRED_BIODECOD_KEYS = [
  'titulo', 'intro', 'conflicto', 'fuentes', 'consejos'
];

describe('LANGUAGES', () => {
  it('has all 12 language entries', () => {
    const keys = Object.keys(LANGUAGES);
    expect(keys.length).toBe(12);
    expect(keys).toContain('es');
    expect(keys).toContain('en');
    expect(keys).toContain('pt-BR');
    expect(keys).toContain('fr');
    expect(keys).toContain('de');
    expect(keys).toContain('it');
    expect(keys).toContain('ru');
    expect(keys).toContain('uk');
    expect(keys).toContain('sv');
    expect(keys).toContain('ja');
    expect(keys).toContain('zh-CN');
    expect(keys).toContain('ko');
  });
});

describe('STRINGS - all languages', () => {
  const langs = Object.keys(LANGUAGES);

  langs.forEach(lang => {
    describe(`${lang}`, () => {
      it('has STRINGS entry', () => {
        expect(STRINGS[lang]).toBeDefined();
      });

      it('has required keys', () => {
        REQUIRED_KEYS.forEach(key => {
          expect(STRINGS[lang]).toHaveProperty(key);
        });
      });

      it('has biodecodificacion section', () => {
        expect(STRINGS[lang]).toHaveProperty('biodecodificacion');
        REQUIRED_BIODECOD_KEYS.forEach(key => {
          expect(STRINGS[lang].biodecodificacion).toHaveProperty(key);
        });
      });
    });
  });
});

describe('STRINGS parity - Spanish has all keys English has', () => {
  it('Spanish has all English top-level keys', () => {
    const enKeys = Object.keys(STRINGS['en']);
    const esKeys = Object.keys(STRINGS['es']);
    enKeys.forEach(key => {
      expect(esKeys).toContain(key);
    });
  });

  it('Spanish biodecodificacion has all English biodecodificacion keys', () => {
    const enKeys = Object.keys(STRINGS['en'].biodecodificacion);
    const esKeys = Object.keys(STRINGS['es'].biodecodificacion);
    enKeys.forEach(key => {
      expect(esKeys).toContain(key);
    });
  });
});
