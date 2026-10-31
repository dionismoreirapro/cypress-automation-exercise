import accountApi from './services/account.api'
import homePage from './pages/home.page'
import loginPage from './pages/login.page'
import signupPage from './pages/signup.page'
import accountPage from './pages/account.page'
import cartPage from './pages/cart.page'
import checkoutPage from './pages/checkout.page'
import paymentPage from './pages/payment.page'

Cypress.Commands.add('createAccountViaApi', (user) => {
  accountApi.create(user)
})

Cypress.Commands.add('deleteAccountViaApi', (email, password) => {
  accountApi.delete(email, password)
})

Cypress.Commands.add('registerUserViaUi', (user) => {
  homePage.goToLogin()
  loginPage.assertSignupFormVisible()
  loginPage.signup(user.name, user.email)
  signupPage.assertAccountInformationVisible()
  signupPage.fillAccountInformation(user)
  signupPage.submit()
  accountPage.assertCreated()
  accountPage.continue()
  homePage.assertLoggedInAs(user.name)
})

Cypress.Commands.add('loginViaUi', (user) => {
  homePage.goToLogin()
  loginPage.assertLoginFormVisible()
  loginPage.login(user.email, user.password)
  homePage.assertLoggedInAs(user.name)
})

Cypress.Commands.add('completeAccountCleanup', () => {
  homePage.deleteAccount()
  accountPage.assertDeleted()
  accountPage.continue()
})

Cypress.Commands.add('checkoutUntilOrderPlaced', (user, payment, comment) => {
  homePage.addFirstFeaturedProductToCart()
  homePage.goToCart()
  cartPage.assertIsVisible()
  cartPage.proceedToCheckout()
  checkoutPage.assertAddressAndOrder(user)
  checkoutPage.placeOrder(comment)
  paymentPage.fillCard(payment)
  paymentPage.confirmOrder()
  paymentPage.assertOrderPlaced()
})
