const { test, expect } = require('@playwright/test');
import {pageURL,} from './about.test.js'

test('Check footer', async ({ page }) => {
    await page.goto(pageURL);
    const footer = await page.$('div');
    const text = await footer.textContent();
    expect(text).toContain('© 2023 - Software Engineering and DevOps Retake Exam');
  });
  