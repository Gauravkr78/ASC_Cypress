// cypress/e2e/my_first_test.cy.js
describe('Basic Website Navigation and Assertion', () => {
 it('should successfully load the homepage and verify its title', () => {
 // Arrange: Visit the application's base URL
 cy.visit('https://example.cypress.io');
 // Act: No specific action needed beyond visiting for this test, but you could add interactions  here.
 // Assert: Verify the page title
 cy.title().should('eq', 'Cypress.io: Kitchen Sink');
 });
it('should navigate to the Actions page and check a heading', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('Commands').click();  // open dropdown
        cy.contains('Actions').click();   // click actual link inside dropdown
        cy.url().should('include', '/commands/actions'); // verify URL
        cy.get('h1').should('contain', 'Actions');       // verify heading
    });
});
