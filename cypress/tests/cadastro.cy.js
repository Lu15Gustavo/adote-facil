describe('template spec', () => {
  it('passes', () => 
    {
    cy.visit('http://localhost:3001/login')
    cy.get('a').click()
    cy.get('[name="name"]').type('doador')
    cy.get('[name="email"]').type('emailgenerico@gmail.com')
    cy.get('[name="password"]').type('11223344')
    cy.get('[name="confirmPassword"]').type('11223344')
    cy.get('.Button-styles__Button-sc-88c754c5-0').click()
    })
})  