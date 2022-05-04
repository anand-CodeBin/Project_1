/// <reference types="Cypress" />

  
  it('successfully loads', () => {

    cy.clearLocalStorage()
    cy.visit('http://localhost:3000') // change URL to match your dev URL
  
    cy.contains('Log In').click()

    cy.url().should('include','/login')

    cy.get('#username').type('123')
    cy.get('#password').type('123')
    cy.get('button').click()


    cy.url().should('include','/posts')
    cy.contains('Show More').click()
    cy.contains('Show less').click()

    cy.contains('Upload').click()

    

    cy.get('[placeholder="Author"]').type('xyz')
    cy.get('[placeholder="Description"]').type('From the cypress')
    cy.get('[placeholder="Image URL"]').type('https://images.dog.ceo/breeds/spaniel-cocker/n02102318_3658.jpg')
    cy.get('button').contains('Upload').click()
    cy.get('a').contains('Posts').click()
})