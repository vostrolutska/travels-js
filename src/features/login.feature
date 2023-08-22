Feature: Sign up and Login functionality

Scenario: Navigating to the Sign Up page

Given User is on the Login page 
When User clicks on the Signup link
Then User should be on the Signup page

# Scenario: User successfully registers on the site
# 	Given The Signup modal window is opened
# 	When User clicks the First Name field
# 	And User types in "Anna" in the First Name field
# 	And User clicks the Last Name field
# 	And User types in "Helman" in the Last Name field
# 	And User clicks the Phone field
# 	And User types in "(213) 370-4914" in the Phone field
# 	And User clicks the Email field
# 	And User types in "annahelman7@gmail.com" in the Email field
# 	And User clicks the Password field
# 	And User types in "Password@1234" in the Password field
# 	And User checks the I'm not a robot checkbox
# 	And User clicks the Signup button
# 	Then User waits for the loader ends running
# 	And The Login modal window opens
# 	And User sees a toast about successful registration

# Scenario: User logs in to the account with the valid email and password
# 	Given The Login modal window is opened
# 	When User clicks the Email field
# 	And User types in "annahelman7@gmail.com" in the Email field
# 	And User clicks the Password field
# 	And User types in "Password@1234" in the Password field
# 	And User clicks the Login button
# 	Then User waits for the loader ends running
# 	And The Dashboard page opens
# 	And User sees the welcome message
