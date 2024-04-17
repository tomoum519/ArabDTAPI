const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "specPattern": "cypress/**/*.{feature,features}",
    setupNodeEvents(on, config) {
      console.log(config.env)
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
