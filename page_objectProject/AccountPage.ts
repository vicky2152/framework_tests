import { type Locator, type Page } from "playwright/test";
export class AccountPage {
    readonly page: Page;
    readonly myAcctitle: Locator;
    readonly editInfo: Locator;


    constructor(page: Page){
        this.page = page;
        this.myAcctitle = page.locator("xpath=//*[@id='content']/div[1]/h2[1]");
        this.editInfo = page.locator("xpath=//*[@class='fas fa-2x mb-1 fa-user-edit']");

    }

    async goto() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
    
    } 
}
