import { test, expect } from '@playwright/test';

//testcase: Neg_Fun_0001

test('Neg_Fun_0001 Convert a long daily usage paragraph', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput =
    'adha udhaasanayen passe mama office yanna hadhannee, namuth dhaen traffic hari amaru nisaa late venna puluvan. ' +
    'mama bus ekak aran Colombo yanna balan inne. ' +
    'office giyaama meeting ekak thiyennee Teams walin saha passe email ekak yavanna oonee. ' +
    'lunch time eke api colleagues laath ekka kaeema kanna plan karalaa thiyenavaa. ' +
    'heta iiLaGa sathiyee project eka submit karanna thiyennee kiyalaa manager mata kiwwaa.';

  const expectedSinhala =
    'අද උදෑසනෙන් පස්සේ මම office යන්න හදන්නේ, නමුත් දැන් traffic හරි අමාරු නිසා late වෙන්න පුළුවන්. ' +
    'මම bus එකක් අරන් Colombo යන්න බලන් ඉන්නේ. ' +
    'office ගියාම Teams වලින් meeting එකක් තියෙන්නේ සහ පස්සේ email එකක් යවන්න ඕනේ. ' +
    'lunch time එකේ අපි colleagues ලාත් එක්ක කෑම කන්න plan කරලා තියෙනවා. ' +
    'හෙට ඉලග සතියේ project එක submit කරන්න තියෙන්නේ කියලා manager මට කිව්වා.';

  // Locate Singlish input field
  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  // Clear and type input slowly (real-time conversion)
  await inputField.fill('');
  await inputField.type(singlishInput, { delay: 50 });

  // Locate Sinhala output textarea (stable selector)
  const outputField = page.locator('textarea').nth(1);

  // Assert full expected output (contain check to avoid spacing issues)
  await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

  console.log('Test Neg_Fun_0001 executed successfully');

});