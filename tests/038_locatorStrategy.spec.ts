import {test} from '@playwright/test';

test('Locator Strategy Test', async ({ page }) => {
  // Navigate to the target page
  await page.goto('https://www.saucedemo.com/');
  // Use a locator strategy to find the username input field
  // page.locator('id="user-name"').fill('standard_user');
  await page.locator('#user-name').fill('standard_user');
  // Use a XPath to find the password input field
  await page.locator('//input[@id="password"]').fill('secret_sauce');
  // Click the login button using a CSS selector
  // page.locator('input:has-text("Login")').click();
  await page.locator('text="Login"').click();
});
