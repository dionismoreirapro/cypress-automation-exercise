class LoginPage {
  assertSignupFormVisible() {
    cy.get('.signup-form h2').should('be.visible').and('contain.text', 'New User Signup!')
  }

  assertLoginFormVisible() {
    cy.get('.login-form h2').should('be.visible').and('contain.text', 'Login to your account')
    cy.url().should('include', '/login')
  }

  signup(name, email) {
    cy.get('[data-qa="signup-name"]').clear().type(name)
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()
  }

  login(email, password) {
    cy.get('[data-qa="login-email"]').clear().type(email)
    cy.get('[data-qa="login-password"]').clear().type(password, { log: false })
    cy.get('[data-qa="login-button"]').click()
  }

  assertIncorrectCredentials() {
    cy.get('.login-form p').should('be.visible').and('contain.text', 'Your email or password is incorrect!')
  }

  assertEmailAlreadyExists() {
    cy.get('.signup-form p').should('be.visible').and('contain.text', 'Email Address already exist!')
  }
}

export default new LoginPage()
