import { expect, test } from '@playwright/test';

test('Frame handing Using Page.frame()', async ({ page }) => {
  // await page.goto('https://the-internet.herokuapp.com/iframe');
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Localizamos el total de frames en la página
  const frames = page.frames();
  console.log(`Total frames in the page: ${frames.length}`);
  // Tomo el primer frame como un URL
  const firstFrame = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});
  //Si existe el frame, localizamos el input y escribimos un texto
  if (firstFrame) {
    await firstFrame.locator('input[name="mytext1"]').fill('Hello from Frame 1');
  }

  await page.close();
});

test('Frame handling Using Page.frameLocator()', async ({ page }) => {
  // await page.goto('https://the-internet.herokuapp.com/iframe');
  await page.goto('https://ui.vision/demo/webtest/frames/');
  // Localizamos el primer frame usando frameLocator y escribimos un texto en el input
  const firstFrameLocator = page.frameLocator('frame[src="frame_1.html"]');
  await firstFrameLocator?.locator('input[name="mytext1"]').fill('Hello from Frame 1');
  
  await page.close();
});

