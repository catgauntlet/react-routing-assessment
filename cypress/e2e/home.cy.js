describe('Home - Happy flows', () => {
  it('When I load the homepage component when I am not logged in, I expect to see the welcome text, I also expect the dashboard link to not be there', () => {
    cy.visit('http://localhost:3000/');

    cy.get('h1').contains('Home');
    cy.get('nav').get('#homeLink').contains('Home');
    cy.get('#dashboardLink').should('not.exist');
    cy.get('#loginButton').should('exist');
    cy.get('#logoutButton').should('not.exist');
  });

  it('When I load the homepage component when I am logged in, I expect the dashboard menu link to be clickable and to redirect me', () => {
    cy.setCookie('authentication', 'NOT_A_REAL_TOKEN');
    cy.visit('http://localhost:3000/');

    cy.get('h1').contains('Home');
    cy.get('nav').get('#homeLink').contains('Home');
    cy.get('nav').get('#dashboardLink').contains('Dashboard');
    cy.get('#logoutButton').should('exist');
    cy.get('#loginButton').should('not.exist');
  });

  it('When I load the homepage when I am logged in, I expect the logout button to be available and take me to the logged out state of the home page, I expect the token to be gone', () => {
    cy.visit('http://localhost:3000/');

    cy.get('#loginButton').should('exist');
    cy.get('nav').get('#loginButton').click();

  });
});