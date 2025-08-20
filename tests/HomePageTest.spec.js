// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Home Page', async({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    
    const PageTitle = await page.title();
     console.log("Page Title:", PageTitle);

     await expect(page).toHaveTitle('STORE');

     const pageURL =  await page.url();
     console.log('Page URL is:',pageURL);
     
     await expect(page).toHaveURL('https://demoblaze.com/index.html');

     await page.close();
});