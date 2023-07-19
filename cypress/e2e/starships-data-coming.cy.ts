describe('Starships data coming', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('mat-select').click();
    cy.get('mat-option').contains('Starships').click();
    cy.get('button').click();
  });
  Cypress._.times(10, () => {
    it('has all visible attributes for both players', () => {
      const attributesInParagrpahs = [
        'manufacturer',
        'cost in credits',
        'length',
        'starship class',
        'passengers',
        'max atmosphering speed',
        'hyperdrive rating',
        'MGLT',
        'cargo capacity',
        'consumables',
        'pilots',
      ];

      cy.verifyParagraphsContainWords(
        'app-starship-card',
        attributesInParagrpahs
      );
    });
  });

  it('has text: "Drawn numbers:"', () => {
    cy.contains('Drawn numbers:');
  });

  Cypress._.times(3, () => {
    it("has title 'The winner is Player 1', if player 1 card has bigger crew'", () => {
      cy.getElementsAndCompareText().then(
        ({ player1Attribute: player1Crew, player2Attribute: player2Crew }) => {
          if (player1Crew > player2Crew) {
            cy.get('.winner-container')
              .find('h2')
              .contains('The winner is: Player 1');
          }
        }
      );
    });
  });

  Cypress._.times(3, () => {
    it("has title 'The winner is Player 2', if player 2 card has bigger crew'", () => {
      cy.getElementsAndCompareText().then(
        ({ player1Attribute: player1Crew, player2Attribute: player2Crew }) => {
          if (player1Crew < player2Crew) {
            cy.get('.winner-container')
              .find('h2')
              .contains('The winner is: Player 2');
          }
        }
      );
    });
  });

  Cypress._.times(3, () => {
    it("has title 'Draw', if none of players have bigger crew'", () => {
      cy.getElementsAndCompareText().then(
        ({ player1Attribute: player1Crew, player2Attribute: player2Crew }) => {
          if (player1Crew === 'unknown' || player2Crew === 'unknown') {
            cy.get('.winner-container').find('h2').contains('Draw');
          }
        }
      );
    });
  });
});
