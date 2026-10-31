import homePage from '../../support/pages/home.page'
import productsPage from '../../support/pages/products.page'
import productDetailsPage from '../../support/pages/productDetails.page'

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('deve listar produtos e exibir os detalhes do primeiro item', () => {
    homePage.visit()
    homePage.goToProducts()
    productsPage.assertAllProductsVisible()
    productsPage.openFirstProduct()
    productDetailsPage.assertDetailsVisible()
  })
})
