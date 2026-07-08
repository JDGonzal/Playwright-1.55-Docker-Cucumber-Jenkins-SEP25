import {test} from '@playwright/test';

test('Locator Strategy Test', async ({ page }) => {
  // Navigate to the target page
  await page.goto('https://www.saucedemo.com/');
  // Add a Pause to observe the page before performing actions
  // await page.pause();
  // Locate with the data-test attribute
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  // Verify that the user is logged in by checking for the presence of the inventory container
  await page.locator('.inventory_container').isVisible();
});
