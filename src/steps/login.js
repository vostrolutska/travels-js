/* eslint-disable no-undef */
import { Given, When, Then } from '@wdio/cucumber-framework';

Given('User is on the Login page', async () => {
  await browser.setWindowSize(1920, 1080);
  await browser.url("https://phptravels.net/login");
});

When('User clicks on the Signup link', async () => {
  const link = await browser.$('#login a.btn-outline-primary');
  await link.click();
});

Then('User should be on the Signup page', async () => {
  await browser.url("https://phptravels.net/signup");
});