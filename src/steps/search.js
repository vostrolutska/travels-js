/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import SearchPage from "../pages/search.page.js";

Given("User is on the Tours page", async () => {
  await SearchPage.open();
});

When("User clicks the Search By City dropdown menu", async () => {
  await SearchPage.openMenuCity();
});

When("User types in {string} in the search field", async (City) => {
  await SearchPage.searchCityField.setValue(City);
  await browser.pause(3000);
});

When("User clicks the selected city in the dropdown menu", async () => {
  await SearchPage.selectItemCity();
});

When("User clicks the Travellers field", async () => {
  await SearchPage.openMenuTravellers();
});

When(
  "User clicks the Plus button for Adults in the dropdown menu",
  async () => {
    await SearchPage.add();
  }
);

When("User clicks the Search button", async () => {
  await SearchPage.search();
});

Then("User should be on the Tours detailed page", async () => {
  try {
    await SearchPage.getDetails();
  } catch (error) {
    return "no such element";
  }
});
