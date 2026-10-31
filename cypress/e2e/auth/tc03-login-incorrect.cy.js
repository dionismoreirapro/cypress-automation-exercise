import homePage from '../../support/pages/home.page'
import loginPage from '../../support/pages/login.page'

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('deve exibir erro ao autenticar com credenciais inválidas', () => {
    cy.fixture('users').then((data) => {
      homePage.visit()
      homePage.goToLogin()
      loginPage.assertLoginFormVisible()
      loginPage.login(data.invalidUser.email, data.invalidUser.password)
      loginPage.assertIncorrectCredentials()
    })
  })
})
