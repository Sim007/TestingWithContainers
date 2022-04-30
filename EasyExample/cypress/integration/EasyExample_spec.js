// Test Easy Example

describe('Visit page', () => {
    it('Visit a website', () => {
      cy.visit('/blog/cloud/software-delivery-with-ci-cd-and-containers-continuous-is-the-new-norm')
    })  
    it('finds text', () => {  
      cy.contains('Johannes Sim')
    })
  })