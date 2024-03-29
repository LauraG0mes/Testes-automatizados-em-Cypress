const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  'retries': {
    'runMode': 2,
    'openMode': 0
   },
  viewportHeight: 960,
  viewportWidth: 1440,
  },
});
