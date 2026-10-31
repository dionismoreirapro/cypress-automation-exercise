class ProductDetailsPage {
  assertDetailsVisible() {
    cy.url().should('include', '/product_details/')
    cy.get('.product-information h2').should('be.visible')
    cy.get('.product-information').should('contain.text', 'Category:')
    cy.get('.product-information span span').should('contain.text', 'Rs.')
    cy.get('.product-information').should('contain.text', 'Availability:')
    cy.get('.product-information').should('contain.text', 'Condition:')
    cy.get('.product-information').should('contain.text', 'Brand:')
  }
}

export default new ProductDetailsPage()
