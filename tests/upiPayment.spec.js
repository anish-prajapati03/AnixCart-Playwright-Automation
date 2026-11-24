
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import CartPage from '../pages/CartPage.js';
import LoginData from '../test-data/loginData.js';

test('User should place order using UPI', async ({ page }) => {

    
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();

    await loginPage.login(
        LoginData.validUser.username,
        LoginData.validUser.password
    );

    
    await page.getByRole('button', { name: '🛒 Cart' }).nth(1).click();
    await page.getByRole('button', { name: '🛒 Cart' }).nth(1).click();
    await page.getByRole('button', { name: '🛒 Cart' }).nth(2).click();

    
    const cartPage = new CartPage(page);

    await cartPage.openCart();
    await cartPage.checkout();


    await cartPage.selectUPI();
    await cartPage.enterAddress('Noida, Uttar Pradesh');

    
    await cartPage.selectUPIApp('googlePay');

   
    await cartPage.enterUPIId('testuser@upi');

    
    await cartPage.placeOrder();


    await expect(cartPage.orderConfirmation).toBeVisible();
});
