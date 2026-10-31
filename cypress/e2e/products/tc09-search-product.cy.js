import homePage from '../../support/pages/home.page'
import productsPage from '../../support/pages/products.page'

describe('Test Case 9: Search Product', () => {
  it('deve filtrar produtos pelo termo pesquisado', () => {
    cy.fixture('users').then((data) => {
      homePage.visit()
      homePage.goToProducts()
      productsPage.assertAllProductsVisible()
      productsPage.search(data.search.term)
      productsPage.assertSearchedProducts(data.search.term)
    })
  })
})
