import {test, expect} from '@playwright/test'

test("Handle dropdowns", async({page}) => {

   await page.goto('https://testautomationpractice.blogspot.com/')

   // select multiple dropdown from multi select dropdrown
   // await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

   // Assertions 
   // 1. check number of options in dropdrown 
    // const options = await page.locator('#colors option')
    // await expect(options).toHaveCount(7)


    //2 . check number of options in dropdrown - JS approach 
    // const options = await page.$$('#colors option')
    // console.log('Number of options in dropdown:', options.length)
    // await expect(options.length).toBe(7)

   //3. check the presence of value in the dropdown
   const content = await page.locator('#colors').textContent()
   await expect(content.includes('Block')).toBeTruthy()



   await page.waitForTimeout(5000) 
})