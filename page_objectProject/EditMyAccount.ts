import { type Locator, type Page } from "playwright/test";
export class EditMyAccount { 
    readonly page: Page;
    readonly editFirsName: Locator;
    readonly editLastName: Locator;
    readonly editEmail: Locator;
    readonly editTelephhone: Locator;
    readonly continueButtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.editFirsName = page.locator("xpath=//input[@name='firstname']");
        this.editLastName = page.locator("xpath=//input[@name='lastname']");
        this.editEmail = page.locator("xpath=//input[@name='email']");
        this.editTelephhone = page.locator("xpath=//input[@name='telephone']");
        this.continueButtn = page.locator("xpath=//*[@class='btn btn-primary']");
    }
    async goto() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/edit');
    } 
 }