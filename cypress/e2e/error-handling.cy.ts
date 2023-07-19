describe('error handling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('mat-select').click();
    cy.get('mat-option').contains('Starships').click();
    cy.get('button').click();
  });
  Cypress._.times(5, () => {
    it("should display error message: 'Ooops... something went wrong. Try again.'", () => {
      cy.contains('Ooops... something went wrong. Try again.');
    });
  });
});
