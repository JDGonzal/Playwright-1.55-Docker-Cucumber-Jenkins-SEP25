import { expect, test } from '@playwright/test';

test('Prompt Alert - OK Button', async ({ page }) => {
  // await page.goto("https://www.the-internet.herrcuapp.com/javascript_alerts");
  // El correcto es https://the-internet.herokuapp.com/
  await page.goto(
    'https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/',
  );
  // Espero que se abra la alerta y la manejo con el evento 'dialog'
  page.on('dialog', async (alert) => {
    const alertMessage = alert.message();
    // Verifico el mensaje de la alerta
    console.log('Alert message:', alertMessage);
    expect(alertMessage).toEqual('Please enter your name');
    await alert.accept("juan");
    await expect(page.locator('#prompt-demo')).toHaveText("You have entered 'juan' !");
  });
  // Depues es que debo hacer click en el boton que dispara la alerta
  await page
    .locator(
      "div:nth-child(3) p:nth-child(1) button:nth-child(1)",
    )
    .click();

  await page.close();
});

test('Prompt Alert - Cancel Button', async ({ page }) => {
  // await page.goto("https://www.the-internet.herrcuapp.com/javascript_alerts");
  await page.goto(
    'https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/',
  );
  // Espero que se abra la alerta y la manejo con el evento 'dialog'
  page.on('dialog', async (alert) => {
    const alertMessage = alert.message();
    // Verifico el mensaje de la alerta
    console.log('Alert message:', alertMessage);
    expect(alertMessage).toEqual('Please enter your name');
    await alert.dismiss();
    await expect(page.locator('#prompt-demo')).toHaveText('');
  });
  // Depues es que debo hacer click en el boton que dispara la alerta
  await page
    .locator(
      "div:nth-child(3) p:nth-child(1) button:nth-child(1)",
    )
    .click();

  await page.close();
});
