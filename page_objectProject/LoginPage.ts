import { type Locator, type Page } from "playwright/test";
export class LoginPage {

    readonly page: Page;
    readonly gotoLoginPage: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly pomLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.gotoLoginPage = page.locator("xpath=//a[@href='https://ecommerce-playground.lambdatest.io/index.php?route=account/login']");
        this.emailInput = page.locator("xpath=//input[@id= 'input-email']");
        this.passwordInput = page.locator("xpath=//input[@id= 'input-password']");
        this.loginButton = page.locator( "xpath=//input[@value='Login']");
        this.pomLink = page.locator("xpath=//a[contains(text(),'Returning Customer')]");
    }
    async goto() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    }
    async pageObjectModel() {
        await this.pomLink.click();
    }
}