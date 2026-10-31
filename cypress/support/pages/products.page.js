class ProductsPage {
  assertAllProductsVisible() {
    cy.url().should('include', '/products')
    cy.get('.features_items h2.title').should('be.visible').and('contain.text', 'All Products')
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0)
  }

  openFirstProduct() {
    cy.get('.features_items .product-image-wrapper').first().contains('View Product').click()
  }

  search(term) {
    cy.get('#search_product').clear().type(term)
    cy.get('#submit_search').click()
  }

  assertSearchedProducts(term) {
    cy.get('.features_items h2.title').should('be.visible').and('contain.text', 'Searched Products')
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0)
    cy.get('.features_items .productinfo p').then(($names) => {
      const names = $names.toArray().map((el) => el.innerText.toLowerCase())
      expect(
        names.some((name) => name.includes(term.toLowerCase())),
        `Nenhum produto contém "${term}". Encontrados: ${names.join(', ')}`
      ).to.eq(true)
    })
  }
}

export default new ProductsPage()
