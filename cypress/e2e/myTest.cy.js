describe('empty spec', () => {
  it('should visit a website and check a title', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })
})
