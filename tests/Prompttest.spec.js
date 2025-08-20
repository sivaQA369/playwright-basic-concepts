import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from  '../pages/InventoryPage'
import { CartPage } from  '../pages/CartPage'
import { CheckoutPage } from  '../pages/CheckoutPage'
import { CheckoutOverviewPage } from  '../pages/CheckoutOverviewPage'
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage'
// import { CheckoutCompletePage } from  '../pages/CheckoutCompletePage'

test('Login with valid credentials', async ({page}) => {

    // Login
    const loginPage=new LoginPage(page)
    await loginPage.gotoLoginPage()
    await loginPage.login('standard_user', 'secret_sauce')

    // Assertion after login (URL contains 'inventory')
    await expect(page).toHaveURL(/inventory/)

})

test('Login with invalid credentials', async({page}) => {

    const loginPage= new LoginPage(page)
    await loginPage.gotoLoginPage()
    await loginPage.login('e_user','password')
    await loginPage.assertLoginError("Epic sadface: Username and password do not match any user in this service")
})

// Inventory page test
test('add product to cart and verify cart count', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
   const cartPage = new CartPage(page)
   const checkoutPage = new CheckoutPage(page)
   const overviewPage = new CheckoutOverviewPage(page)
   const completePage = new CheckoutCompletePage(page)

  await loginPage.gotoLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addProductsToCart(5);

  const isCorrect = await inventoryPage.verifyCartItemCount(5);
  expect(isCorrect).toBe(true);

  await inventoryPage.goToCartPage();

  // Verify cart page loaded
  const isLoaded = await cartPage.verifyCartPageLoaded()
  expect(isLoaded).toBe(true)


// Print cart items
await cartPage.printCartItems()

// Assert a Known product exists in the cart
const exists = await cartPage.assertProductExists('Sauce Labs Backpack')
expect(exists).toBe(true)

// proceed to checkout
await page.click('#checkout')
await checkoutPage.fillCheckoutDetails('Siva', 'Krishna', '523331')

// Overview Verification
const isOverview = await overviewPage.verifyOverviewPageLoaded()
expect(isOverview).toBe(true)

const itemCount = await overviewPage.getSummaryCount()
console.log(`Summary items: ${itemCount}`)
expect(itemCount).toBe(5)

await overviewPage.finishOrder()

// Order Complete check
const isSuccess = await completePage.verifyOrderSuccess()
expect(isSuccess).toBe(true)


});




