import { expect, test } from "@playwright/test";

test("Present/Not Present Assertion", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  // Check if the added-manually class is present
  await expect(page.locator('.added-manually')).not.toHaveCount(1);
  // Click on Add Element button
  await page.locator('button[onclick="addElement()"]').click();
  // Check if the added-manually class is present
  await expect(page.locator('.added-manually')).toHaveCount(1); 
  // Close all process
  await page.close();
});
