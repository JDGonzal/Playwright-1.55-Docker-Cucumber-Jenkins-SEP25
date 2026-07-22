import { expect, test } from "@playwright/test";

test("Visible/Hidden Assertion", async ({ page }) => {
  await page.goto("https://jdgonzal.github.io/alquimia-software/");
  // Verificar que el elemento con el id "miTexto" es visible en la página
  await expect(page.locator('#miTexto')).toBeVisible(); 
  // Presiono el botón para ocultar el texto
  await page.locator('#miBoton').click();
  // Verificar que el elemento con el id "miTexto" ya no es visible en la página
  await expect(page.locator('#miTexto')).toBeHidden();
  // Cerramos todo
  await page.close();
});
