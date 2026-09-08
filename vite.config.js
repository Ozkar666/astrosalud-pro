import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('translations.js') || id.includes('biodescodificacion.js')) {
            return 'translations';
          }
          if (id.includes('health/analysis.js') || id.includes('health-data.js') || id.includes('health/health-')) {
            return 'health';
          }
        }
      }
    }
  }
});
