import {describe,it} from "./folio/testrunner.spec"
import {LoginPage} from "./pages/login"
const baseData = require('./data/base.json')
const accountData = require('./data/account.json')

describe('Create User Functionality works', async()=>{
  it("Should validate Invalid Login",async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.navigate(baseData.url)
    await loginPage.login(accountData.negativeLogin.username,accountData.negativeLogin.password)
    await loginPage.loginUnsuccessful()
  })
  it("Should validate User Creation",async({page})=>{
    const loginPage = new LoginPage(page)
    let random = Math.floor(Math.random()*90000) + 10000;
    let email = accountData.create.email.replace('Ashish','Ashish'+random); 
    await loginPage.navigate(baseData.url)
    accountData.create.email
    await loginPage.createUser(accountData.create.firstname,accountData.create.lastname,email,accountData.create.password)
    await loginPage.createUserSuccessful()
  })
})