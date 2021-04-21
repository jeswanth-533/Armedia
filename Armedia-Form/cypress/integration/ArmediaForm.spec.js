// ArmediaForm..js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Armedia Local Host is running', () => {
    it('localhost', () => {
      cy.visit('http://localhost:4200/');
      cy.get('h1#title').contains('Armedia Forms Assessment');
    })
    it('check controls on page', () => {
        cy.get('input').type("test@gmail.com");
      })
  })