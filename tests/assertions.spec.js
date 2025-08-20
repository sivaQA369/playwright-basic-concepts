import {test, expect} from '@playwright/test'

test('Assertions', async ({page}) => {
    await page.goto('https://demoblaze.com/')

  // Hard Assertions 
   /* await expect(page).toHaveTitle('STORE1');
    await expect(page).toHaveURL('https://demoblaze.com/')
    await expect(page.locator('#nava')).toBeVisible()
  */

    // Soft Assertions
    await expect.soft(page).toHaveTitle('STORE1');
    await expect.soft(page).toHaveURL('https://demoblaze.com/')
    await expect.soft(page.locator('#nava')).toBeVisible()
  
})