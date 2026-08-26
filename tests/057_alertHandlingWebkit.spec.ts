import { expect, test } from '@playwright/test';

test('Simple Alert Handling', async ({ page }) => {
  // await page.goto("https://www.the-internet.herrcuapp.com/javascript_alerts");
  // El Correcto es https://the-internet.herokuapp.com/
  await page.goto(
    'https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/',
  );
  // Espero que se abra la alerta y la manejo con el evento 'dialog'
  page.on('dialog', async (alert) => {
    const alertMessage = alert.message();
    // Verifico el mensaje de la alerta
    console.log('Alert message:', alertMessage);
    expect(alertMessage).toEqual('I am an alert box!');
    await alert.accept();
  });
  // Depues es que debo hacer click en el boton que dispara la alerta
  // Uso el botón por cssSelector
  await page.locator("button[class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']").click();
  // o uso el botón de Alerta simple — con el primer botón accesible "Click Me"
  // await page.getByRole('button', { name: 'Click Me' }).first().click();

  await page.close();
});
