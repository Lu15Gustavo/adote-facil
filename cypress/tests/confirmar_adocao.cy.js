describe('template spec', () => {
  it('passes', () => 
    {
    cy.visit('http://localhost:3000/login')
    cy.get('[name="email"]').type('luisgustavo.b.g.216@gmail.com')
    cy.get('[name="password"]').type('12344321')
    cy.get('.Button-styles__Button-sc-88c754c5-0').click()
    cy.get('.DefaultLoggedPageLayout-styles__AsideMenu-sc-de07e6a-5 > .UserMenu-styles__Wrapper-sc-2432538b-0 > [href="/area_logada/meus_animais"] > .UserMenu-styles__MenuItem-sc-2432538b-1 > span').click()
    cy.get(':nth-child(1) > .AnimalCard-styles__Content-sc-5fdf65d3-2 > .AnimalCard-styles__MyAnimalsButtonsWrapper-sc-5fdf65d3-4 > .Button-styles__Button-sc-88c754c5-0').click()
    })
})  