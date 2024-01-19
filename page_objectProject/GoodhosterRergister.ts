import { type Locator, type Page } from "playwright/test";
export class GoodhosterRegister {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly country: Locator;
  readonly zipcode: Locator;
  readonly state: Locator;
  readonly address: Locator;
  readonly phone: Locator;
  readonly question: Locator;
  readonly answer: Locator;
  readonly regButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("xpath=//input[@id='id_first_name']");
    this.lastName = page.locator("xpath=//input[@id='id_last_name']");
    this.email = page.locator("xpath=//input[@id='id_email']");
    this.country = page.locator(
      "xpath=//span[@class='select2-selection select2-selection--single']"
    );
    this.zipcode = page.locator("xpath=//input[@id='id_postal_code']");
    this.state = page.locator("xpath=//input[@id='id_state']");
    this.address = page.locator("xpath=//input[@id='id_address1']");
    this.phone = page.locator("xpath=//input[@id='id_phone']");
    this.question = page.locator("xpath=//select[@id='id_question']");
    this.answer = page.locator("xpath=//input[@id='id_question_answer']");
    this.regButton = page.locator(
      "xpath=//input[@class='button success no-margin']"
    );
  }
  async goto() {
    await this.page.goto("https://goodhoster.net/en/account/register/");
  }
}
