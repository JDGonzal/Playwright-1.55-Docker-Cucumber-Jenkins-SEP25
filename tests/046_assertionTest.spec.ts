import { expect, test } from "@playwright/test";

test("Enabled/Disabled Assertion", async ({ page }) => {
  await page.goto("https://letcode.in/button");
  // Verify if the button is enabled
  await expect(page.locator("#property")).toBeEnabled();
  // Verify if the button is disabled
  // await expect(page.locator("#isDisabled")).toBeDisabled();
  await expect(page.locator("[title='Disabled button']")).toBeDisabled();

  await page.close();
});
