import { expect, test } from "@playwright/test";

test("radio buttons handling", async ({ page }) => {
	// await page.goto("https://demoautomationtesting.in/Register.html");
	await page.goto("https://practice.expandtesting.com/radio-buttons");
	const colorRadioButton = page.locator("label[for='yellow']");

	// Way 1 assertion
	await expect(colorRadioButton).not.toBeChecked();
	// Way 2 assertion
	expect(await colorRadioButton.isChecked()).toBeFalsy();
	//Way 3 assertion
	// await expect(colorRadioButton).toHaveJSProperty("checked", false);

	await colorRadioButton.check();

  // Way 1 assertion
	await expect(colorRadioButton).toBeChecked();
  // Way 2 assertion
	expect(await colorRadioButton.isChecked()).toBeTruthy();
  // Way 3 assertion
	// await expect(colorRadioButton).toHaveJSProperty("checked", true);

	await page.close();
});
