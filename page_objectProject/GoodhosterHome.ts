import { type Locator, type Page } from "playwright/test";
export class GoodhosterHome {
  readonly page: Page;
  readonly webHosting: Locator;
  readonly vps: Locator;
  readonly usefulTips: Locator;
  readonly tipTwo: Locator;
  readonly tipThree: Locator;

  constructor(page: Page) {
    this.page = page;
    this.webHosting = page.locator("xpath=//a[@id='shared_hosting-label']");
    this.vps = page.locator("xpath=//a[@id='vps_hosting-label']");
    this.usefulTips = page.locator(
      "xpath=//h2[contains(text(),'Useful tips')]"
    );
    this.tipTwo = page.locator(
      "xpath=//*[@id='owl-tips']/div[2]/div[1]/div[2]/span[1]"
    );
    this.tipThree = page.locator(
      "xpath=//*[@id='owl-tips']/div[2]/div[1]/div[3]/span[1]"
    );
  }
  async goto() {
    await this.page.goto("https://goodhoster.net/en/");
  }
}
