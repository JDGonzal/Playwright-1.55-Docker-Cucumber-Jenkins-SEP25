import { expect, test } from "@playwright/test";

test("Login Test for Orange HRM", async ({ page }) => {
	// "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
	await page.goto("https://opensource-demo.orangehrmlive.com");
	await page.locator('input[name="username"]').fill("Admin");
	await page.locator('input[name="password"]').fill("admin123");
	await page.locator('button[type="submit"]').click();
	await page.locator('.oxd-userdropdown-tab').click();
	await page.locator('text=Logout').click();
	await expect(page).toHaveURL(
		"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
	);
	await page.close();
});
