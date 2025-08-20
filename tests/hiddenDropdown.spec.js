import {test, expect} from '@playwright/test'

test('Hidden Dropdown Test', async ({page}) => {

    // step 1: Go to the site
    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(2000)

     // Step 2: Click on the dropdown to make options visible
    await page.locator('#withOptGroup').click()

    // Step 3: Now locate hidden item using text
     const dropDownOptions=page.locator('div[class*="menu"] div[class*="option"]')
     await expect(dropDownOptions.first()).toBeVisible()

     // Step 4: Choose "Group 1, Option 2"
     const option=page.locator('div[class*="option"]', { hasText: optionText })
     await option.click()

     
    })