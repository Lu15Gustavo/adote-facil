describe('template spec', () => {
  it('passes', () => 
    {
    cy.visit('http://localhost:3000/login')
    cy.get('[name="email"]').type('luisgustavo.b.g.216@gmail.com')
    cy.get('[name="password"]').type('12344321')
    cy.get('.Button-styles__Button-sc-88c754c5-0').click()
    cy.get('.DefaultLoggedPageLayout-styles__AsideMenu-sc-de07e6a-5 > .UserMenu-styles__Wrapper-sc-2432538b-0 > [href="/area_logada/disponibilizar_animal"] > .UserMenu-styles__MenuItem-sc-2432538b-1').click()
    cy.get('[name="name"]').type('devovo')
    cy.get('.AnimalRegisterForm-styles__AnimalTypeInputWrapper-sc-4636b59b-8 > .DefaultSelect-styles__SelectTrigger-sc-438f918b-0').click()
    cy.get('[aria-labelledby="radix-:rg:"]').click()
    cy.get('.AnimalRegisterForm-styles__AnimalGenderInputWrapper-sc-4636b59b-9 > .DefaultSelect-styles__SelectTrigger-sc-438f918b-0').click()
    cy.get('[aria-labelledby="radix-:rt:"]').click()
    cy.get('[name="race"]').type('vira-lata')
    cy.get('[name="description"]').type('Gato lindo e abençoado. Branquinho e peludo dos olhos verdes. Um amor de pessoa é como um filho pra mim, estou doando por falta de dinheiro para cuidar dele. Alguem aceita?')
    cy.get('.AnimalRegisterForm-styles__AnimalPicturesInput-sc-4636b59b-16').selectFile("cypress/fixtures/cat1.jpg", { force: true });
    cy.get('.Button-styles__Button-sc-88c754c5-0').click()
    })
})  