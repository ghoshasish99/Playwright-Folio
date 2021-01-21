import { expect } from '@playwright/test';
import {Page} from 'playwright'
 
class PaymentPage{

    Page: Page

    constructor (page: Page){
        this.Page = page;
    }

    public async enterAddressDetails(title,fname,lname,addr1,addr2,city,state,zip){
        await this.Page.fill('//div[normalize-space(.)=\'Title *\']/div/input[normalize-space(@type)=\'text\']',title);
        await this.Page.fill('//div[normalize-space(.)=\'First name *\']/div/input[normalize-space(@type)=\'text\']',fname);
        await this.Page.fill('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']',lname);
        await this.Page.fill('//div[normalize-space(.)=\'Address line1 *\']/div/input[normalize-space(@type)=\'text\']',addr1);
        await this.Page.fill('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']',addr2);
        await this.Page.fill('//div[normalize-space(.)=\'City *\']/div/input[normalize-space(@type)=\'text\']',city);
        await this.Page.fill('//div[normalize-space(.)=\'State/Province/Region *\']/div/input[normalize-space(@type)=\'text\']',state);
        await this.Page.fill('//div[normalize-space(.)=\'ZIP/Postcode *\']/div/input[normalize-space(@type)=\'text\']',zip);
        await this.Page.click('text="Next"');
    }

    public async enterPaymentDetails(cardNo,name,expMonth,expYear,securityCode){
        await this.Page.fill('//div[normalize-space(.)=\'Card number *\']/div/input[normalize-space(@type)=\'text\']',cardNo);
        await this.Page.fill('//div[normalize-space(.)=\'Name on card *\']/div/input[normalize-space(@type)=\'text\']',name);
        await this.Page.fill('//div[normalize-space(.)=\'Expiry month *\']/div/input[normalize-space(@type)=\'text\']',expMonth);
        await this.Page.fill('//div[normalize-space(.)=\'Expiry year *\']/div/input[normalize-space(@type)=\'text\']',expYear);
        await this.Page.fill('//div[normalize-space(.)=\'Security code *\']/div/input[normalize-space(@type)=\'text\']',securityCode);
        await this.Page.click('text="Confirm"');
    }

    public async paymentSuccessful(){
        await this.Page.screenshot({path:'report/final.png',fullPage:true});
  }

}

export {PaymentPage}