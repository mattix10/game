declare namespace Cypress {
  interface Chainable<Subject> {
    getElementsAndCompareText(): Chainable<{
      player1Attribute: string;
      player2Attribute: string;
    }>;
  }

  interface Chainable<Subject> {
    verifyParagraphsContainWords(
      selector: string,
      attributesInParagrpahs: string[]
    ): Chainable<Subject>;
  }
}
