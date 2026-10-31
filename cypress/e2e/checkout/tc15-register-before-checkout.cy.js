import homePage from '../../support/pages/home.page'
import { buildUser } from '../../utils/userFactory'

describe('Test Case 15: Place Order: Register before Checkout', () => {
  it('deve cadastrar, comprar e excluir a conta', () => {
    const user = buildUser()

    cy.fixture('users').then((data) => {
      homePage.visit()
      cy.registerUserViaUi(user)
      cy.checkoutUntilOrderPlaced(user, data.payment, data.orderComment)
      cy.completeAccountCleanup()
    })
  })
})
