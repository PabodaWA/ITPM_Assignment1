import { test, expect } from '@playwright/test';

//testcase: Pos_Fun_0001

test('Pos_Fun_0001: Convert a short daily usage question', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'Oyaa kaeevadha?';
  const expectedSinhala = 'ඔයා කෑවද?';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

  console.log('Test Pos_Fun_0001 executed successfully');

});

  //testcase : Pos_Fun_0002

  test('Convert a medium-length daily usage sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mata adha hari nidhimathayi, ee nisaa mama poddak nidhaagena iDHAlaa passe vaeda karanna hithan inne.';
  const expectedSinhala = 'මට අද හරි නිදිමතයි, ඒ නිසා මම පොඩ්ඩක් නිදාගෙන ඉඳලා පස්සෙ වැඩ කරන්න හිතන් ඉන්නේ.';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

  console.log('Test Pos_Fun_0002 executed successfully');


});
