import {test, expect} from '@playwright/test'

test ('Trace Viewer Demo', async ({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('#login-button')

    await expect(page.locator('.does-not-exist')).toBeVisible()

})