import { expect, test } from "@playwright/test";

test("checkbox handling", async ({ page }) => {
	// await page.goto("https://demoautomationtesting.in/Register.html");
  await page.goto("https://practice.expandtesting.com/checkboxes");
  const checkbox1 = page.locator("label[for='checkbox1']"); // label[for='checkbox1']
  const checkbox2 = page.locator("label[for='checkbox2']");

  // Way 1 assertion
  await expect(checkbox1).not.toBeChecked();
  await expect(checkbox2).toBeChecked();

  //Way 2 assertion
  expect(await checkbox1.isChecked()).toBeFalsy();
  expect(await checkbox2.isChecked()).toBeTruthy();

  //Checking the checkbox1 and unchecking the checkbox2
  await checkbox1.check();
  await checkbox2.uncheck();

  // Way 1 assertion
  await expect(checkbox1).toBeChecked();
  await expect(checkbox2).not.toBeChecked();

  //Way 2 assertion
  expect(await checkbox1.isChecked()).toBeTruthy();
  expect(await checkbox2.isChecked()).toBeFalsy();

	await page.close();
});
