import { expect, test, type Page } from '@playwright/test';

test('Handling Static Web Table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const tableLocator = page.locator('table[name="BookTable"]');
  //Total de Columnas y Filas
  const totalRows = await tableLocator.locator('tr').count();
  const totalColumns = await tableLocator
    .locator('tr')
    .first()
    .locator('th')
    .count();

  // console.log(`Total Rows: ${totalRows}`);
  // console.log(`Total Columns: ${totalColumns}`);

  expect(totalRows).toBe(7); // 1 header row + 6 data rows
  expect(totalColumns).toBe(4); // 4 columns in the table

  await page.close();
});

test('Selecting Single Checkbox in the Table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const tableLocator = page.locator('#productTable');
  // const columnsLocator = tableLocator.locator('thead tr th');
  const rowsLocator = tableLocator.locator('tbody tr');
  // Buscamos donde está la fila `Tablet`
  const matchedRow = rowsLocator.filter({
    has: page.locator('td'),
    hasText: 'Tablet',
  });
  // await matchedRow.locator('input').check();
  await matchedRow.locator('td input[type="checkbox"]').check();
  expect(await matchedRow.locator('td input[type="checkbox"]').isChecked()).toBe(true);

  await page.close();
});

test('Selecting Multiple Checkbox using function', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const tableLocator = page.locator('#productTable');
  const rowsLocator = tableLocator.locator('tbody tr');
  // Buscamos donde está la fila `Tablet` y otros
  expect(await selectCheckboxByRowText(rowsLocator, page, 'Tablet')).toBe(true);
  expect(await selectCheckboxByRowText(rowsLocator, page, 'Laptop')).toBe(true);
  expect(await selectCheckboxByRowText(rowsLocator, page, 'Smartwatch')).toBe(true);  

  await page.close();
});

async function selectCheckboxByRowText(rowsLocator: any, page: Page, productName: string): Promise<boolean> {
  const matchedRow = rowsLocator.filter({
    has: page.locator('td'),
    hasText: productName,
  });
  // await matchedRow.locator('input').check();
  await matchedRow.locator('td input[type="checkbox"]').check();
  return await matchedRow.locator('td input[type="checkbox"]').isChecked();
}
