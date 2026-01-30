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

  await expect(outputField).toContainText(expectedSinhala, { timeout: 133000 });

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

  
  
  // Then check for the expected text
  await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

  console.log('Test Pos_Fun_0002 executed successfully');
});

//testcase : Pos_Fun_0003

test('Pos_Fun_0003: Convert mixed Singlish + English imperative sentence with future intentn', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'heta mama office yanna kalin Documents tika scan karalaa Google Drive ekata upload karanna.';
  const expectedSinhala = 'හෙට මම office යන්න කලින් Documents ටික scan කරලා Google Drive එකට upload කරන්න.';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  await expect(outputField).toContainText(expectedSinhala, { timeout: 15000 });

  console.log('Test Pos_Fun_0003 executed successfully');

});

  //testcase : Pos_Fun_0004

test('Pos_Fun_0004: Long mixed-language input with slang + typo causes incorrect conversion', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha? Please send it before 3pm. Mama office yanna kalin check karanna oonea. Email ekak evanna amaarunam WhatsApp msg ekak dhaapan. Thx!';
  const expectedSinhala = 'මචන් මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද? Please send it before 3pm. මම office යන්න කලින් check කරන්න ඕනේ. Email එකක් එවන්න අමාරුනම් WhatsApp ම්ස්ග් එකක් දාපන්. ථx!';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 10 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  await expect(outputField).not.toBeEmpty({ timeout: 20000   }); 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 20000 });

  console.log('Test Pos_Fun_0004 executed successfully');

});

test('Pos_Fun_0005: Convert sentence with minor typographical errors', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mata adha office yanna onee';
  const expectedSinhala = 'මට අද office යන්න ඔනේ';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

   

  await expect(outputField).toContainText(expectedSinhala, { timeout: 25000 });

  console.log('Test Pos_Fun_0005 executed successfully');

});

test('Pos_Fun_0006: Convert positive future tense sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'api heta enavaa';
  const expectedSinhala = 'අපි හෙට එනවා';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

   

  await expect(outputField).toContainText(expectedSinhala, { timeout: 30000 });

  console.log('Test Pos_Fun_0006 executed successfully');

});

test('Pos_Fun_0007: Convert negative form sentence correctly', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'Oyaa kaala enva kivve naehaene';
  const expectedSinhala = 'ඔයා කාල එන්ව කිව්වෙ නැහැනෙ';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

   

  await expect(outputField).toContainText(expectedSinhala, { timeout: 35000 });

  console.log('Test Pos_Fun_0007 executed successfully');

});

test('Pos_Fun_0008: Convert imperative command sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'nishshabdha vanna';
  const expectedSinhala = 'නිශ්ශබ්ද වන්න';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

   

  await expect(outputField).toContainText(expectedSinhala, { timeout: 35000 });

  console.log('Test Pos_Fun_0008 executed successfully');

});

test('Pos_Fun_0009: Convert religious greeting expression', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'budhu saraNayi!!';
  const expectedSinhala = 'බුදු සරණයි!!';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

   

  await expect(outputField).toContainText(expectedSinhala, { timeout: 40000 });

  console.log('Test Pos_Fun_0009 executed successfully');

});

test('Pos_Fun_0010: Convert polite request sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mata paadama kiyalaa dhenna puLuvandha?';
  const expectedSinhala = 'මට පාඩම කියලා දෙන්න පුළුවන්ද?';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 
   
  await expect(outputField).toContainText(expectedSinhala, { timeout: 45000 });

  console.log('Test Pos_Fun_0010 executed successfully');

}); 

test('Pos_Fun_0011: Convert polite request sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mata adha paadama hariyata therum ganna baeri unaa, eka nisaa karuNaakaralaa poddak vistharakarala kiyala dhenna puluvandha?';
  const expectedSinhala = 'මට අද පාඩම හරියට තෙරුම් ගන්න බැරි උනා, එක නිසා කරුණාකරලා පොඩ්ඩක් විස්තරකරල කියල දෙන්න පුලුවන්ද?';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 
   
  await expect(outputField).toContainText(expectedSinhala, { timeout: 50000 });

  console.log('Test Pos_Fun_0011 executed successfully');

}); 

test('Pos_Fun_0012: Convert polite phrasing request sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?';
  const expectedSinhala = 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 10 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);


   
  await expect(outputField).toContainText(expectedSinhala, { timeout: 55000 });

  console.log('Test Pos_Fun_0012 executed successfully');

}); 

test('Pos_Fun_0013: Convert informal phrasing sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'ehema karapan';
  const expectedSinhala = 'එහෙම කරපන්';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);


   
  await expect(outputField).toContainText(expectedSinhala, { timeout: 134000 });

  console.log('Test Pos_Fun_0013 executed successfully');

}); 

test('Pos_Fun_0014:Convert common daily feeling expression', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mata sathutuyi';
  const expectedSinhala = 'මට සතුටුයි';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  
   
  await expect(outputField).toContainText(expectedSinhala, { timeout: 65000 });

  console.log('Test Pos_Fun_0014 executed successfully');

}); 

test('Pos_Fun_0015:Convert informal daily expression', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'hari kannam';
  const expectedSinhala = 'හරි කන්නම්';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  await expect(outputField).not.toBeEmpty({ timeout: 10000 });
   
  await expect(outputField).toContainText(expectedSinhala, { timeout: 70000 });

  console.log('Test Pos_Fun_0015 executed successfully');

});

test('Pos_Fun_0016:Convert sentence with place name and common English word', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mama bus eken gaallea yanavaa';
  const expectedSinhala = 'මම bus එකෙන් ගාල්ලේ යනවා';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  
   
  await expect(outputField).toContainText(expectedSinhala, { timeout: 75000 });

  console.log('Test Pos_Fun_0016 executed successfully');

});


test('Pos_Fun_0017:Convert a short daily travel sentence with time', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mama 7.30 bus eken  gaalle yanava';
  const expectedSinhala = 'මම 7.30 bus එකෙන්  ගාල්ලෙ යනව';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);


   
  await expect(outputField).toContainText(expectedSinhala, { timeout: 80000 });

  console.log('Test Pos_Fun_0017 executed successfully');

});

test('Pos_Fun_0018:Convert mixed Singlish + English technical sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mata adha Zoom meeting ekak thiyenavaa, eeka 3.30 PM venakota start venavaa kiyala Email ekakin kivvaa';
  const expectedSinhala = 'මට අද Zoom meeting එකක් තියෙනවා, ඒක 3.30 PM වෙනකොට start වෙනවා කියල Email එකකින් කිව්වා';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);


   
  await expect(outputField).toContainText(expectedSinhala, { timeout: 85000 });

  console.log('Test Pos_Fun_0018 executed successfully');

});

test('Pos_Fun_0019:Compound sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mama gedhara yanavaa, namuth vahinavaa';
  const expectedSinhala = 'මම ගෙදර යනවා, නමුත් වහිනවා';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);


   
  await expect(outputField).toContainText(expectedSinhala, { timeout: 90000 });

  console.log('Test Pos_Fun_0019 executed successfully');

});

test('Pos_Fun_0020:Negative sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mama ehema karanne naehae';
  const expectedSinhala = 'මම එහෙම කරන්නේ නැහැ';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 10 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 95000 });

  console.log('Test Pos_Fun_0020 executed successfully');

});

test('Pos_Fun_0021:facebook sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'facebook username eka mokakdha?';
  const expectedSinhala = 'facebook username එක මොකක්ද?';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 100000 });

  console.log('Test Pos_Fun_0021 executed successfully');

});

test('Pos_Fun_0022:Currency format', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'Rs. 2500 gaththaa';
  const expectedSinhala = 'Rs. 2500 ගත්තා';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 105000 });

  console.log('Test Pos_Fun_0022 executed successfully');

});

test('Pos_Fun_0023:Multi-line input', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mama gedhara yanavaa'+ 
'oyaa enavadha';
  const expectedSinhala = 'මම ගෙදර යනවා'+ 
'ඔයා එනවද';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 101000 });

  console.log('Test Pos_Fun_0023 executed successfully');

});

/*
test('Pos_Fun_0024:CPU technical term', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mage PC eke CPU slow venavaa';

  const expectedSinhala = 'මගේ PC එකේ CPU slow වෙනවා'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 60000 });

  console.log('Test Pos_Fun_0024 executed successfully');

});  */

test('Pos_Fun_0024:CConvert simple sentence with common English word', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'Mama campus yanavaa';

  const expectedSinhala = 'මම campus යනවා'; 


  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

 

  await expect(outputField).toContainText(expectedSinhala, { timeout: 115000 });

  console.log('Test Pos_Fun_0024 executed successfully');
}); 
