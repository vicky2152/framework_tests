import { test, expect} from 'playwright/test';
import { AccountPage } from '../page_objectProject/AccountPage';
import { LoginPage } from "../page_objectProject/LoginPage";

test ('check title is there', async ({ page }) => {
    const login = new LoginPage(page); 
    const titleCheck = new AccountPage(page); 
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login']");
    await login.emailInput.pressSequentially("vickyn2152n+aff@gmail.com");
    await login.passwordInput.pressSequentially('sabaka');
    await login.loginButton.click();
    
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
    await titleCheck.myAcctitle.isVisible();
    await titleCheck.editInfo.click();
})



