import {describe,it} from "../folio/testrunner.spec"
import {LoginPage} from "../pages/login"
import {SearchPage} from "../pages/search"
const baseData = require('../data/base.json')
const accountData = require('../data/account.json')
const searchItem = require('../data/product.json')

describe('Search and Add Functionality works', async()=>{
  it("Should be able to search and add a product",async({page})=>{
    let random = Math.floor(Math.random()*90000) + 10000;
    let email = accountData.create.email.replace('Ashish','Ashish'+random); 
    const loginPage = new LoginPage(page)
    const searchPage = new SearchPage(page)
    await loginPage.navigate(baseData.url)
    await loginPage.alreadyLoggedIn(accountData.create.firstname,accountData.create.lastname,email,accountData.create.password)
    await searchPage.searchProduct(searchItem.searchitem)
    await searchPage.searchSuccessful(searchItem.searchitem)
    await searchPage.addItem(searchItem.searchitem)
    await searchPage.addSuccessful()
  })
})