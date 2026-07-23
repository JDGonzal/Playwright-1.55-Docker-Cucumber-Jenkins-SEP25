import { expect, test } from "@playwright/test";

test("URL Assertion", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  // Verify by full URL
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  // Verify by partial URL
  await expect(page).toHaveURL(/orangehrmlive/);
  await page.close();
});

test("Title Assertion", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  // Verify by full title
  await expect(page).toHaveTitle("OrangeHRM");
  // Verify by partial title
  await expect(page).toHaveTitle(/HRM/);
  await page.close();
});
