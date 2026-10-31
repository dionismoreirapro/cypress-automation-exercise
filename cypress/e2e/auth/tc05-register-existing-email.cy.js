import homePage from '../../support/pages/home.page'
import loginPage from '../../support/pages/login.page'
import { buildUser } from '../../utils/userFactory'

describe('Test Case 5: Register User with existing email', () => {
  const user = buildUser()

  before(() => {
    cy.createAccountViaApi(user)
  })

  after(() => {
    cy.deleteAccountViaApi(user.email, user.password)
  })

  it('deve recusar cadastro com e-mail já registrado', () => {
    homePage.visit()
    homePage.goToLogin()
    loginPage.assertSignupFormVisible()
    loginPage.signup(user.name, user.email)
    loginPage.assertEmailAlreadyExists()
  })
})
