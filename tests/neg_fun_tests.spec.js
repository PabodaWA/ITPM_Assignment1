import { test, expect } from '@playwright/test';

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

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 120000 });

  console.log('Test Neg_Fun_0001 executed successfully');
}); 


test('Neg_Fun_002:Convert informal slang-based interrogative conversation', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'ado machan, adha night eka free dha?ela vidhihakata game ekak gahala passe chill karamu dha?';

  const expectedSinhala = 'අඩො මචන්, අද night එක free ද?එල විදිහකට game එකක් ගහලා පස්සේ chill කරමු ද?'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 121000 });

  console.log('Test Neg_Fun_0002 executed successfully');
}); 


test('Neg_Fun_003:Invalid special characters in input', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'ma@@ma g3dhara y@navaa';

  const expectedSinhala = 'මම ගෙදර යනවා'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 122000 });

  console.log('Test Neg_Fun_0003 executed successfully');
});

test('Neg_Fun_004:Incorrect spelling causes wrong conversion', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mama gedara yannne naha';

  const expectedSinhala = 'මම ගෙදර යන්න්නෙ නැහැ'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 123000 });

  console.log('Test Neg_Fun_0004 executed successfully');
});

test('Neg_Fun_005:Incorrect word order', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'office mama yanavaa';

  const expectedSinhala = 'මම office යනවා'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 124000 });

  console.log('Test Neg_Fun_0005 executed successfully');
});

test('Neg_Fun_006:Chat-style English shorthand', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'Thank u Saho';

  const expectedSinhala = 'Thank you සහො'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 125000 });

  console.log('Test Neg_Fun_0006 executed successfully');
});

test('Neg_Fun_007:Incorrect punctuation in sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mama gedhara yanavaa,';

  const expectedSinhala = 'මම ගෙදර යනවා.'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 126000 });

  console.log('Test Neg_Fun_0007 executed successfully');
});

test('Neg_Fun_008:Very short meaningless input', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'a,';

  const expectedSinhala = 'අ'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 126000 });

  console.log('Test Neg_Fun_0008 executed successfully');
});

test('Neg_Fun_009:Incorrect handling of mixed Singlish with typos, slang, and inconsistent spacing', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'machan mata adha harii nidhimathaii E nisaaa mama office yannne naha,Zoom meeting eka 9.30 AM unath link eka thama awilla naha.';

  const expectedSinhala = 'මචන් මට අද හරී නිදිමතයි එ නිසා මම office යන්නෙ නැහැ,Zoom meeting එක 9.30 AM උනත් link එක තාම අවිල්ල නැහැ.'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 128000 });

  console.log('Test Neg_Fun_0009 executed successfully');
});

test('Neg_Fun_010:Punctuation breaks compound sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'Cake ekata piti.siini.batar oonee.';

  const expectedSinhala = 'Cake එකට පිට්,.සීනි,බටර් ඕනේ.'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 129000 });

  console.log('Test Neg_Fun_0010 executed successfully');
});

test('Neg_Fun_011:WhatsApp instruction', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'WhatsApp msg ekak evanna';

  const expectedSinhala = 'WhatsApp msg එකක් එවන්න'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 130000 });

  console.log('Test Neg_Fun_0011 executed successfully');
});

test('Neg_Fun_012:CPU technical term', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mage PC eke CPU slow venava';

  const expectedSinhala = 'මගේ PC එකේ CPU slow වෙනවා'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 131000 });

  console.log('Test Neg_Fun_0012 executed successfully');
});



