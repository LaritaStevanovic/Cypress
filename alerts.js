context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/alertsWindows')
    })

it('Alerts, Frame & Windows', () => {
    cy
    .scrollTo('bottom')
    .get('.text').contains('Modal Dialogs').click()
    .get('#showSmallModal').contains('Small modal').click()
    .get('.modal-body').should('be.visible')
    .get('#closeSmallModal').click()
    .get('#showLargeModal').contains('Large modal').click()
    .get('.modal-body').should('be.visible')
    .get('#closeLargeModal').click()
  })




})