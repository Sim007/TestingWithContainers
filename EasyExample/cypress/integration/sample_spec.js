describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    }),
    it('visit a page', () => {
      cy.visit('https://nl.linkedin.com/in/johannes-sim-cd')
      cy.contains('Johannes Sim')
    })
  })