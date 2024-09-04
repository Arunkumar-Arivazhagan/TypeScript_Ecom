import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { chromium, webkit, firefox } from '@playwright/test'

test('login test', async()=>{
    const browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page: Page = await browser.newPage();
    await page.goto('');

    const emailId: Locator = await page.locator('');
    const password: Locator = await page.locator('');
    const submitBtn: Locator = await page.locator('');

    await emailId.fill('');
    await password.fill('');
    await submitBtn.click();

    const title: String = await page.title();
    console.log('Title of the page is :', title);
    
    await page.screenshot({path:'./screenshots/homepage.png'});

    //assertion
    expect(title).toEqual('');

    await browser.close();
})