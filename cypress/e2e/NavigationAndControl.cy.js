/// <reference types="cypress" />
describe('Navigation and Control Example', () => {
  it('Should visit page, reload, go back/forward, and test viewport', () => {
    // 1. Visit URL
    cy.visit('https://example.cypress.io');

    // 2. Reload the page
    cy.reload();

    // 3. Go to another page
    cy.visit('https://example.cypress.io/commands/actions');
    cy.wait(1000);
    // 4. Go back in history
    cy.go('back');
    cy.wait(1000);

    // 5. Go forward in history
    cy.go('forward');

    // 6. Set viewport size to mobile and check if a banner is visible
    cy.viewport(320, 480);
    cy.get('.banner').should('be.visible');
  });



   it('Querying and finding elements', () => {
    // 1. Visit URL
    cy.visit('https://example.cypress.io');

   cy.get("a[role='button']")
  .should('exist')       // Check if element exists in the DOM
  .and('be.visible');   // Check if element is visible



  cy.contains('h1', 'Kitchen Sink').should('be.visible');


  });
});
