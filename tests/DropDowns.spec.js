import {test, expect} from '@playwright/test'

test('Handle Dropdowns', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Multiple ways to select option from dropdowns 
    // await page.locator('#country').selectOption({label: 'India'})   // select by lebel here
    // await page.locator('#country').selectOption('canada') // visible test here we prefer most this way
    // await page.locator('#country').selectOption({value: 'India'}) // select by value here  also we use index as well 
    // await page.waitForTimeout(5000) // wait for 5 seconds to see the selection 

    // Assertions 
    //1. Chcek number of options in dropdrown - Approache 1
    // const options= await page.locator('#country option')
    // await expect(options).toHaveCount(10)

    //2. Check number of optionsin dropdrown - Approach 2
    // const options = await page.$$('#country option')
    // console.log('Number of options in dropdrown:', options.length)
    // await expect(options.length).toBe(10)

    //3. check presence of value in the dropdrown 
    // const content = await page.locator('#country').textContent()
    // await expect(content).toContain('India')
    
    //4 . check the presence of vaue in the dropdrown - Approach 2 
    const options= await page.$$('#country option')
    let status = false
    for (const option of options) {
        console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes('India'))
        {
            status = true
            break
        }

    }
    expect(status).toBeTruthy()


    await page.waitForTimeout(5000)

})