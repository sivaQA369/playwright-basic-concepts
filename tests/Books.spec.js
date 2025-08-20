import {test, expect} from '@playwright/test'

test('List all book titles and prices from homepage', async ({page}) => {
    
    // Step 1 : Go to Web Page
    await page.goto('https://books.toscrape.com/')

    // Step 2: List all book Elements
    const books = page.locator('.product_pod')
   const count= await books.count()
   console.log(`Total books on page: ${count}`);

   // Step 3: Loop through each book and print title and price
   for (let i=0; i<count; i++) {
         const title = await books.nth(i).locator('h3 > a').getAttribute('title')
         const price = await books.nth(i).locator('.price_color').textContent()
         console.log(`Book Title: ${title}, Price: ${price}`);
   }

   // Step 4: Click the first page to go its details page
     await books.nth(0).locator('h3 > a').click()

     // STEP 5: Validate product page title
     const productTitle = await page.locator('.product_main > h1').textContent()
     console.log(`Navigated to details page: ${productTitle}`)

     await expect(page.locator('.product_main > h1')).toBeVisible()


})