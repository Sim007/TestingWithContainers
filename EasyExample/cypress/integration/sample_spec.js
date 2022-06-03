describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    }),
    it('visit a page', () => {
      cy.visit('www.google.com')
      cy.contains('Google')
    })
  })