import homePage from '../../support/pages/home.page'
import { buildUser } from '../../utils/userFactory'

describe('Test Case 10: Verify Subscription in home page', () => {
  it('deve inscrever um e-mail no rodapé da home', () => {
    const user = buildUser()

    homePage.visit()
    homePage.subscribe(user.email)
    homePage.subscriptionSuccess
      .should('be.visible')
      .and('contain.text', 'You have been successfully subscribed!')
  })
})
