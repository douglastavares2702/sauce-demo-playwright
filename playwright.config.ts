import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: !!process.env.CI, 
    // runs the browser in headless mode when tests are executed in a CI environment. 
    // Locally, it keeps the browser visible.
    launchOptions: {
      slowMo: 500
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]

});