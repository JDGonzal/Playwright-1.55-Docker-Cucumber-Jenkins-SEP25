import { expect, test } from "@playwright/test";

test("dropdown handling", async ({ page }) => {
	// await page.goto("https://demoautomationtesting.in/Register.html");
	await page.goto("https://practice.expandtesting.com/dropdown");
	const countryDropdown = page.locator("#country");
	await countryDropdown.selectOption({ label: "India" });
	const selectedCountry = await countryDropdown.inputValue();
	expect(selectedCountry).toBe("IN");

	await page.close();
});
