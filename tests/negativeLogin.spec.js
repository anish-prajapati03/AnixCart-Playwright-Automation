import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import LoginData from '../test-data/loginData.js';

test('Login with Valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();

    await loginPage.login(
        LoginData.validUser.username,
        LoginData.validUser.password
    );
});