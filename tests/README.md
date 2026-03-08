Projeto de automação de testes E2E utilizando Playwright com TypeScript para validar o fluxo de login do site de testes Sauce Demo.

Tecnologias utilizadas

Node.js

TypeScript

Playwright

Site utilizado para testes

https://www.saucedemo.com/

Este site é amplamente utilizado para prática de automação de testes.

Estrutura do projeto:

sauce_demo_playwright
│
├── pages
│   └── login.page.ts
│
├── tests
│   └── login.spec.ts
│
├── playwright.config.ts
└── package.json

Padrão utilizado

O projeto utiliza o padrão Page Object Model (POM) para melhor organização e reutilização de código.

Exemplo:

pages → contém as ações da página

tests → contém os cenários de teste

Cenário automatizado
Login com sucesso

Fluxo automatizado:

Acessar a página inicial

Informar usuário válido

Informar senha válida

Clicar em login

Validar acesso à página de produtos

Usuário utilizado:
standard_user

Senha:
secret_sauce

Como instalar o projeto

Clone o repositório:
git clone <url-do-repositorio>

Acesse a pasta:
cd sauce_demo_playwright

Instale as dependências:
npm install

Instale os navegadores do Playwright:
npx playwright install

Executar todos os testes:
npx playwright test

Abrir relatório HTML:
npx playwright show-report