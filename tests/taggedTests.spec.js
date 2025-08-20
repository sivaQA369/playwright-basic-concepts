import {test, expect} from '@playwright/test'

test ('@smoke Login with credentials', async ({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('#login-button')
    await expect(page).toHaveURL(/inventory/)

})

test('@regression Add product to cart', async ({page}) => {
    await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('text=Add to cart')
  await page.click('.shopping_cart_link')
  await expect(page.locator('.cart_item')).toBeVisible()

})

test('@sanity Logout from dashboard', async ({page}) => {

    await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('#react-burger-menu-btn');
  await page.getByText('Logout').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/')

})


/*
🧠 Best Practices
@smoke        // Very quick, high-priority tests
@regression   // Full suite before release
@sanity       // Small set to check basic app functionality
@critical     // Payment, login, etc.
@api          // API tests only

Your CLI Cheat Sheet 🧠
npx playwright test --grep "@smoke"
npx playwright test --grep "@regression"
npx playwright test --grep "@smoke|@sanity"
npx playwright test --grep-invert "@slow"


*/