import {Page} from 'playwright'
import {expect} from '@playwright/test'
 
class LoginPage{

    Page: Page

    constructor (page: Page){
        this.Page = page;
    }

    public async navigate(url){
        await this.Page.goto(url);
    }

    public async login(username,password){
         await this.Page.fill('#email',username);
         await this.Page.fill('#password',password);
         await this.Page.click('text="Log In"')
    }

    public async createUser(fname,lname,email,password){
        await this.Page.click('text="Create Your E-Shop Account"');
        await this.Page.fill('//div[normalize-space(.)=\'First name *\']/div/input[normalize-space(@type)=\'text\']',fname);
        await this.Page.fill('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']',lname);
        await this.Page.fill('//div[normalize-space(.)=\'Email *\']/div/input[normalize-space(@type)=\'text\']',email);
        await this.Page.fill('input[type="password"]',password);
        await this.Page.fill('//div[normalize-space(.)=\'Confirm password *\']/div/input[normalize-space(@type)=\'password\']',password);
        await Promise.all([
            this.Page.waitForNavigation({timeout:10000}),
            this.Page.click('text="Create Your E-Shop Account"')
          ]);
   }

    public async loginUnsuccessful(){
        await this.Page.waitForSelector('[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]')
  }

    public async createUserSuccessful(){
        await this.Page.waitForSelector('input[aria-label="Product search"]')
  }

}

export {LoginPage}