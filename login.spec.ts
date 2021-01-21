import {describe,it} from "./folio/testrunner.spec"
import {LoginPage} from "./pages/login"
const baseData = require('./data/base.json')
const accountData = require('./data/account.json')

describe('Create User Functionality works', async()=>{
  it("Invalid Login",async({page})=>{
    const loginPage = new LoginPage(page)
    console.log(baseData.url)
    console.log(accountData.email)
    await loginPage.navigate(baseData.url)
    await loginPage.login(accountData.negativeLogin.username,accountData.negativeLogin.password)
    await loginPage.loginUnsuccessful()
    
  })
  it.skip("login",async({page})=>{
    
  })
})