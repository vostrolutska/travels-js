/* eslint-disable no-undef */
import Page from "./page.js";

class SearchPage extends Page {
  get selectCityBtn() {
    return $("//span[@class='select2-selection__arrow']/b");
  }

  get searchCityField() {
    return $("//input[@class='select2-search__field']");
  }

  get selectedItemCity() {
    return $("//ul[@id='select2-tours_city-results']");
  }

  get travellers() {
    return $(
      "//a[@class='dropdown-toggle dropdown-btn travellers waves-effect']"
    );
  }

  get plusBtn() {
    return $("//form[1]//div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/*[1]");
  }

  get searchBtn() {
    return $('//*[@id="tours-search"]/div/div[4]/button');
  }

  get tourDetails() {
    return $(
      "//span[contains(text(), 'Tours Found')] | //strong[contains(text(),'dubai')]"
    );
  }

  async open() {
    await super.open("tours");
  }

  async openMenuCity() {
    await this.selectCityBtn.click();
  }

  async selectItemCity() {
    await this.selectedItemCity.click();
  }

  async openMenuTravellers() {
    await this.travellers.click();
  }

  async add() {
    await this.plusBtn.click();
  }

  async search() {
    await this.searchBtn.click();
  }

  async getDetails() {
    await this.tourDetails.waitForDisplayed();
  }
}

export default new SearchPage();
