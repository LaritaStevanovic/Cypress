require('@4tw/cypress-drag-drop')

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/interaction')
    })

it('Droppable', () => {
    cy
    
     .get('.text').contains('Droppable').click()
     .get('#draggable').drag('#droppable')

  })

  it('Accept', () => {
    cy

      .get('.text').contains('Droppable').click()
      .get('#droppableExample-tab-accept').click()
      .get('#notAcceptable').drag('#droppable', {force: true})

      .get('#acceptable').drag('#droppable', {force: true})

  })
  it('Prevent propagation', () => {
    cy

    .get('.text').contains('Droppable').click()
    .get('#droppableExample-tab-preventPropogation').click()
    .get('#dragBox').drag('#greedyDropBoxInner')
  })

  it('Revert Draggable', () => {
      cy
      .get('.text').contains('Droppable').click()
      .get('#droppableExample-tab-revertable').click()
      .get('#revertable').drag('#droppable', {force: true})
      .get('#notRevertable').drag('#droppable', {force: true})
        
  })

  it('Dragabble', () => {
    cy
    .get('.text').contains('Dragabble').click()
    .drag('#dragBox')

  })
  it('Cursor Style', () => {
    cy
    .get('.text').contains('Dragabble').click()
    .get('#draggableExample-tab-cursorStyle').click()
    .get('#cursorCenter').trigger('center')
    .get('#cursorTopLeft').trigger('topLeft')
    .get('#cursorBottom').trigger('bottom')

  })

  it('Axis Restricted', () => {
    cy
     .get('.text').contains('Dragabble').click()
     .get('#draggableExample-tab-axisRestriction').click()
     .get('#restrictedX').trigger('right')
     .get('#restrictedY').trigger('bottom')
     .get('#draggableExample-tab-containerRestriction').click()
     .get('.draggable.ui-widget-content.ui-draggable.ui-draggable-handle').trigger('bottomRight')
     .get('.ui-widget-header.ui-draggable.ui-draggable-handle').trigger('bottom')
  })

  
  })

