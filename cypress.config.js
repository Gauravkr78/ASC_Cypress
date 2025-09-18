const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 120000,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    }
  },
  screenshotsFolder: 'cypress/screenshots',
  screenshotOnRunFailure: true,
  video: true, // ✅ Enable video recording
  videosFolder: 'cypress/videos', // ✅ Set folder for video files
  trashAssetsBeforeRuns: true // ✅ Delete old videos/screenshots before each run
});
