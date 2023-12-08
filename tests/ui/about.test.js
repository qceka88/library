const { test, expect } = require('@playwright/test');

test('Check about page', async ({ page }) => {
  await page.goto('http://localhost:8080/about');
  const heading = await page.$('h3');
  const text = await heading.textContent();
  expect(text).toBe('About us');
});
