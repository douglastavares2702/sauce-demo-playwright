import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Login to Sauce Demo successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.access();
  await loginPage.login('standard_user', 'secret_sauce');

  // url validate
  await expect(page).toHaveURL(/inventory/);
  // page validar "Swag Labs"
  await expect(page).toHaveTitle('Swag Labs');
});

test('Login and logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.access();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.logout();

  await expect(page).toHaveURL(/saucedemo/);
  await expect(page.locator('#login-button')).toBeVisible();
});