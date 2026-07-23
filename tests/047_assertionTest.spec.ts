import { expect, test } from "@playwright/test";

test("Text Match/Mismatch Assertion", async ({ page }) => {
  await page.goto("https://letcode.in/button");
  // Verify if the button to match the text is present
  await expect(page.locator("#color")).toHaveText("What is my color?");
  // Verify if the button mismatches the text
  await expect(page.locator("#color")).not.toHaveText("What is my color");

  await page.close();
});
