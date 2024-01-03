import { test, expect} from 'playwright/test';
import { LoginPage } from "../page_objectProject/LoginPage";
import { HomePage } from "../page_objectProject/homePage";
import { BlogPage } from "../page_objectProject/BlogPage";

test('login on the login page', async ({ page }) => {
    const login = new LoginPage(page); 
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login']");
    await login.emailInput.pressSequentially("vickyn2152n+aff@gmail.com");
    await login.passwordInput.pressSequentially('sabaka');
    await login.loginButton.click();
})

test('home page navigation and search', async ({ page }) => {
    const getlink = new HomePage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
    await getlink.wishlistButton.click();
    await getlink.compareButton.click();
    await getlink.searchField.pressSequentially('apple');
    await getlink.searchButton.click();
    await getlink.specialHotMenuItem.click();


})

test('check links on blog page', async ({ page }) => {
    const getblogCat = new BlogPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home");
    await getblogCat.latestArticles.isVisible();
    await getblogCat.businessCat.isVisible();
    await getblogCat.electronicsCat.click();
    await getblogCat.technologyCat.click();
    await getblogCat.fashionCat.click();


})
