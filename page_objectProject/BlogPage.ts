import { type Locator, type Page } from "playwright/test";
export class BlogPage {
    readonly page: Page;
    readonly businessCat: Locator;
    readonly electronicsCat: Locator;
    readonly technologyCat: Locator;
    readonly fashionCat: Locator;
    readonly latestArticles: Locator;

    constructor(page: Page) {
        this.page = page;
        this.latestArticles = page.locator("xpath=//*[@id='mz-article-listing-76210960']/div/h3[1]");
        this.businessCat = page.locator("xpath=//*[@id='entry_210963']/div/a[1]");
        this.electronicsCat = page.locator("xpath=//*[@id='entry_210963']/div/a[2]");
        this.technologyCat = page.locator("xpath=//*[@id='entry_210946']/div/a[2]");
        this.fashionCat = page.locator("xpath=//*[@id='entry_210946']/div/a[3]");
    
    }
    async goto() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home')
    }
    
}