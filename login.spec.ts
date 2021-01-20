import {describe,it} from "./folio/testrunner.spec"

it("login",async({page})=>{
  await page.goto("http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/");
 // await page.screenshot({ path: 'page.png', fullPage: true });
})