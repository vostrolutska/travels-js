/* eslint-disable no-undef */
import Page from "./page.js";

class LoginPage extends Page {
  get userEmail() {
    return $("#email");
  }

  get loginPassword() {
    return this.password;
  }

  get loginSubmitBtn() {
    return this.submitBtn;
  }

  get errorPopup() {
    return $("//p[contains(text(),'Please check your emal and password')]");
  }

  async open() {
    await super.open("login");
  }

  async submit() {
    await this.submitBtn.click();
  }
}

export default new LoginPage();
