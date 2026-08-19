import { expect, test } from "@playwright/test";

test("multi static dropdown handling", async ({ page }) => {
	// await page.goto("https://demoautomationtesting.in/Register.html");
	await page.goto(
		"https://www.testmuai.com/selenium-playground/select-dropdown-demo/",
	);
	// await page.locator("#multi-select").selectOption({ label: "Friday" });
	await page.selectOption("#multi-select", [
		{ value: "Ohio" },
		{ label: "Texas" },
		{ index: 3 },
	]);
	// await page.pause();
	const selectedOptions = await page.$$eval(
		"#multi-select option:checked",
		(els) => els.map((el) => el.textContent.trim()),
	);
	expect(selectedOptions).toEqual(["New York", "Ohio", "Texas"]);

	await page.close();
});
