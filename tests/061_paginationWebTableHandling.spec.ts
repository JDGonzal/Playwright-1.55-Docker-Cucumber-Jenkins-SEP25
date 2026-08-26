import { expect, test} from '@playwright/test';

test('Printing all items from Page1 in Pagination table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const tableLocator = page.locator('#productTable');
  const columnsLocator = tableLocator.locator('thead tr th');
  const rowsLocator = tableLocator.locator('tbody tr');

  for (let rowIndex = 0; rowIndex < await rowsLocator.count(); rowIndex++) {
    const rowLocator = rowsLocator.nth(rowIndex);
    const rowData = []; // const rowData = row.locator(''td');
    for (let colIndex = 0; colIndex < await columnsLocator.count(); colIndex++) {
      const cellLocator = rowLocator.locator('td').nth(colIndex);
      const cellText = await cellLocator.textContent();
      rowData.push(cellText?.trim());
    }
    console.log(`Row ${rowIndex + 1}:`, rowData.join(' | '));
  }

  await page.close();
});

test('Printing all items from all Pages in Pagination table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const tableLocator = page.locator('#productTable');
  const columnsLocator = tableLocator.locator('thead tr th');
  const rowsLocator = tableLocator.locator('tbody tr');

  //Localizamos el manejador de páginas y su cantidad de páginas
  const paginationLocator = page.locator('#pagination li a');
  const totalPages = await paginationLocator.count();

  //Ciclo para recorer todas las páginas
  for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
    //Clic en el manejador de página correspondiente
    await paginationLocator.nth(pageIndex).click();
    console.log(`\nPage ${pageIndex + 1}:`);

    //Recorremos las filas de la página actual
    for (let rowIndex = 0; rowIndex < await rowsLocator.count(); rowIndex++) {
      const rowLocator = rowsLocator.nth(rowIndex);
      const rowData = [];
      for (let colIndex = 0; colIndex < await columnsLocator.count(); colIndex++) {
        const cellLocator = rowLocator.locator('td').nth(colIndex);
        const cellText = await cellLocator.textContent();
        rowData.push(cellText?.trim());
      }
      console.log(`Row ${rowIndex + 1}:`, rowData.join(' | '));
    }
  }

  await page.close();
});

