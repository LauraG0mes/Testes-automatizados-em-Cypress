// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (login,senha) =>{

    cy.visit(Cypress.env('url'))
    // type
    cy.get('#username').should('be.visible').type(login)
    cy.get('#password').should('be.visible').type(senha, {log:false})
    // interception
    cy.intercept('GET', 'https://studion-identity-keycloak.hom.dotgroup.com.br/auth/realms/validacao-conteudos/account').as('waitlogin')
        // click
    cy.get('#login-btn').should('be.visible').click()
    cy.wait('@waitlogin')
    // assertion 
    //cy.get('.dashboard-header-title').should('have.text', 'Olá, Laura Gomes!')
    cy.contains('Olá, Laura Gomes!')

})  
    
    
