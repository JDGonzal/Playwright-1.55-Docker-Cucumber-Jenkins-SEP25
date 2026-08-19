import { expect, test } from "@playwright/test";

test("Searchable Dynamic dropdown handling", async ({ page }) => {
	// await page.goto("https://demoautomationtesting.in/Register.html");
	await page.goto(
		"https://qaplayground.com/practice/dropdowns",
	);
	// Selecciono y lleno el campo de busqueda del dropdown
	await page.locator('#citySearch').click();
	await page.locator('#citySearch').fill('del');

	// Selecciono la opcion del dropdown
	await page.locator("button[role='option']").press("Enter");

	// Verifico que la opción seleccionada sea 'Delhi'
	const selectedCity = await page.locator('#citySearch').inputValue();
	expect(selectedCity).toBe('Delhi');

	await page.close();
});
