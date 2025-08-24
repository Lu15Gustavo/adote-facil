const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
  specPattern: 'cypress/tests/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.js',
  },
});
