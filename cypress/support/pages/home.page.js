class HomePage {
  visit() {
    cy.visit('/')
    this.assertIsVisible()
  }

  get logo() {
    return cy.get('img[alt="Website for automation practice"]')
  }

  get featuredItems() {
    return cy.get('.features_items')
  }

  get subscriptionHeading() {
    return cy.get('.single-widget h2')
  }

  get subscriptionEmail() {
    return cy.get('#susbscribe_email')
  }

  get subscriptionButton() {
    return cy.get('#subscribe')
  }

  get subscriptionSuccess() {
    return cy.get('#success-subscribe')
  }

  assertIsVisible() {
    cy.url().should('include', 'automationexercise.com')
    this.logo.should('be.visible')
    this.featuredItems.should('be.visible')
  }

  goToLogin() {
    cy.get('a[href="/login"]').first().click()
  }

  goToProducts() {
    cy.get('a[href="/products"]').first().click()
  }

  goToCart() {
    cy.get('a[href="/view_cart"]').first().click()
  }

  assertLoggedInAs(name) {
    cy.get('a').contains('Logged in as').should('be.visible').and('contain.text', name)
  }

  deleteAccount() {
    cy.get('a[href="/delete_account"]').click()
  }

  logout() {
    cy.get('a[href="/logout"]').click()
  }

  addFirstFeaturedProductToCart() {
    cy.get('.features_items .product-image-wrapper')
      .first()
      .trigger('mouseover')
      .within(() => {
        cy.contains('Add to cart').click({ force: true })
      })
    cy.get('#cartModal').should('be.visible')
    cy.get('#cartModal').contains('Continue Shopping').click()
    cy.get('#cartModal').should('not.be.visible')
  }

  subscribe(email) {
    this.subscriptionHeading.scrollIntoView()
    this.subscriptionHeading.should('be.visible').and('contain.text', 'Subscription')
    this.subscriptionEmail.type(email)
    this.subscriptionButton.click()
  }
}

export default new HomePage()
