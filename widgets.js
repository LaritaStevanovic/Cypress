context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/widgets')
    })

it('chek widgets', () => {

    cy
      .get('.text').contains('Accordian').click()
      .get('#section1Content').should('be.visible')
      .get('.card-header').contains('Where does it come from?').click()
      .get('#section2Content').should('be.visible')
      .get('.card-header').contains('Why do we use it?').click()
      .get('#section3Content').should('be.visible')

  })

  it('auto complete', () => {
    cy  

    
      .get('.text').contains('Auto Complete').click()
      .get('.auto-complete__value-container.auto-complete__value-container--is-multi.css-1hwfws3').type('blue')
      .get('.auto-complete__value-container.css-1hwfws3').first().click().type('red')

  })

  it('date picker', () => {
    cy
    .get('.text').contains('Date Picker').click()
    .get('#datePickerMonthYearInput').click()
    .get('.react-datepicker__month-select').select('September').should('have.value', '8')
    .get('.react-datepicker__year-select').select('1901').should('have.value', '1901')
    .get('.react-datepicker__day.react-datepicker__day--017').contains('17').click()
    .get('#dateAndTimePickerInput').click()
    .get('.react-datepicker__month-read-view--selected-month').contains('December').click()
    .get('.react-datepicker__month-option').contains('August').click()

    .get('.react-datepicker__year-read-view--selected-year').contains('2020').click()
    .get('.react-datepicker__year-dropdown').contains('2022').click()
    .get('.react-datepicker__time-list-item').contains('14:15').click()
  })

  it('slider', () => {
    cy
      .get('.text').contains('Slider').click()
      
     .get('.range-slider.range-slider--primary').invoke('val', 80).trigger('change')
      
  })

  it('progres bar', () => {
    cy
    .get('.text').contains('Progress Bar').click()
    .get('#startStopButton').click()
    .wait(15000)
    .get('.progress-bar.bg-success').contains('100%')

  })

  it('Tabs', () => {
    cy
    .get('.text').contains('Tabs').click()
     .get('#demo-tab-origin').click()
     .get('.mt-3').should('be.visible')
     .get('#demo-tab-use').click()
     .get('.mt-3').should('be.visible')
     .get('#demo-tab-what').click()
     .get('.mt-3').should('be.visible')
  })

  it('Tool tips', () => {
    cy
     .get('.text').contains('Tool Tips').click()
     .get('#toolTipButton').trigger('mouseover')
     .get('.btn-success').should('be.visible')
     .get('#toolTipTextField').trigger('mouseover')
     .get('.tooltip-inner').should('be.visible')
     .get('#toolTipButton').trigger('mouseover')
     .get('#buttonToolTip').contains('You hovered over the Button').and('be.visible')
     .get('#texToolTopContainer').should('be.visible')
     .get('a').contains('Contrary').trigger('mouseover')
     .get('#contraryTexToolTip').should('have.text','You hovered over the Contrary').and('be.visible')
     .get('a').contains('1.10.32').trigger('mouseover')
     .get('#sectionToolTip').should('have.text','You hovered over the 1.10.32').and('be.visible')
     
  })


  

  it('Select Menu', () => {
    cy
     .get('.text').contains('Select Menu').click()
      .get('.css-1wa3eu0-placeholder').contains('Select Option').click()
      .get('#withOptGroup').contains('A root option').click()
     .get('.css-1hwfws3').contains('Select Title').click()
     .get('#selectOne').contains('Mr.').click()

     .get('#oldSelectMenu').select('Blue').should('have.value', '1')
     .get('.css-1hwfws3').contains('Select').type('red')

     .get('#cars').select('Opel')

     
     
  })

})