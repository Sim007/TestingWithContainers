describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    }),
    it('visit a page', () => {
      cy.visit('https://craft.centric.eu/blog/cloud/software-delivery-with-ci-cd-and-containers-continuous-is-the-new-norm/')
      cy.contains('Johannes Sim')
    })
  })