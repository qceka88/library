const {test, expect} = require('@playwright/test');
import {pageURL,} from './about.test.js'

test('Check books page', async ({page}) => {
    await page.goto(pageURL + 'books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
});
  