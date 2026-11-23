
const { test, expect } = require('@playwright/test');

test('AnixCartx homepage should load successfully', async ({ page }) => {


    await page.goto('/');


    await expect(page).toHaveURL(
        'https://anixcartx.netlify.app/'
    );


    await expect(page.locator('body')).toBeVisible();

    console.log('AnixCartx homepage loaded successfully');

});
