class AccountPage {
  assertCreated() {
    cy.get('[data-qa="account-created"]').should('be.visible').and('contain.text', 'Account Created!')
    cy.url().should('include', '/account_created')
  }

  assertDeleted() {
    cy.get('[data-qa="account-deleted"]').should('be.visible').and('contain.text', 'Account Deleted!')
    cy.url().should('include', '/delete_account')
  }

  continue() {
    cy.get('[data-qa="continue-button"]').click()
  }
}

export default new AccountPage()
