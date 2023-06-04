describe("Login screen - Happy flows", () => {
    it('When I fill in the correct credentials, I am redirected to the authenticated page I was trying to reach', async () => {
        cy.visit('http://localhost:3000/login?target=dashboard');

        cy.get('h1').contains('Welcome! Please log in to continue');

        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('#loginFormSubmit').should('exist');

        cy.get('#username').type('uncinc');
        cy.get('#password').type('letmein');
        cy.get('#loginFormSubmit').click();
        cy.url().should('eq', 'http://localhost:3000/dashboard')
    });

    it('When I fill in the correct credentials without a target passed, I am redirected to the dashboard page', async () => {
        cy.visit('http://localhost:3000/login');

        cy.get('h1').contains('Welcome! Please log in to continue');

        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('#loginFormSubmit').should('exist');

        cy.get('#username').type('uncinc');
        cy.get('#password').type('letmein');
        cy.get('#loginFormSubmit').click();
        cy.url().should('eq', 'http://localhost:3000/dashboard')
    });
});

describe("Login screen - Unhappy flows", () => {
    it('When I fill in an incorrect password, the login form gives me feedback', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('h1').contains('Welcome! Please log in to continue');

        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('#loginFormSubmit').should('exist');

        cy.get('#username').type('uncinc');
        cy.get('#password').type('wrongpassword');
        cy.get('#loginFormSubmit').click();
        cy.get('#loginErrorMessage').contains('This does not ring a bell with us.');
        cy.get('#loginErrorMessage').contains('please make sure you filled in the right login information.');
        cy.url().should('eq', 'http://localhost:3000/login')
    });

    it('When I fill in an incorrect username, the login form gives me feedback', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('h1').contains('Welcome! Please log in to continue');

        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('#loginFormSubmit').should('exist');

        cy.get('#username').type('wrongusername');
        cy.get('#password').type('letmein');
        cy.get('#loginFormSubmit').click();
        cy.get('#loginErrorMessage').contains('This does not ring a bell with us.');
        cy.get('#loginErrorMessage').contains('please make sure you filled in the right login information.');
        cy.url().should('eq', 'http://localhost:3000/login')
    });
});