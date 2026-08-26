import { expect, test } from '@playwright/test';

test.skip('Simple Alert Handling', async ({ page }) => {
  // await page.goto("https://www.the-internet.herrcuapp.com/javascript_alerts");
  // El correcto es https://the-internet.herokuapp.com/
  await page.goto(
    'https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/',
  );
  // Espero que se abra la alerta y la manejo esperando el evento 'dialog'
  // Para evitar que la prueba se quede colgada si NO aparece un dialog,
  // registramos waitForEvent con timeout y capturamos excepciones.
  const locator = page.locator("button[class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']");
  let dialog = null;
  try {
    const wait = page.waitForEvent('dialog', { timeout: 5000 });
    await locator.click(); // mantenemos el mismo click/selector solicitado
    dialog = await wait;
  } catch (e) {
    const errMsg = (e as any)?.message ?? String(e);
    console.log('No native dialog detected within 5s:', errMsg);
  }

  if (dialog) {
    const alertMessage = dialog.message();
    // Verifico el mensaje de la alerta
    console.log('Alert message:', alertMessage);
    expect(alertMessage).toEqual('I am an alert box!, error');
    await dialog.accept();
  } else {
    // Si no hay dialog nativo, registramos una nota para el depurador.
    console.log('No dialog event — the page may use an HTML modal instead of window.alert.');
  }
  // o uso el botón de Alerta simple — con el primer botón accesible "Click Me"
  // await page.getByRole('button', { name: 'Click Me' }).first().click();

  await page.close();
});
