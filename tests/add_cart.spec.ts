import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.access();
  await loginPage.login('standard_user', 'secret_sauce');
});

test.only('Add product to cart', async ({ page }) => {
  // Get product name and price
  const name = await page.locator('.inventory_item_name').first().textContent();
  const price = await page.locator('.inventory_item_price').first().textContent();

  // Add product to cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('.shopping_cart_link').click();

  // Validate cart page
  await expect(page).toHaveURL(/cart/);

  // Validate product name and price in cart
  await expect(page.locator('.inventory_item_name')).toHaveText(name!);
  await expect(page.locator('.inventory_item_price')).toHaveText(price!);
});