context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/forms')
    })

it('chek registration form', () => {
    
    cy
    .get('.text').contains('Practice Form').click()
    .get('#firstName').type('Djordje')
    .get('#lastName').type('Cvarkov')
    .get('#userEmail').type('cvaresala@gmail.com')
    .get('.custom-control-label').contains('Female').click()
    .get('#userNumber').type('0601234567')
    .get('#dateOfBirthInput').click()
    .get('.react-datepicker__month-select').select('November').should('have.value', '10')
    .get('.react-datepicker__year-select').select('1970').should('have.value', '1970')
    .get('.react-datepicker__week').contains('28').click()
    .get('#subjectsContainer').type('Kurotresina Anka')
    .get('.custom-control-label').contains('Reading').click()
    .get('#currentAddress').type('U centru sa cimijem')
    .get('#submit').click()
    .get('.modal-title.h4').should('be.visible')
  })
})