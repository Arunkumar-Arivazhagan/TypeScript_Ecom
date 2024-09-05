import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { chromium, webkit, firefox } from '@playwright/test'

test('login test', async()=>{
    const browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page: Page = await browser.newPage();
    await page.goto('http://demo.testfire.net/login.jsp');

    const emailId: Locator = await page.locator('#uid');
    const password: Locator = await page.locator('#passw');
    const submitBtn: Locator = await page.locator("//input[@name='btnSubmit']");

    await emailId.fill('admin');
    await password.fill('admin');
    await submitBtn.click();

    const title: String = await page.title();
    console.log('Title of the page is :', title);
    
    await page.screenshot({path:'./screenshots/homepage.png'});

    //assertion
    expect(title).toEqual('Altoro Mutual');

    await browser.close();
})