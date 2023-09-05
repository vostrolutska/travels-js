Feature: Login Functionality

Scenario: Trying to login to the user's account with invalid credentials

Given User is on the Login page 
When User types in "<email>" as invalid email
When User types in "<password>" as invalid password
When User clicks on the Login button
Then User should see an error pop-up on the Login page

Examples:
    | email                 | password |
    | annahelman@gmail.com  | Test     |