class CheckoutPage {
  assertAddressAndOrder(user) {
    cy.get('#address_delivery').should('be.visible')
    cy.get('#address_invoice').should('be.visible')
    cy.get('#address_delivery').should('contain.text', user.firstName).and('contain.text', user.lastName)
    cy.get('#address_delivery').should('contain.text', user.address1)
    cy.get('#address_delivery').should('contain.text', user.city)
    cy.get('#cart_info').should('be.visible')
    cy.get('#cart_info tbody tr').should('have.length.greaterThan', 0)
  }

  placeOrder(comment) {
    cy.get('textarea[name="message"]').type(comment)
    cy.get('a[href="/payment"]').click()
  }
}

export default new CheckoutPage()
