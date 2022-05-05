// Test Easy Example

describe('Test craft.centric.eu', () => { 
    it('Blog of Johannes Sim', () => {  
      cy.visit('/blog/cloud/software-delivery-with-ci-cd-and-containers-continuous-is-the-new-norm')  
      cy.contains('Johannes Sim')
    })
  })