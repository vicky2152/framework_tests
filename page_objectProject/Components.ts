import { type Locator, type Page } from "playwright/test";

export class Components {
    readonly page: Page;
    readonly filterShow: Locator;
    readonly filterGrid: Locator;
    readonly filterSortBy: Locator;
    readonly filterList: Locator;
    readonly pageTitle: Locator;

    readonly searchFilter: Locator;
    readonly colour: Locator;

    readonly filterSizeFold: Locator;
    readonly filterDiscFold: Locator;
    readonly filterRatingFold: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.filterShow = page.locator("xpath=//*[@id='input-limit-212402']");
        this.filterGrid = page.locator("xpath=//*[@id='grid-view']/i[1]");
        this.filterSortBy = page.locator("xpath=//*[@id='input-sort-212403']");
        this.filterList = page.locator("xpath=//*[@id='grid-view']/i[1]");
        this.pageTitle = page.locator("xpath=//h1[contains(@class, 'h4')]");
        this.searchFilter = page.locator("xpath=//*[@id='mz-filter-panel-0-3']/div[1]/input[1]");
        this.colour = page.locator("xpath=/html/body/div[1]/div[6]/div[1]/div[3]/div/div[2]/div[1]/div/div[2]/div[5]/div[2]/div/div[1]/div/label/img");
        this.filterSizeFold = page.locator("xpath=//*[@id='mz-filter-content-0']/div[7]/div[1]/i[1]");
        this.filterDiscFold = page.locator("xpath=//*[@data-target='#mz-filter-panel-0-7']");
        this.filterRatingFold = page.locator("xpath=//*[@data-target='#mz-filter-panel-0-8']")
    }

    async goto() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');
    
    }    
}

