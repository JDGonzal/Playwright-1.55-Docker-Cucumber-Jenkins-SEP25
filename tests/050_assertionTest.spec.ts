import { expect, test } from "@playwright/test";

test("Screenshot Assertion", async ({ page }) => {
	await page.goto("https://opensource-demo.orangehrmlive.com");
	// Generate an assertion screenshot
	await expect(page).toHaveScreenshot("assertion-screenshot.png", {
		fullPage: true,
	});
  // Compare the current page with the assertion screenshot
	await expect(page).toHaveScreenshot();
	await page.close();
});

/*test("Screenshot Assertion orange", async ({ page }) => {
	await page.goto("https://opensource-demo.orangehrmlive.com");
	// Wait for the page to finish loading and for a visible login element
	await page.waitForLoadState("networkidle");
	// Wait for one of several likely selectors on the OrangeHRM login page
	await page.waitForSelector('input[name="username"]', { timeout: 5000 }).catch(() => null);
	// Generate an assertion screenshot after the page is stable
	await expect(page).toHaveScreenshot("assertion-screenshot-orange.png", {
		fullPage: true,
	});
	await page.close();
});*/
