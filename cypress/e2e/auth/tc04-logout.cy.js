import homePage from '../../support/pages/home.page'
import loginPage from '../../support/pages/login.page'
import { buildUser } from '../../utils/userFactory'

describe('Test Case 4: Logout User', () => {
  const user = buildUser()

  before(() => {
    cy.createAccountViaApi(user)
  })

  after(() => {
    cy.deleteAccountViaApi(user.email, user.password)
  })

  it('deve autenticar e encerrar a sessão com sucesso', () => {
    homePage.visit()
    cy.loginViaUi(user)
    homePage.logout()
    loginPage.assertLoginFormVisible()
  })
})
