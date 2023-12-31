const {test, expect} = require('@playwright/test');
import {pageURL,} from './about.test.js'

test('Check header', async ({page}) => {
    await page.goto(pageURL);  // you can replace this URL with any page that includes the header
    const homeLink = await page.$('a[href="/"]');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
});
  