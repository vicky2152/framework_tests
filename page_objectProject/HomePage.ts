import { type Locator, type Page } from "playwright/test";
export class HomePage {
    readonly page: Page;
    readonly compareButton: Locator;
    readonly wishlistButton: Locator;
    readonly searchField: Locator;
    readonly searchButton: Locator;
    readonly specialHotMenuItem: Locator;


    constructor(page: Page) {
        this.page = page;
        this.compareButton = page.locator("xpath=//div[@id='entry_217823']");
        this.wishlistButton = page.locator("xpath=//div[@id='entry_217824']");
        this.searchField = page.locator("xpath=//input[@autocomplete]");
        this.searchButton = page.locator("xpath=//button[contains(@class, 'type-text')]");
        this.specialHotMenuItem = page.locator("xpath=//span[contains(@class, 'badge mx-1 mz-menu-label-27')]");
    
    }
    async goto() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');


    }


}