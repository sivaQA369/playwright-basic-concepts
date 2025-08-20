import {test, expect} from '@playwright/test'

test('Record Video of Test', async({page}) => {

    await page.goto('https://www.saucedemo.com')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page).toHaveURL(/inventory/)

    await page.waitForTimeout(3000)
})