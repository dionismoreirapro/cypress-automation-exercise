# Cypress — Automation Exercise

Suite de testes E2E para [Automation Exercise](https://www.automationexercise.com/), cobrindo os casos da página [Test Cases](https://www.automationexercise.com/test_cases).

## Casos implementados

| ID | Cenário |
| --- | --- |
| 1 | Register User |
| 2 | Login User with correct email and password |
| 3 | Login User with incorrect email and password |
| 4 | Logout User |
| 5 | Register User with existing email |
| 8 | Verify All Products and product detail page |
| 9 | Search Product |
| 10 | Verify Subscription in home page |
| 15 | Place Order: Register before Checkout |
| 16 | Place Order: Login before Checkout |

## Arquitetura

O projeto é modular:

- `cypress/support/pages` — Page Objects com seletores (`data-qa` quando disponível)
- `cypress/support/services` — API oficial de contas (`createAccount` / `deleteAccount`)
- `cypress/support/commands.js` — comandos reutilizáveis de autenticação e checkout
- `cypress/utils/userFactory.js` — geração de usuários únicos
- `cypress/fixtures/users.json` — dados estáticos (pagamento, busca, usuário inválido)
- `cypress/e2e` — specs agrupados por domínio (`auth`, `products`, `subscription`, `checkout`)

Usuários temporários são criados via API nos casos que exigem conta pré-existente (2, 4, 5 e 16), evitando dependência de credenciais fixas.

## Pré-requisitos

- Node.js 18+
- Google Chrome

## Execução local

```bash
npm install
npm test
```

Modo interativo:

```bash
npm run cy:open
```

Relatório HTML gerado em `cypress/reports` após `npm test`.

## GitHub Actions

O workflow `.github/workflows/cypress.yml` executa a suíte em Chrome a cada push/PR e publica:

- relatório **cypress-mochawesome-reporter**
- screenshots de falha
- vídeos da execução

## Boas práticas aplicadas

- Page Object Model e comandos customizados
- Seletores estáveis (`data-qa`, `href` semântico)
- Dados dinâmicos para e-mail (sem contas compartilhadas)
- Limpeza de conta após os fluxos que a criam
- Retries apenas em `runMode`
- Bloqueio de hosts de anúncio para reduzir flakiness
- Relatório com screenshots embutidos
