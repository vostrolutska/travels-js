Feature: Signup Functionality

Scenario: Trying to sign up with non-filled all required fields

Given User is on the Signup page
When User types in "<firstName>" as first name
When User types in "<lastName>" as last name
When User clicks the Select Country dropdown menu
When User types in "<country>" in the Country search field
When User clicks the selected country
When User types in "<email>" as email
When User types in "<password>" as password
When User tries to click on the Signup button
Then Signup button should be disabled

Examples:
    | firstName | lastName | country        | email                 | password |
    | Anna      | Helman   | United States  | annahelman7@gmail.com | Test1234 |