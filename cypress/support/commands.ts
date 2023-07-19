/// <reference types="cypress" />

Cypress.Commands.add('getElementsAndCompareText', () => {
  cy.get('mat-card-subtitle').as('elements');

  cy.get('@elements').should('have.length', 2);

  cy.get('@elements').invoke('text').as('textContents');

  cy.get('@elements').then((els) => {
    const [player1Text, player2Text] = Cypress.$.makeArray(els)
      .map((el) => el.innerText)
      .map((txt) => txt.split(' ')[1]);

    return cy.wrap({
      player1Text: parseInt(player1Text),
      player2Text: parseInt(player2Text),
    });
  });
});

Cypress.Commands.add(
  'verifyParagraphsContainWords',
  (selector, attributesInParagrpahs) => {
    cy.get(selector).as('parent');
    cy.get('@parent')
      .find('.card')
      .each(($child) => {
        cy.wrap($child)
          .find('p')
          .each(($paragraph) => {
            const paragraphText = $paragraph.text();

            const wordFound = attributesInParagrpahs.some((word) =>
              paragraphText.includes(word)
            );

            expect(wordFound).to.be.true;
          });
      });
  }
);
