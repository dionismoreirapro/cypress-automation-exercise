/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    createAccountViaApi(user: Record<string, string>): Chainable<void>
    deleteAccountViaApi(email: string, password: string): Chainable<void>
    registerUserViaUi(user: Record<string, string>): Chainable<void>
    loginViaUi(user: Record<string, string>): Chainable<void>
    completeAccountCleanup(): Chainable<void>
    checkoutUntilOrderPlaced(
      user: Record<string, string>,
      payment: Record<string, string>,
      comment: string
    ): Chainable<void>
  }
}
