/* eslint-disable no-undef */
// /* eslint-disable no-undef */
import Page from "./page.js";

class SignupPage extends Page {
  get firstName() {
    return $("#firstname");
  }

  get lastName() {
    return $("#last_name");
  }

  get email() {
    return $("#user_email");
  }

  get signupPassword() {
    return this.password;
  }

  get selectCountryBtn() {
    return $('//button[@title="Select Country"]');
  }

  get searchField() {
    return $('//input[@aria-label="Search"]');
  }

  get selectedItem() {
    return $("#bs-select-1-226");
  }

  get signupSubmitBtn() {
    return this.submitBtn;
  }

  async open() {
    await super.open("signup");
  }

  async openMenu() {
    await this.selectCountryBtn.click();
  }

  async selectItem() {
    await this.selectedItem.click();
  }

  async waitToClick() {
    await this.submitBtn.waitForClickable({ reverse: true });
  }
}

export default new SignupPage();
