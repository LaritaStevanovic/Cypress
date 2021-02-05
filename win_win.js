context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://planetasport.rs')
  })

  it('chek widgets', () => {

  
      cy
      .get('._8eso').should('be.visible')
        
    })
})