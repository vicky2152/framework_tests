import { type Locator, type Page } from "playwright/test";
export class OrderHosting {
  readonly page: Page;
  readonly period: Locator;
  readonly infoInput: Locator;
  readonly termsAgree: Locator;
  readonly buttonNext: Locator;

  constructor(page: Page) {
    this.page = page;
    this.period = page.locator("xpath=//input[@id='id_vpsset_3']");
    this.infoInput = page.locator("xpath=//textarea[@name='info']");
    this.termsAgree = page.locator("xpath=//input[@name='tos']");
    this.buttonNext = page.locator("xpath=//input[@class='button large']");
  }
  async goto() {
    await this.page.goto(
      "https://goodhoster.net/en/order/vps-hosting/vm-20g/?dc=5"
    );
  }
}
