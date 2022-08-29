Cypress.Commands.add('login', (username, password) => {
  cy.get('#txt-username').type(username);
  cy.get('#txt-password').type(password);
  cy.get('#btn-login').click();
});

Cypress.Commands.add('assertLogin', (success) =>
  cy
    .get('p')
    .contains(
      'Login failed! Please ensure the username and password are valid.'
    )
    .should(success ? 'not.exist' : 'exist')
);
