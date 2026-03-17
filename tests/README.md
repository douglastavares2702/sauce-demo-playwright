# Sauce Demo - Test Automation with Playwright

End-to-end (E2E) test automation project using Playwright with TypeScript to validate functional flows of the Sauce Demo test website.

---

# Technologies

- Node.js
- TypeScript
- Playwright

---

# Test Website

https://www.saucedemo.com/

---

# Project Structure
sauce_demo_playwright
│
├── pages
│ └── login.page.ts
│
├── tests
│ └── login.spec.ts
│
├── playwright.config.ts
└── package.json

---

# Design Pattern
This project uses the Page Object Model (POM) design pattern for better organization and code reuse.

pages → page actions
tests → test scenarios

---

# Automated Scenario
Successful Login
Automated flow:
Open the home page
Enter valid username
Enter valid password
Click login
Validate access to the products page

Username: standard_user
Password: secret_sauce

---

# How to Install the Project

Clone the repository:

```bash
git clone <repository-url>

Go to the project folder:
cd sauce_demo_playwright

Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

Run all tests:
npx playwright test

Running Specific Tests
npx playwright test -g "Login to saucedemo successfully"

Runnig using .only
Add .only to any test you want to run alone:
test.only('Login to saucedemo successfully')
-> Remember to remove ".only" after testing.

Open HTML report:
npx playwright show-report

## Add product to cart Scenario
This test adds a product to the cart and validates that the correct item was added by comparing:
Product name
Product price
The values are captured dynamically from the product list and verified inside the cart.