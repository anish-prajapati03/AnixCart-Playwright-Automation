import { test, expect } from '@playwright/test';
const LoginPage = require('../pages/LoginPage');
const LoginData = require('../test-data/loginData');

test("Login with Valid credential", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();

    await loginPage.login(
        LoginData.validUser.username,
        LoginData.validUser.password
    );

})