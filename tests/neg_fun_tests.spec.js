/*import { test, expect } from '@playwright/test';

//testcase: Neg_Fun_0001

test('Neg_Fun_001:Convert daily usage sentence with missing spaces', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mataadhanidhimathayi';

  const expectedSinhala = 'මට අද නිදිමතයි'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 60000 });

  console.log('Test Neg_Fun_0001 executed successfully');
}); 
*/
