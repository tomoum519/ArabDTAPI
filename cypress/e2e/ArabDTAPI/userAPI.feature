Feature: customer

Scenario:Create User
Given Create user
Then Check name and phone


Scenario:Create User With List
Given Create user with list
Then Check name and phone with list

Scenario:User Login
Given Create user
Then Check name and phone
When user login
Then Check response succsufuly

Scenario:User Logout
Given user logout
Then Check response succsufuly

Scenario:Get User Data
Given Create user
Then Check name and phone
When Get user 
Then Check name and phone


Scenario:Update User
Given Create user
Then Check name and phone
When update user 
Then Check name and phone

Scenario:Detele User
Given Create user
Then Check name and phone
When Delete user 
Then Check response succsufuly