const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [NodeModulesPolyfillPlugin(), createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);

      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl:"https://stage.dealintent.com",
    chromeWebSecurity: false,
    defaultCommandTimeout: 45000,
    video: true,
    numTestsKeptInMemory: 0
  },
});
