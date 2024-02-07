import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  build: {
    format: 'file',
    assets: '_assets',
    inlineStylesheets: 'never',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/sass/helper/all.scss";`,
        },
      },
    },
  },
});
