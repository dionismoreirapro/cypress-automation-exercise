class PaymentPage {
  fillCard(payment) {
    cy.get('[data-qa="name-on-card"]').type(payment.nameOnCard)
    cy.get('[data-qa="card-number"]').type(payment.cardNumber)
    cy.get('[data-qa="cvc"]').type(payment.cvc)
    cy.get('[data-qa="expiry-month"]').type(payment.expiryMonth)
    cy.get('[data-qa="expiry-year"]').type(payment.expiryYear)
  }

  confirmOrder() {
    cy.get('[data-qa="pay-button"]').click()
  }

  assertOrderPlaced() {
    cy.get('[data-qa="order-placed"]', { timeout: 20000 })
      .should('be.visible')
      .and('contain.text', 'Order Placed!')
    cy.contains(/your order has been (placed successfully|confirmed)/i).should('exist')
  }
}

export default new PaymentPage()
