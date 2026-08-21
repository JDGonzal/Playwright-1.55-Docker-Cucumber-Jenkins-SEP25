import { expect, test } from '@playwright/test';

test('Confirmation Alert - OK Button', async ({ page }) => {
  // await page.goto("https://www.the-internet.herrcuapp.com/javascript_alerts");
  await page.goto(
    'https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/',
  );
  // Espero que se abra la alerta y la manejo con el evento 'dialog'
  page.on('dialog', async (alert) => {
    const alertMessage = alert.message();
    // Verifico el mensaje de la alerta
    console.log('Alert message:', alertMessage);
    expect(alertMessage).toEqual('Press a button!');
    await alert.accept();
    await expect(page.locator('#confirm-demo')).toHaveText('You pressed OK!');
  });
  // Depues es que debo hacer click en el boton que dispara la alerta
  await page
    .locator(
      "p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']",
    )
    .click();

  await page.close();
});

test('Confirmation Alert - Cancel Button', async ({ page }) => {
  // await page.goto("https://www.the-internet.herrcuapp.com/javascript_alerts");
  await page.goto(
    'https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/',
  );
  // Espero que se abra la alerta y la manejo con el evento 'dialog'
  page.on('dialog', async (alert) => {
    const alertMessage = alert.message();
    // Verifico el mensaje de la alerta
    console.log('Alert message:', alertMessage);
    expect(alertMessage).toEqual('Press a button!');
    await alert.dismiss();
    await expect(page.locator('#confirm-demo')).toHaveText('You pressed Cancel!');
  });
  // Depues es que debo hacer click en el boton que dispara la alerta
  await page
    .locator(
      "p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']",
    )
    .click();

  await page.close();
});
