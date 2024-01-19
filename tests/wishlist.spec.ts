import { test, expect} from 'playwright/test';
import { AccountPage } from '../page_objectProject/AccountPage';
import { LoginPage } from "../page_objectProject/LoginPage";
import { Wishlist } from '../page_objectProject/wishlist';

test ('edit my wishlist', async ({ page }) => {
    const login = new LoginPage(page); 
    const titleCheck = new AccountPage(page);
    const wishListEdit = new Wishlist(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login']");
    await login.emailInput.pressSequentially("vickyn2152n+aff@gmail.com");
    await login.passwordInput.pressSequentially('sabaka');
    await login.loginButton.click();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist');
    await wishListEdit.myWishList.isVisible();
    await wishListEdit.removeItem1.click();
    await wishListEdit.removeItem2.click();
    await wishListEdit.removeItem3.click();
    await wishListEdit.continueButton.click();

})

test ('view labels of columns', async ({ page }) => {
    const login = new LoginPage(page); 
    const titleCheck = new AccountPage(page);
    const wishListEdit = new Wishlist(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login']");
    await login.emailInput.pressSequentially("vickyn2152n+aff@gmail.com");
    await login.passwordInput.pressSequentially('sabaka');
    await login.loginButton.click();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist');
    await wishListEdit.imageLabel.highlight();
    await wishListEdit.productnameLabel.isVisible();
    await wishListEdit.modelLabel.highlight();

})

test ('check links in the side menu', async ({ page }) => {
    const login = new LoginPage(page); 
    const titleCheck = new AccountPage(page);
    const wishListEdit = new Wishlist(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login']");
    await login.emailInput.pressSequentially("vickyn2152n+aff@gmail.com");
    await login.passwordInput.pressSequentially('sabaka');
    await login.loginButton.click();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist');
    await wishListEdit.sideBtnAccount.click();
    await wishListEdit.sideBtnAddressbook.click();
    await wishListEdit.sideBtnNotification.click();
    





})