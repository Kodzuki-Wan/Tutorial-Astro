// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://starlit-tulumba-09ab4b.netlify.app",
  integrations: [preact()]
});