import { expect, test } from '@playwright/test';

test.skip('Nested Frame handling', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  //Localizamos el tercer frame mediante su URL y luego contamos los frames anidados dentro de él
  const thirdFrameLocator = page.frame({
    url: 'https://ui.vision/demo/webtest/frames/frame_3',
  });
  //Localizamos el tercer frame mediante su URL y luego contamos los frames anidados dentro de él
  const nestedFrames = thirdFrameLocator?.childFrames();
  console.log(
    `Total nested frames in the third frame: ${nestedFrames?.length}`,
  );
  // De los frame anidados localizamos los elementos para usar (proteger contra undefined)
  if (nestedFrames && nestedFrames.length > 0) {
    const firstNestedFrame = nestedFrames[0];

    /*await nestedFrames[0]
      // ?.locator("//*[@id='i9']/div[3]/div")
      ?.locator("//div[@id='i9']//div[@class='AB7Lab Id5V1']")
      .check({ force: true });*/
    const radioBoxLocator = firstNestedFrame?.locator(
      "//*[@id='i9']/div[3]/div",
    );
    await radioBoxLocator?.check({ force: true });
    /*await nestedFrames[0]
      //?.locator("//*[@id='i24']/div[3]")
      ?.locator("//div[@id='i24']//div[@class='rq8Mwb']")
      .check({ force: true });*/
    const checkBoxLocator = firstNestedFrame?.locator("//*[@id='i24']/div[3]");
    await checkBoxLocator?.check({ force: true });
  }

  await page.close();
});
