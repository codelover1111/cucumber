Feature: Test Facebook smoke Scenario
Scenario Outline: Test login with valid creditential
Given open Chorme and start application
When I enter valid "<username>" and valid "<password>"
Then user should be able to login successfully
Then application should be closed

Examples: 
  |    username     |     password   |
  |chamok@gmail.com |    password1   |
  |chamok@gmail.com |    password2   |
  |chamok@gmail.com |    password3   |