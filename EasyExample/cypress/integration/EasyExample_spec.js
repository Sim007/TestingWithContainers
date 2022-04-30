// Test Easy Example

describe('Visit page', () => {
    it('Visit craft website page', () => {
      cy.visit('blog/cloud/software-delivery-with-ci-cd-and-containers-continuous-is-the-new-norm')
      cy.contains('craft@centric.eu')
    })  
    it('finds text', () => {  
      cy.contains('Johannes Sim')
    })
  })