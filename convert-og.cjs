/**
 * Convert SVG to PNG using browser canvas
 * Open convert-og.html in browser, it auto-downloads the PNG
 */
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'dist', 'og-image.svg');
const svg = fs.readFileSync(svgPath, 'utf8');

const html = `<!DOCTYPE html>
<html>
<head><title>OG Image Converter</title></head>
<body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh;">
<div id="container"></div>
<script>
const svg = ${JSON.stringify(svg)};
const container = document.getElementById('container');
container.innerHTML = svg;
const svgEl = container.querySelector('svg');
svgEl.setAttribute('width', '1200');
svgEl.setAttribute('height', '630');

setTimeout(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    const data = new XMLSerializer().serializeToString(svgEl);
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const link = document.createElement('a');
        link.download = 'og-image.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        document.body.innerHTML = '<h1 style="color:white">PNG downloaded!</h1>';
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(data)));
}, 500);
</script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'convert-og.html'), html);
console.log('✅ Open convert-og.html in your browser to download the PNG');
