/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pages/login.page.js";

Given("User is on the Login page", async () => {
  await LoginPage.open();
});

When("User types in {string} as invalid email", async (email) => {
  await LoginPage.userEmail.setValue(email);
});

When("User types in {string} as invalid password", async (password) => {
  await LoginPage.loginPassword.setValue(password);
});

When("User clicks on the Login button", async () => {
  await LoginPage.submit();
});

Then("User should see an error pop-up on the Login page", async () => {
  await LoginPage.errorPopup.waitForDisplayed();
});
