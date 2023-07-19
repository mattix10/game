describe('Loading phase', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('button').click();
  });

  it('has spinner', () => {
    cy.get('mat-spinner');
  });

  it("has loading text: 'Loading in progress...'", () => {
    cy.contains('Loading in progress...');
  });

  it('has text: "Drawn numbers:"', () => {
    cy.contains('Drawn numbers:');
  });
});
