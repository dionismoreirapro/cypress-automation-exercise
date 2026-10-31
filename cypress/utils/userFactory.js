export const buildUser = (overrides = {}) => {
  const suffix = `${Date.now()}_${Math.floor(Math.random() * 100000)}`

  return {
    title: 'Mr',
    password: 'Senha@12345',
    birthDay: '10',
    birthMonth: '5',
    birthYear: '1990',
    firstName: 'Dionis',
    lastName: 'QA',
    company: 'DVWorks',
    address1: 'Rua dos Testes, 100',
    address2: 'Sala 4',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    zipcode: 'M5V3L9',
    mobileNumber: '11999999999',
    name: `QA ${suffix}`,
    email: `qa.auto.${suffix}@mailinator.com`,
    ...overrides,
  }
}
