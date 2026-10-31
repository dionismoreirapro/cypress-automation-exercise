import homePage from '../../support/pages/home.page'
import { buildUser } from '../../utils/userFactory'

describe('Test Case 16: Place Order: Login before Checkout', () => {
  const user = buildUser()

  before(() => {
    cy.createAccountViaApi(user)
  })

  it('deve autenticar, comprar e excluir a conta', () => {
    cy.fixture('users').then((data) => {
      homePage.visit()
      cy.loginViaUi(user)
      cy.checkoutUntilOrderPlaced(user, data.payment, data.orderComment)
      cy.completeAccountCleanup()
    })
  })
})
