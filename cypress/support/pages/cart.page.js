class CartPage {
  assertIsVisible() {
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info').should('be.visible')
    cy.get('#cart_info_table tbody tr').should('have.length.greaterThan', 0)
  }

  proceedToCheckout() {
    cy.get('.check_out').click()
  }
}

export default new CartPage()
