describe('My First Test 20221112', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    }),
    it('visit a page', () => {
      cy.visit('www.google.com')
      cy.contains('Google')
    })
  })
