import { test, expect } from '@playwright/test';
import SignupPage from '../pages/SignupPage.js';

const signupData = require('../test-data/signupData.js');

test('User should register successfully', async ({ page }) => {

    const signupPage = new SignupPage(page);

    await signupPage.openSignupPage();

    await signupPage.signup(
        signupData.validUser.username,
        signupData.validUser.email,
        signupData.validUser.password
    );
    await expect(
        page.getByText('Our Products')
    ).toBeVisible();
});