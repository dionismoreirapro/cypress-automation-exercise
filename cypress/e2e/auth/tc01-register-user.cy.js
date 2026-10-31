import homePage from '../../support/pages/home.page'
import { buildUser } from '../../utils/userFactory'

describe('Test Case 1: Register User', () => {
  it('deve cadastrar um usuário e excluir a conta', () => {
    const user = buildUser()

    homePage.visit()
    cy.registerUserViaUi(user)
    cy.completeAccountCleanup()
  })
})
