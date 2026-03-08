import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Login to saucedemo successful', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.access();
  await loginPage.login('standard_user', 'secret_sauce');

  // url validate
  await expect(page).toHaveURL(/inventory/);
  // page validar "Swag Labs"
  await expect(page).toHaveTitle('Swag Labs');

});