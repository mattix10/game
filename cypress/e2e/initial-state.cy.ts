describe('Initial state', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });
  it("has two player names: 'Player 1' and 'Player 2'", () => {
    cy.contains('Player 1');
    cy.contains('Player 2');
  });

  it("has two score counters: 'Scores: 0'", () => {
    cy.get('.players-container')
      .find('h3')
      .each(($element) => {
        cy.wrap($element).should('have.text', 'Scores: 0');
      });
  });

  it('has initial text', () => {
    cy.contains("Select resource and click 'Play' button to start a game.");
  });

  it("has 'Play' button", () => {
    cy.get('button').contains('Play');
  });

  it("selected resource is 'People'", () => {
    cy.get('.mat-mdc-select-value-text').contains('People');
  });
});
