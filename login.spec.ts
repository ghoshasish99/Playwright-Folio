import {describe,it} from "./folio/testrunner.spec"
import {LoginPage} from "./pages/login"
const baseData = require('./data/base.json')
const accountData = require('./data/base.json')
const paymentData = require('./data/base.json')
const productData = require('./data/base.json')

describe('Create User Functionality works', async()=>{
  it("Invalid Login",async({page})=>{
    const loginPage = new LoginPage(page)

    await loginPage.navigate(baseData.url)
    await loginPage.login(accountData.email,accountData.password)
    await loginPage.loginUnsuccessful()
    
  })
  it.skip("login",async({page})=>{
    
  })
})