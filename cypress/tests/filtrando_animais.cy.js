describe('template spec', () => {
  it('passes', () => 
    {
    cy.visit('http://localhost:3001/login')
    cy.get('[name="email"]').type('luisgoncalves@aluno.ufop.edu.br')
    cy.get('[name="password"]').type('12344321')
    cy.get('.Button-styles__Button-sc-88c754c5-0').click()
    cy.get('.AvailableAnimalsPage-styles__FilterButtonsWrapper-sc-45405001-2 > .Button-styles__Button-sc-88c754c5-0').click()
    cy.get('.AnimalFilterForm-styles__AnimalTypeInputWrapper-sc-a8020069-6 > .DefaultSelect-styles__SelectTrigger-sc-438f918b-0').click()
    cy.get('[aria-labelledby="radix-:rg:"]').click()
    cy.get('.AnimalFilterForm-styles__AnimalGenderInputWrapper-sc-a8020069-7 > .DefaultSelect-styles__SelectTrigger-sc-438f918b-0').click()
    cy.get('[aria-labelledby="radix-:rt:"]').click()
    cy.get('.AnimalFilterForm-styles__FormButton-sc-a8020069-2 > .Button-styles__Button-sc-88c754c5-0').click()
    cy.get('.kDzBpb').click()
    })
})  