import homePage from '../../support/pages/home.page'
import { buildUser } from '../../utils/userFactory'

describe('Test Case 2: Login User with correct email and password', () => {
  const user = buildUser()

  before(() => {
    cy.createAccountViaApi(user)
  })

  it('deve autenticar com credenciais válidas e excluir a conta', () => {
    homePage.visit()
    cy.loginViaUi(user)
    cy.completeAccountCleanup()
  })
})
