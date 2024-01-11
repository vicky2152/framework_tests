import { test, expect} from 'playwright/test';
import { Components } from '../page_objectProject/Components';

test('check filters are on the page', async ({ page }) => {
    const gocheck = new Components(page); 
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25']");
    await expect(gocheck.filterGrid).toBeVisible();
    await expect(gocheck.filterList).toBeVisible();
    await expect(gocheck.filterShow).toBeVisible();
    await expect(gocheck.filterSortBy).toBeVisible();
    await expect(gocheck.pageTitle).toBeVisible(); 
});

test('search in filter', async ({ page }) => {
    const filterSearch = new Components(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25']");
    await filterSearch.searchFilter.pressSequentially('watch');
    await filterSearch.colour.click();
});

test('size filter fold', async ({ page }) => {
    const fold = new Components(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25']");
    await fold.filterSizeFold.click();
    await fold.filterDiscFold.click();
    await fold.filterRatingFold.click();
})