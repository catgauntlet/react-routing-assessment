describe("Dashboard screen - Happy flows", () => {
    it('When I load the dashboard component when I am not logged in, I expect to be redirected to the login screen', () => {
        cy.visit('http://localhost:3000/dashboard');
        cy.url().should('eq', 'http://localhost:3000/login?target=dashboard')
    });
    
    it('When I load the dashboard component when I am logged in, based on the availability of the token, I expect the dashboard to be shown', () => {
        cy.setCookie('authentication', 'NOT_A_REAL_TOKEN');
        cy.visit('http://localhost:3000/dashboard');
        cy.url().should('eq', 'http://localhost:3000/dashboard')
    });

    it('When I load the dashboard when I am logged in, I expect the logout button to be available and take me to the logged out state of the home page, I expect the token to be gone', () => {
        cy.setCookie('authentication', 'NOT_A_REAL_TOKEN');
        cy.visit('http://localhost:3000/dashboard');
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.get('#logoutButton').click();
        cy.url().should('eq', 'http://localhost:3000/home');
    });
});
