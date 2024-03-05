import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import node from '@astrojs/node';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [auth(), react()],
  output: 'server',
  adapter: node({
    mode: 'standlone'
  }),
  build: {
    rollupOPtions: {
      external: ['@auth/core']
    }
  },
  targets: {
    node
  }
});