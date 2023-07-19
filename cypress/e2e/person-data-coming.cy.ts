describe('Person data coming', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('button').click();
  });
  it('has all visible attributes for both players', () => {
    const attributesInParagrpahs = [
      'height',
      'birth year',
      'eye color',
      'hair color',
      'gender',
      'skin color',
      'created',
      'edited',
      'url',
      'homeworld',
    ];
    cy.verifyParagraphsContainWords('app-person-card', attributesInParagrpahs);
  });

  it('has text: "Drawn numbers:"', () => {
    cy.contains('Drawn numbers:');
  });

  it("has title 'The winner is Player 1', if player 1 card has bigger mass'", () => {
    cy.getElementsAndCompareText().then(
      ({ player1Attribute: player1Mass, player2Attribute: player2Mass }) => {
        if (player1Mass > player2Mass) {
          cy.get('.winner-container')
            .find('h2')
            .contains('The winner is: Player 1');
        }
      }
    );
  });

  it("has title 'The winner is Player 2', if player 2 card has bigger mass'", () => {
    cy.getElementsAndCompareText().then(
      ({ player1Attribute: player1Mass, player2Attribute: player2Mass }) => {
        if (player1Mass < player2Mass) {
          cy.get('.winner-container')
            .find('h2')
            .contains('The winner is: Player 2');
        }
      }
    );
  });

  it("has title 'Draw', if none of players have bigger mass'", () => {
    cy.getElementsAndCompareText().then(
      ({ player1Attribute: player1Mass, player2Attribute: player2Mass }) => {
        if (player1Mass === 'unknown' || player2Mass === 'unknown') {
          cy.get('.winner-container').find('h2').contains('Draw');
        }
      }
    );
  });
});
