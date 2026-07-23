import { expect, test } from "@playwright/test";

test("Attribute Assertion", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  // Verify for attribute value of the input field by name
  await expect(page.locator("input[placeholder='Username']")).toHaveAttribute("name", "username");
  // Verify for attribute value of the input field by class
  await expect(page.locator("input[placeholder='Username']")).toHaveAttribute("class", "oxd-input oxd-input--focus");
  // Verify for attribute value of the input field by regex
  await expect(page.locator("input[placeholder='Username']")).toHaveAttribute("class", /.*oxd-input/);
  await page.close();
});
