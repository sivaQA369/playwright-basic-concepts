// const {test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test('Locators', async ({page}) => {

    await page.goto('https://demoblaze.com/')

    // click on login button - property
    // await page.locator('id=login2').click()
    await page.click('id=login2')

    // provide username - css 
    // await page.locator('#loginusername').fill()
    await page.fill('#loginusername', 'krishna36')
    // await page.type('#loginusername')
    // provide password - CSS
    await page.fill('#loginpassword', 'test@123')

    // click on login button - XPATH
     await page.click("//button[normalize-space()='Log in']")

     // verify logout button - Xpath
    const logoutLink= await page.locator("//a[@id='logout2']")

    await expect(logoutLink).toBeVisible()

    await page.close()
})
