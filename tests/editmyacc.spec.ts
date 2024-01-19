import { test, expect} from 'playwright/test';
import { AccountPage } from '../page_objectProject/AccountPage';
import { LoginPage } from "../page_objectProject/LoginPage";
import { EditMyAccount } from '../page_objectProject/EditMyAccount';

test('edit my account info', async ({ page }) => {
    const login = new LoginPage(page); 
    const titleCheck = new AccountPage(page); 
    const accEdit = new EditMyAccount(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login']");
    await login.emailInput.pressSequentially("vickyn2152n+aff@gmail.com");
    await login.passwordInput.pressSequentially('sabaka');
    await login.loginButton.click();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
    await titleCheck.editInfo.click();
    
    await accEdit.editFirsName.fill('Victoria');
    await accEdit.editLastName.fill('Moriarty');
    await accEdit.editEmail.fill('vickyqaemail@mail.com');
    await accEdit.editTelephhone.fill('+333333333333');
    await accEdit.continueButtn.click();

})
