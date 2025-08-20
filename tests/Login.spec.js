import {test, expect} from '@playwright/test'

test('Login', async ({page}) => {
    //step 1 : Go to login page
    await page.goto('https://www.saucedemo.com/')

    //step 2: Fill Username and Password
    await page.fill('#user-name', 'siva')
    await page.fill('#password', 'test@123')

    //step 3: Click on Login button
    await page.click('#login-button')

    //step 4: Assert error meassage is visible
    const errorMessage = page.locator('.error-message-container')
    await expect(errorMessage).toBeVisible()
    await expect(errorMessage).toContainText('Username and password do not match')

    //step 5: Take screenshot if error is shown 
    if (await errorMessage.isVisible()) {
        await page.screenshot({path: 'tests/login-error.png', fullPage: true})
    }
})