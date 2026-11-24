
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import CartPage from '../pages/CartPage.js';
import LoginData from '../test-data/loginData.js';

test('User should complete an order successfully', async ({ page }) => {

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();

    await loginPage.login(
        LoginData.validUser.username,
        LoginData.validUser.password
    );

    // Add products to cart
    await page.getByRole('button', { name: '🛒 Cart' }).nth(1).click();
    await page.getByRole('button', { name: '🛒 Cart' }).nth(2).click();
    await page.getByRole('button', { name: '🛒 Cart' }).nth(2).click();
    await page.getByRole('button', { name: '🛒 Cart' }).nth(4).click();

    // Cart and checkout
    const cartPage = new CartPage(page);
    await cartPage.openCart();
    await cartPage.checkout();

    // Place order
    await cartPage.placeOrder('Noida, Uttar Pradesh');

    // Verify order confirmation
    await expect(
        page.getByRole('button', { name: 'Continue Shopping' }).last()
    ).toBeVisible();
});
