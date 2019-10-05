import { getGreeting } from '../support/app.po';

describe('my-smart-home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to my-smart-home!');
  });
});
