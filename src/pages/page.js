/* eslint-disable no-undef */
export default class Page {
  constructor() {
    this.title = "Home Page";
  }

  get password() {
    return $("#password");
  }

  get submitBtn() {
    return $("#submitBTN");
  }

  async open(path) {
    await browser.url(path);
  }
}
