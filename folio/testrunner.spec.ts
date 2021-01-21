import {folio} from '@playwright/test'
import {chromium} from 'playwright';

const fixtures = folio.extend()

fixtures.browserOptions.override(async({browserOptions},run) => {
  await run({
     ...browserOptions,
     ...chromium.launch({
       headless : true
     })
    //  ...chromium.connect({
    //    timeout:10000,
    //    wsEndpoint : `ws://<>:4444/playwright/chromium`
    //  })
     
  });
})

const extendedfolio = fixtures.build();
export const it = extendedfolio.it;
export const describe = extendedfolio.describe;