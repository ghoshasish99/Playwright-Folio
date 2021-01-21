import {describe,it} from "./folio/testrunner.spec"
import {LoginPage} from "./pages/login"
const baseData = require('./data/base.json')
const accountData = require('./data/account.json')

describe('Create User Functionality works', async()=>{
  it("Invalid Login",async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.navigate(baseData.url)
    await page.screenshot({ path: 'report/page1.png', fullPage: true });
    await loginPage.login(accountData.negativeLogin.username,accountData.negativeLogin.password)
    await page.screenshot({ path: 'report/page2.png', fullPage: true });
    await loginPage.loginUnsuccessful()
    await page.screenshot({ path: 'report/page3.png', fullPage: true });
  })
  it.skip("login",async({page})=>{
    
  })
})