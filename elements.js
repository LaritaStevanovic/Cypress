
context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/elements')
  })

  it('elements bar is visible', () => {
    cy.get('.main-header').should('be.visible')
  });


  it('elements under element bar are clickable', () => {
    cy
      .get('#item-0').should('be.visible').click()
      .get('#item-1').should('be.visible').click()
      .get('#item-2').should('be.visible').click()
      .get('#item-3').should('be.visible').click()
      .get('#item-4').should('be.visible').click()
      .get('#item-5').should('be.visible').click()
      .get('#item-6').should('be.visible').click()
      .get('#item-7').should('be.visible').click()
      .get('#item-8').should('be.visible').click()
  });

  it('Entering valid data in all fields', () => {
    cy
      .get('#item-0').should('be.visible').click()
      .get('#userName').type('Ally')
      .get('#userEmail').type('ally@gmail.com')
      .get('#currentAddress').type('Manhattan')
      .get('#permanentAddress').type('Brooklyn')  
      .get('#submit').click()

  })

  it('Check the checkbox', () => {
    cy
      .get('#item-1').should('be.visible').click()
      .get('.rct-icon-uncheck').click()
      .get('#result').should('be.visible')
      .get('.rct-icon-expand-all').click()
      .get('.rct-icon-collapse-all').click()

  })

  it('Click on radio button', () => {
    cy
      .get('#item-2').should('be.visible').click()
      .get('.custom-control-label').first().click({force: true})
      .get('.text-success').should('be.visible')
      .get('#impressiveRadio').first().click({force: true})
      .get('.text-success').should('be.visible')
      
  })
  it('Add and delete web table', () => {
    cy
    .get('#item-3').should('be.visible').click()
    .get('#addNewRecordButton').click()
    .get('#firstName').type('Ally')
    .get('#lastName-wrapper').type('Ally')
    .get('#userEmail-wrapper').type('ally@gmail.com')
    .get('#age').type('22')
    .get('#salary-wrapper').type('1500')
    .get('#department-wrapper').type('Web')
    .get('#submit').click()
    .get('#searchBox').type('Ally')
    .get('.mr-2').click()
    .get('#firstName').type('Ally')
    .get('#submit').click()
    .get('#delete-record-4').click()

  })
it('check double,right and left click', () => {
  cy
    .get('#item-4').should('be.visible').click()
    .get('#doubleClickBtn').dblclick() 
    .get('#doubleClickMessage').should('be.visible')
    .get('#rightClickBtn').rightclick()
    .get('#rightClickMessage').should('be.visible')
    .get('.btn-primary').click({multiple: true})
    .get('#rightClickMessage').should('be.visible')
  })
})