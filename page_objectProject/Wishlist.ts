import { type Locator, type Page } from "playwright/test";
export class Wishlist {
    readonly page: Page;
    readonly myWishList: Locator;
    readonly removeItem1: Locator;
    readonly removeItem2: Locator;
    readonly removeItem3: Locator;
    readonly continueButton: Locator;

    readonly imageLabel: Locator;
    readonly productnameLabel: Locator;
    readonly modelLabel: Locator;

    readonly sideBtnAccount: Locator;
    readonly sideBtnAddressbook: Locator;
    readonly sideBtnNotification: Locator;


    constructor(page: Page){
        this.page = page;
        this.myWishList = page.locator("xpath=//*[@class='page-title h3 mb-3']");
        this.removeItem1 = page.locator("xpath=//*[@id='content']/div[1]/table[1]/tbody[1]/tr[1]/td[6]/a[1]/i[1]");
        this.removeItem2 = page.locator("xpath=//div[1]/table[1]/tbody[1]/tr[2]/td[6]/a[1]");
        this.removeItem3 = page.locator("xpath=//tbody[1]/tr[3]/td[6]/a[1]");
        this.continueButton = page.locator("xpath=//*[@class='btn btn-primary']");
        this.imageLabel = page.locator("xpath=//th[contains(@class, 'text-center')]");
        this.productnameLabel = page.locator("xpath=//*[@id='content']/div/table/thead/tr/th[2]");
        this.modelLabel = page.locator("xpath=//th[contains(@class, 'Model')]");
        this.sideBtnAccount = page.locator("xpath=//a[contains(@class, 'list-group-item active')]");
        this.sideBtnAddressbook = page.locator("xpath=//*[@id='column-right']/div/a[4]");
        this.sideBtnNotification = page.locator("xpath=//a[contains(text(),'Notification')]")

    }
 async goto() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist');
    } 

}