Feature: Search Functionality

Scenario: Searching a tour

Given User is on the Tours page
When User clicks the Search By City dropdown menu
When User types in "<City>" in the search field
When User clicks the selected city in the dropdown menu
When User clicks the Travellers field
When User clicks the Plus button for Adults in the dropdown menu
When User clicks the Search button
Then User should be on the Tours detailed page

Examples:
    | City   | 
    | Dubai  |
    # | New York  |
#     example checking negative results