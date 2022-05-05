// Test Easy Example

describe('Test craft.centric.eu', () => { 
    it('Blog of Johannes Sim', () => {  
      cy.visit('http://craft.centric.eu/blog/cloud/software-delivery-with-ci-cd-and-containers-continuous-is-the-new-norm')
      cy.contains('Johannes Sim')
    })
  })