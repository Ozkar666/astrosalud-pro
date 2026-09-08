# AstroSalud Pro

Aplicación web profesional de análisis de salud astrológico con cartas natales (Swiss Ephemeris), análisis de tránsitos, biodecodificación y soporte multilingüe (12 idiomas).

**URL**: https://astrosalud-pro.pages.dev

---

## Características

- **Carta natal precisa** con Swiss Ephemeris (motor Wasm)
- **Análisis de salud** por signos, casas, planetas, dignidades y aspectos
- **Tránsitos** con interpretación de impacto en salud
- **Biodecodificación** (glosario de 151 condiciones de Louise Hay, Jacques Martel, Lisa Bourbeau, Dr. Hamer)
- **12 idiomas**: ES, EN, PT-BR, FR, DE, IT, RU, UK, SV, JA, ZH-CN, KO
- **Geocodificación** con Nominatim (autocomplete + coordenadas manuales)
- **Descarga PDF/PNG** del informe completo
- **Blog** con 7 artículos de salud astrológica
- **SEO** optimizado (Schema.org, sitemap, meta tags)
- **Seguridad** (XSS sanitization, CSP headers, X-Frame-Options)
- **Accesibilidad** (ARIA, focus-visible, skip-nav)
- **Responsive** (mobile-first)

---

## Arquitectura

```
src/
  astro/
    engine.js              # Motor Swiss Ephemeris (cálculos astronómicos)
    chart-renderer.js      # Renderizado SVG de la carta natal
  health/
    analysis.js            # Motor de análisis de salud (13 dimensiones)
    health-data.js         # Datos médicos por planeta/signo
  i18n/
    translations.js        # UI strings (12 idiomas, ~280 keys c/u)
    biodescodificacion.js  # Glosario de biodecodificación (151 condiciones)
    health/                # Datos de salud por idioma (11 archivos separados)
      health-en.js
      health-pt.js
      health-fr.js
      ...
  utils/
    geocoder.js            # Geocodificación Nominatim + estimación de timezone
    city-database.js       # Base de datos estática de ciudades
    sentry.js              # Monitoreo de errores (Sentry)
  main.js                  # Orquestador de UI
  style.css                # Estilos (CSS custom properties, responsive)
```

---

## Desarrollo

### Requisitos

- Node.js >= 18
- npm

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
# Abre http://localhost:5173
```

### Tests

```bash
npm test              # Watch mode
npm run test:run      # Ejecutar una vez
npm run test:coverage # Con cobertura
```

**106 tests** cubriendo:
- `src/astro/engine.test.js` — Helpers del motor astronómico
- `src/health/analysis.test.js` — Análisis de salud
- `src/utils/geocoder.test.js` — Timezone y geocodificación
- `src/utils/city-database.test.js` — Base de datos de ciudades
- `src/i18n/translations.test.js` — Cobertura de traducciones
- `src/i18n/biodescodificacion.test.js` — Glosario de biodecodificación

### Build

```bash
npm run build
npm run preview  # Vista previa del build
```

### Deploy

```bash
npx wrangler pages deploy dist --project-name=astrosalud-pro
```

---

## CI/CD

GitHub Actions ejecuta automáticamente:

1. **Test** — `npm run test:run` + `npm run build`
2. **Deploy** — Cloudflare Pages (solo en push a `main`)

### Configurar secrets

En GitHub repo → Settings → Secrets → Actions:

| Secret | Descripción |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | Token de API de Cloudflare |
| `CLOUDFLARE_ACCOUNT_ID` | ID de cuenta de Cloudflare |

---

## Seguridad

- **XSS**: `sanitizeHTML()` en todo contenido dinámico (`innerHTML`)
- **CSP**: Content-Security-Policy en `_headers`
- **Headers**: X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy
- **Sentry**: Monitoreo de errores en producción (configurar DSN en `index.html`)

---

## Internacionalización

| Idioma | Código | Estado |
|--------|--------|--------|
| Español | `es` | ✅ Completo |
| Inglés | `en` | ✅ Completo |
| Portugués (BR) | `pt-BR` | ✅ Completo |
| Francés | `fr` | ✅ Completo |
| Alemán | `de` | ✅ Completo |
| Italiano | `it` | ✅ Completo |
| Ruso | `ru` | ✅ Completo |
| Ucraniano | `uk` | ✅ Completo |
| Sueco | `sv` | ✅ Completo |
| Japonés | `ja` | ✅ Completo |
| Chino (simplificado) | `zh-CN` | ✅ Completo |
| Coreano | `ko` | ✅ Completo |

Detección automática del idioma del navegador. Los datos de biodecodificación están en el idioma original de los autores.

---

## Motor de Análisis de Salud

El análisis evalúa **13 dimensiones**:

1. **Análisis por signos** — Salud general por elemento y modalidad
2. **Análisis por casas** — Posicionamiento planetario en casas astrológicas
3. **Dignidades** — Domicilio, exaltación, detrimento, caída
4. **Aspectos** — Confluencias planetarias y su impacto
5. **Vitalidad general** — Índice 0-100 basado en Sol, LUA y aspects
6. **Balance de elementos** — Fuego, tierra, aire, agua
7. **Balance de modalidades** — Cardinal, fijo, mutable
8. **Casas de salud** — Casas I, VI, VIII, XII
9. **Zonas de riesgo corporal** — Órganos y sistemas vulnerables
10. **Lista de condiciones** — Enfermedades potenciales con probabilidad
11. **Clasificación agudo/crónico** — Naturaleza de las condiciones
12. **Biodecodificación** — Causas emocionales (glosario de 151 condiciones)
13. **Recomendaciones** — Consejos personalizados de salud

---

## API del Motor

### `NatalChart`

```javascript
import { NatalChart } from './astro/engine.js';

const chart = new NatalChart();
await chart.init();

const natal = chart.calculate(
  1990, 3, 15,    // year, month, day
  14, 30,          // hour, minute
  21.1167, -101.6833, // lat, lon
  -6,              // tzOffset
  'P'              // house system (Placidus)
);

// natal.planets — posiciones de planetas
// natal.houses — cúspides de casas
// natal.aspects — aspectos
// natal.ascendant — ascendente
// natal.midheaven — medio cielo
```

### `analyzeHealthTendencies`

```javascript
import { analyzeHealthTendencies } from './health/analysis.js';

const analysis = analyzeHealthTendencies(natalChart);
// analysis.generalHealth — salud general por signos
// analysis.bodyRiskZones — zonas de riesgo
// analysis.diseaseList — condiciones potenciales
// analysis.vitality — índice de vitalidad (0-100)
// ... 13 dimensiones totales
```

---

## Licencia

Uso interno — AstroSalud Pro.
