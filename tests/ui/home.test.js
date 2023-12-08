const {test, expect} = require('@playwright/test');
import {pageURL,} from './about.test.js'

test('Check home page', async ({page}) => {
    await page.goto(pageURL);
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toContain('Books Collection');
});
  