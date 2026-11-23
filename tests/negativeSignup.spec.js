import { test, expect } from '@playwright/test';
import SignupPage from '../pages/SignupPage.js';

const signupData = require('../test-data/signupData.js');

test('User should register successfully', async ({ page }) => {

    const signupPage = new SignupPage(page);

    await signupPage.openSignupPage();

    await signupPage.signup(
        signupData.invalidUser.username,
        signupData.invalidUser.email,
        signupData.invalidUser.password
    );
    await expect(username).toHaveJSProperty('validity.valueMissing', true);
});