import {test, expect} from '@playwright/test'

/**
 * ✅ test.only() - Run ONLY this test
 * Useful when debugging a specific test
 */
/*
test.only('🔍 Only this test will run (Login test)', async ({page}) => {

    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
    await expect(page).toHaveURL(/inventory/)

})
*/

/**
 * ❌ test.skip() - Skip this test temporarily
 * Useful when test is not ready or fails due to a known issue
 */

test.skip('🚫 This test is skipped (Logout test)', async ({ page }) => {

    await page.goto('https://www.saucedemo.com')
    // Skipping rest of the steps — test will be skipped

})

/**
 * 🛠️ test.fail() - Expect this test to fail
 * Used to track known failures in reports
 */

test.fail('💥 This test is expected to fail (Wrong password)', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/); // this will fail

})

/**
 * 🧠 Conditional skip (example: skip if not in Chromium)
 * Dynamically skip based on condition
 */

test('🤖 Skip this test on non-Chromium browsers', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Only runs in Chromium')

  await page.goto('https://www.saucedemo.com')
  await expect(page).toHaveURL(/Swag Labs/)

})



/*

| Annotation        | Real Use                     | Environment       | Removes Confusion? | Fails Build? |
| ----------------- | ---------------------------- | ----------------- | ------------------ | ------------ |
| `test.only()`     | Local debugging              | Local dev         | ✅ Yes              | ❌ No         |
| `test.skip()`     | Temporary ignore             | All               | ✅ Yes              | ❌ No         |
| `test.fail()`     | Known bug (marked in report) | All               | ✅ Yes              | ✅ Expected   |
| `test.skip(cond)` | Env-based skip               | Cross-browser/env | ✅ Yes              | ❌ No         |

*/