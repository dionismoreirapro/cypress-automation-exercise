const parseBody = (response) =>
  typeof response.body === 'string' ? JSON.parse(response.body) : response.body

class AccountApi {
  create(user) {
    return cy
      .request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/createAccount`,
        form: true,
        body: {
          name: user.name,
          email: user.email,
          password: user.password,
          title: user.title,
          birth_date: user.birthDay,
          birth_month: user.birthMonth,
          birth_year: user.birthYear,
          firstname: user.firstName,
          lastname: user.lastName,
          company: user.company,
          address1: user.address1,
          address2: user.address2,
          country: user.country,
          zipcode: user.zipcode,
          state: user.state,
          city: user.city,
          mobile_number: user.mobileNumber,
        },
      })
      .then((response) => {
        const body = parseBody(response)
        expect(body.responseCode, JSON.stringify(body)).to.eq(201)
      })
  }

  delete(email, password) {
    return cy
      .request({
        method: 'DELETE',
        url: `${Cypress.env('apiUrl')}/deleteAccount`,
        form: true,
        failOnStatusCode: false,
        body: {
          email,
          password,
        },
      })
      .then((response) => {
        const body = parseBody(response)
        expect([200, 400]).to.include(body.responseCode)
      })
  }
}

export default new AccountApi()
