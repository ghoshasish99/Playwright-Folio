const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login
  await page.goto('http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login');

  // Click text="Create Your E-Shop Account"
  await page.click('text="Create Your E-Shop Account"');
  // assert.equal(page.url(), 'http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/register');

  // Click input[type="text"]
  await page.click('input[type="text"]');

  // Press CapsLock
  await page.press('input[type="text"]', 'CapsLock');

  // Fill input[type="text"]
  await page.fill('input[type="text"]', 'A');

  // Press CapsLock
  await page.press('input[type="text"]', 'CapsLock');

  // Fill input[type="text"]
  await page.fill('//div[normalize-space(.)=\'First name *\']/div/input[normalize-space(@type)=\'text\']', 'Ashish');

  // Click //div[normalize-space(.)='Last name *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Last name *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']', 'G');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Last name *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']', 'Ghosh');

  // Click //div[normalize-space(.)='Email *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'Email *\']/div/input[normalize-space(@type)=\'text\']');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Email *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Email *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Email *\']/div/input[normalize-space(@type)=\'text\']', 'A');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Email *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Email *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Email *\']/div/input[normalize-space(@type)=\'text\']', 'Ashish1@shop.com');

  // Click input[type="password"]
  await page.click('input[type="password"]');

  // Press CapsLock
  await page.press('input[type="password"]', 'CapsLock');

  // Fill input[type="password"]
  await page.fill('input[type="password"]', 'A');

  // Press CapsLock
  await page.press('input[type="password"]', 'CapsLock');

  // Fill input[type="password"]
  await page.fill('input[type="password"]', 'Password1$');

  // Click //div[normalize-space(.)='Confirm password *']/div/input[normalize-space(@type)='password']
  await page.click('//div[normalize-space(.)=\'Confirm password *\']/div/input[normalize-space(@type)=\'password\']');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Confirm password *\']/div/input[normalize-space(@type)=\'password\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Confirm password *']/div/input[normalize-space(@type)='password']
  await page.fill('//div[normalize-space(.)=\'Confirm password *\']/div/input[normalize-space(@type)=\'password\']', 'P');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Confirm password *\']/div/input[normalize-space(@type)=\'password\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Confirm password *']/div/input[normalize-space(@type)='password']
  await page.fill('//div[normalize-space(.)=\'Confirm password *\']/div/input[normalize-space(@type)=\'password\']', 'Password1$');

  // Click text="Create Your E-Shop Account"
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/home' }*/{timeout:10000}),
    page.click('text="Create Your E-Shop Account"')
  ]);

  // Click input[aria-label="Product search"]
  await page.click('input[aria-label="Product search"]');

  // Fill input[aria-label="Product search"]
  await page.fill('input[aria-label="Product search"]', 'Apple iPhone 6s Plus');

  // Click button[aria-label="Search"]
  await page.click('button[aria-label="Search"]');
  // assert.equal(page.url(), 'http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/products/Apple iPhone 6s Plus');

  // Click text="Apple iPhone 6s Plus"
  await page.click('text="Apple iPhone 6s Plus"');
  // assert.equal(page.url(), 'http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/product/a214a774ce2a4e52b8fd85608458b59c');

  // Click text="Add to your basket"
  await page.click('text="Add to your basket"');

  // Click .MuiBadge-root .MuiSvgIcon-root path
  await page.click('.MuiBadge-root .MuiSvgIcon-root path');
  // assert.equal(page.url(), 'http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/basket');

  // Click text="Proceed to checkout"
  await page.click('text="Proceed to checkout"');
  // assert.equal(page.url(), 'http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/checkout');

  // Click input[type="text"]
  await page.click('input[type="text"]');

  // Press CapsLock
  await page.press('input[type="text"]', 'CapsLock');

  // Fill input[type="text"]
  await page.fill('input[type="text"]', 'M');

  // Press CapsLock
  await page.press('input[type="text"]', 'CapsLock');

  // Fill input[type="text"]
  await page.fill('//div[normalize-space(.)=\'Title *\']/div/input[normalize-space(@type)=\'text\']', 'Mr');

  // Click //div[normalize-space(.)='First name *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'First name *\']/div/input[normalize-space(@type)=\'text\']');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'First name *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='First name *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'First name *\']/div/input[normalize-space(@type)=\'text\']', 'A');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'First name *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='First name *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'First name *\']/div/input[normalize-space(@type)=\'text\']', 'Ashish');

  // Click //div[normalize-space(.)='Last name *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']');

  // Fill //div[normalize-space(.)='Last name *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']', 'Ghosh');

  // Click //div[normalize-space(.)='Address line1 *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'Address line1 *\']/div/input[normalize-space(@type)=\'text\']');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Address line1 *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Address line1 *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Address line1 *\']/div/input[normalize-space(@type)=\'text\']', 'A');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Address line1 *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Address line1 *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Address line1 *\']/div/input[normalize-space(@type)=\'text\']', 'Amstelveen');

  // Click //div[normalize-space(.)='Address line2 *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Address line2 *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']', 'A');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Address line2 *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']', '');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Address line2 *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']', 'U');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Address line2 *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']', 'Uilenstede');

  // Click //div[normalize-space(.)='City *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'City *\']/div/input[normalize-space(@type)=\'text\']');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'City *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='City *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'City *\']/div/input[normalize-space(@type)=\'text\']', 'A');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'City *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='City *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'City *\']/div/input[normalize-space(@type)=\'text\']', 'Amsterdam');

  // Click //div[normalize-space(.)='State/Province/Region *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'State/Province/Region *\']/div/input[normalize-space(@type)=\'text\']');

  // Fill //div[normalize-space(.)='State/Province/Region *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'State/Province/Region *\']/div/input[normalize-space(@type)=\'text\']', 'Netherlands');

  // Click //div[normalize-space(.)='ZIP/Postcode *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'ZIP/Postcode *\']/div/input[normalize-space(@type)=\'text\']');

  // Fill //div[normalize-space(.)='ZIP/Postcode *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'ZIP/Postcode *\']/div/input[normalize-space(@type)=\'text\']', '1181');

  // Click text="Next"
  await page.click('text="Next"');

  // Click input[type="text"]
  await page.click('input[type="text"]');

  // Fill input[type="text"]
  await page.fill('//div[normalize-space(.)=\'Card number *\']/div/input[normalize-space(@type)=\'text\']', '1234567890');

  // Click //div[normalize-space(.)='Name on card *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'Name on card *\']/div/input[normalize-space(@type)=\'text\']');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Name on card *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Name on card *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Name on card *\']/div/input[normalize-space(@type)=\'text\']', 'A');

  // Press CapsLock
  await page.press('//div[normalize-space(.)=\'Name on card *\']/div/input[normalize-space(@type)=\'text\']', 'CapsLock');

  // Fill //div[normalize-space(.)='Name on card *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Name on card *\']/div/input[normalize-space(@type)=\'text\']', 'Ashish');

  // Click //div[normalize-space(.)='Expiry month *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'Expiry month *\']/div/input[normalize-space(@type)=\'text\']');

  // Fill //div[normalize-space(.)='Expiry month *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Expiry month *\']/div/input[normalize-space(@type)=\'text\']', '11');

  // Click //div[normalize-space(.)='Expiry year *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'Expiry year *\']/div/input[normalize-space(@type)=\'text\']');

  // Fill //div[normalize-space(.)='Expiry year *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Expiry year *\']/div/input[normalize-space(@type)=\'text\']', '2031');

  // Click //div[normalize-space(.)='Security code *']/div/input[normalize-space(@type)='text']
  await page.click('//div[normalize-space(.)=\'Security code *\']/div/input[normalize-space(@type)=\'text\']');

  // Fill //div[normalize-space(.)='Security code *']/div/input[normalize-space(@type)='text']
  await page.fill('//div[normalize-space(.)=\'Security code *\']/div/input[normalize-space(@type)=\'text\']', '151');

  // Click text="Confirm"
  await page.click('text="Confirm"');

  // ---------------------
  await context.close();
  await browser.close();
})();