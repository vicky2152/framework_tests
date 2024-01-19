import { test, expect } from "playwright/test";
import { OrderHosting } from "../page_objectProject/OrderHosting";
import { GoodhosterRegister } from "../page_objectProject/GoodhosterRergister";
import { GoodhosterHome } from "../page_objectProject/GoodhosterHome";

test("order hosting service", async ({ page }) => {
  const order = new OrderHosting(page);
  await page.goto("https://goodhoster.net/en/order/vps-hosting/vm-20g/?dc=5");
  await order.period.click();
  await order.infoInput.pressSequentially("I like goodhoster");
  await order.termsAgree.click();
  await order.buttonNext.click();
});

test("gh register", async ({ page }) => {
  const register = new GoodhosterRegister(page);
  await page.goto("https://goodhoster.net/en/account/register/");
  await register.firstName.pressSequentially("Draco");
  await register.lastName.pressSequentially("Malfoy");
  await register.email.pressSequentially("vickyn2152n+draco@gmail.com");
  await register.country.click();
  //ось тут проблема, не вийшло вибрати країну зі списку, довго мучилась і нічого не придумала -максимум це не ламає тест, але і не вибирає. Як це зробити?

  await register.zipcode.pressSequentially("345678");
  await register.state.pressSequentially("Vinnytsia");
  await register.address.pressSequentially("Baker street 9");
  await register.phone.pressSequentially("+380975644545");
  await register.question.pressSequentially("Maiden name of your mother?");
  await register.answer.pressSequentially("Evil");
  await register.regButton.click();
});

test("view homepage", async ({ page }) => {
  const viewHome = new GoodhosterHome(page);
  await page.goto("https://goodhoster.net/en/");
  await viewHome.webHosting.click();
  await viewHome.vps.click();
  await viewHome.usefulTips.isVisible();
  await viewHome.tipTwo.click();
  await viewHome.tipThree.click();
});
