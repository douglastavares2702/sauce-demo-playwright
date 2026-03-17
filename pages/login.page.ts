import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async access() {
    await this.page.goto('/');
  }

  async login(user: string, password: string) {
    await this.page.locator('#user-name').fill(user);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#login-button').click();
  }

  async logout() {
    await this.page.locator('#react-burger-menu-btn').click();
    await this.page.locator('#logout_sidebar_link').click();
  }
}