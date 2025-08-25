describe('template spec', () => {
  it('passes', () => 
    {
    cy.visit('http://localhost:3000/login')
    cy.get('a').click()
    cy.get('[name="name"]').type('doador')   //
    cy.get('[name="email"]').type('emailgenerico1@gmail.com') //troque o email e senha, apos a primeiro execução ele sera salvo no banco e nao vai funcionar corretamente
    cy.get('[name="password"]').type('1122334455')
    cy.get('[name="confirmPassword"]').type('11223344')
    cy.get('.Button-styles__Button-sc-88c754c5-0').click()
    })
})  