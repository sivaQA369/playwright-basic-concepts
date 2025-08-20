import {test,  expect} from '@playwright/test'

test('Playwright Locators practice - OrangeHRM', async ({page})  => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForTimeout(3000)

    // By using PlaceHolder - Locator practice
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    // By using Role
    await page.getByRole('button', {name: 'Login'}).click()

    // wait and assert for URL 
    await page.waitForURL('**/dashboard')
    await expect(page).toHaveURL(/dashboard/)
})
