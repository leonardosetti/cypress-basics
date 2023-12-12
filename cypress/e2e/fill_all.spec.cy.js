// main_test.spec.js

const testData = require("../fixtures/form_data.json");

describe("Web Form Filling", () => {
  beforeEach(() => {
    // Visit the web form page only once before the test suite
    cy.visit("http://127.0.0.1:5500/entrega_p2/projeto/index.html");
  });

  it(`Fill and submit the form for each data set`, async () => {
    for (const [index, data] of testData.entries()) {
      // cy.log(`Filling form with data ${index + 1}`);

      cy.get("#distroBased").type(data.distroBased);
      cy.get("#origem").type(data.origem);
      cy.get("#desktopEnv").type(data.desktopEnv);
      cy.get("#categoria").type(data.categoria);
      cy.get("#status").type(data.status);
      cy.get("#lastReleaseDate").type(data.lastReleaseDate);
      cy.get("#paginaDownload").type(data.paginaDownload);
      cy.get("#imgSize").type(data.imgSize);
      cy.get("#arqProcessador").type(data.arqProcessador);
      cy.get("#pontosAvaliacao").type(data.pontosAvaliacao);

      await cy
        .get("#btSalvar")
        .click()
        .then(() => {
          cy.wait(1200); // Wait for a brief period before filling the next form
        });
    }
  });
});
