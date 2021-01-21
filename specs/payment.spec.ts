import {describe,it} from "../folio/testrunner.spec"
import {LoginPage} from "../pages/login"
import {SearchPage} from "../pages/search"
import {PaymentPage} from "../pages/payment"
const baseData = require('../data/base.json')
const accountData = require('../data/account.json')
const searchItem = require('../data/product.json')
const address = require('../data/address.json')
const payment = require('../data/payment.json')

describe('Functionality Functionality works', async()=>{
  it("Should be able to purchase a product",async({page})=>{
    let random = Math.floor(Math.random()*90000) + 10000;
    let email = accountData.create.email.replace('Ashish','Ashish'+random); 
    const loginPage = new LoginPage(page)
    const searchPage = new SearchPage(page)
    const paymentPage = new PaymentPage(page)
    await loginPage.navigate(baseData.url)
    await loginPage.alreadyLoggedIn(accountData.create.firstname,accountData.create.lastname,email,accountData.create.password)
    await searchPage.searchProduct(searchItem.searchitem)
    await searchPage.searchSuccessful(searchItem.searchitem)
    await searchPage.addItem(searchItem.searchitem)
    await searchPage.addSuccessful()
    await paymentPage.enterAddressDetails(address.title,address.firstname,address.lastname,address.addr1,address.addr2,address.city,address.state,address.zip)
    await paymentPage.enterPaymentDetails(payment.cardnumber,payment.nameOnCard,payment.expiryMonth,payment.expiryYear,payment.securityCode)
    await paymentPage.paymentSuccessful()
  })
})