import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: false,
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