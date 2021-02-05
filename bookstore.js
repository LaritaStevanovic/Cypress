context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/books')
    })

    it.only('Login', () => {
      cy
       .get('.text').contains('Login').click()
       .get('#newUser').click()
       .get('#firstname').type('Djoka')
       .get('#lastname').type('Cvare')
       .get('#userName').type('Cvare Sala')
       .get('#password').type('mamicka')
       .get('#g-recaptcha').check()
      
    })
})