import { Page } from '../enums/Page.enum';
import { Credentials } from '../types/Credentials.type';

describe('Sign In', () => {
  beforeEach(() => cy.goToPage(Page.LOGIN));

  it('should successfully sign in', () => {
    cy.fixture<Credentials>('credentials.json').then(({ username, password }) =>
      cy.login(username.correct, password.correct)
    );

    cy.assertLogin(true);
  });

  it('should fail sign (incorrect username and correct password)', () => {
    cy.fixture<Credentials>('credentials.json').then(({ username, password }) =>
      cy.login(username.incorrect, password.correct)
    );

    cy.assertLogin(false);
  });

  it('should fail sign in (correct username and incorrect password)', () => {
    cy.fixture<Credentials>('credentials.json').then(({ username, password }) =>
      cy.login(username.correct, password.incorrect)
    );

    cy.assertLogin(false);
  });

  it('should fail sign in (incorrect username and incorrect password)', () => {
    cy.fixture<Credentials>('credentials.json').then(({ username, password }) =>
      cy.login(username.incorrect, password.incorrect)
    );

    cy.assertLogin(false);
  });
});
