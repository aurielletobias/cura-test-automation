import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://katalon-demo-cura.herokuapp.com/',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
  },
});
