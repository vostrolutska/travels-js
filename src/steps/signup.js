/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import SignupPage from "../pages/signup.page.js";

Given("User is on the Signup page", async () => {
  await SignupPage.open();
});

When("User types in {string} as first name", async (firstName) => {
  await SignupPage.firstName.setValue(firstName);
});

When("User types in {string} as last name", async (lastName) => {
  await SignupPage.lastName.setValue(lastName);
});

When("User clicks the Select Country dropdown menu", async () => {
  await SignupPage.openMenu();
});

When("User types in {string} in the Country search field", async (country) => {
  await SignupPage.searchField.setValue(country);
});

When("User clicks the selected country", async () => {
  await SignupPage.selectItem();
});

When("User types in {string} as email", async (email) => {
  await SignupPage.email.setValue(email);
});

When("User types in {string} as password", async (password) => {
  await SignupPage.signupPassword.setValue(password);
});

When("User tries to click on the Signup button", async () => {
  await SignupPage.waitToClick();
});

Then("Signup button should be disabled", async () => {
  const signupButton = await SignupPage.submitBtn;
  const isDisabled = await signupButton.getAttribute("disabled");
  expect(isDisabled).toBe("true");
});
