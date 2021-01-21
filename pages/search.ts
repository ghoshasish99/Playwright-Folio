import {Page} from 'playwright'
 
class SearchPage{

    Page: Page

    constructor (page: Page){
        this.Page = page;
    }

    public async searchProduct(item){
        await this.Page.fill('input[aria-label="Product search"]',item);
        await this.Page.click('button[aria-label="Search"]');
    }

    public async searchSuccessful(item){
         await this.Page.$('text="'+item+'"')
    }

    public async addItem(item){
        await this.Page.click('text="'+item+'"');
        await this.Page.click('text="Add to your basket"');
        
   }
    public async addSuccessful(){
        await this.Page.click('.MuiBadge-root .MuiSvgIcon-root path');
        await this.Page.click('text="Proceed to checkout"')
  }

}

export {SearchPage}