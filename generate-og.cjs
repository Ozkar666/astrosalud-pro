/**
 * Generate OG Image (1200x630) as SVG -> PNG
 * Run: node generate-og.js
 */
const fs = require('fs');
const path = require('path');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="50%" style="stop-color:#1e1b4b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <!-- Decorative circles -->
  <circle cx="1050" cy="100" r="200" fill="#6366f1" opacity="0.08"/>
  <circle cx="150" cy="530" r="150" fill="#8b5cf6" opacity="0.06"/>
  <circle cx="900" cy="500" r="100" fill="#6366f1" opacity="0.05"/>
  
  <!-- Stars -->
  <text x="100" y="120" font-family="serif" font-size="24" fill="#fbbf24" opacity="0.6">✦</text>
  <text x="300" y="80" font-family="serif" font-size="18" fill="#fbbf24" opacity="0.4">✧</text>
  <text x="500" y="100" font-family="serif" font-size="20" fill="#fbbf24" opacity="0.5">✦</text>
  <text x="750" y="70" font-family="serif" font-size="16" fill="#fbbf24" opacity="0.3">✧</text>
  <text x="1100" y="200" font-family="serif" font-size="22" fill="#fbbf24" opacity="0.5">✦</text>
  <text x="1000" y="550" font-family="serif" font-size="18" fill="#fbbf24" opacity="0.4">✧</text>
  <text x="200" y="400" font-family="serif" font-size="14" fill="#fbbf24" opacity="0.3">✦</text>
  
  <!-- Zodiac symbols decorative -->
  <text x="850" y="180" font-family="serif" font-size="60" fill="#6366f1" opacity="0.15">♈</text>
  <text x="950" y="350" font-family="serif" font-size="50" fill="#8b5cf6" opacity="0.12">♌</text>
  <text x="100" y="300" font-family="serif" font-size="45" fill="#6366f1" opacity="0.1">♏</text>
  
  <!-- Accent line -->
  <rect x="100" y="220" width="120" height="4" rx="2" fill="url(#accent)"/>
  
  <!-- Title -->
  <text x="100" y="280" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="bold" fill="#ffffff">AstroSalud Pro</text>
  
  <!-- Subtitle -->
  <text x="100" y="330" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#94a3b8">Análisis Astrológico de Salud</text>
  
  <!-- Description -->
  <text x="100" y="380" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#64748b">Calcula tu carta natal gratis y descubre tus tendencias</text>
  <text x="100" y="410" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#64748b">de salud según la astrología</text>
  
  <!-- Features -->
  <rect x="100" y="450" width="180" height="36" rx="18" fill="#6366f1" opacity="0.15"/>
  <text x="140" y="474" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#818cf8">Swiss Ephemeris</text>
  
  <rect x="300" y="450" width="140" height="36" rx="18" fill="#8b5cf6" opacity="0.15"/>
  <text x="330" y="474" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#a78bfa">Tránsitos</text>
  
  <rect x="460" y="450" width="160" height="36" rx="18" fill="#6366f1" opacity="0.15"/>
  <text x="490" y="474" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#818cf8">3 Idiomas</text>
  
  <!-- URL -->
  <text x="100" y="570" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#475569">astrosalud-pro.pages.dev</text>
  
  <!-- Bottom accent -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#accent)"/>
</svg>`;

const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) fs.mkdirSync(distPath, { recursive: true });

fs.writeFileSync(path.join(distPath, 'og-image.svg'), svg);
console.log('✅ OG image SVG created at dist/og-image.svg');
console.log('   Convert to PNG at https://svgtopng.com or similar');
