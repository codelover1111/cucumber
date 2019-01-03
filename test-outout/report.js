$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/fatemaislam/Documents/workspace/scenarioOutLine/Features/application.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook smoke Scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Test login with valid creditential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-creditential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open Chorme and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-creditential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-creditential;;1"
    },
    {
      "cells": [
        "chamok@gmail.com",
        "password1"
      ],
      "line": 10,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-creditential;;2"
    },
    {
      "cells": [
        "chamok@gmail.com",
        "password2"
      ],
      "line": 11,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-creditential;;3"
    },
    {
      "cells": [
        "chamok@gmail.com",
        "password3"
      ],
      "line": 12,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-creditential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Test login with valid creditential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-creditential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open Chorme and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"chamok@gmail.com\" and valid \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.open_Chorme_and_start_application()"
});
formatter.result({
  "duration": 8202146830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chamok@gmail.com",
      "offset": 15
    },
    {
      "val": "password1",
      "offset": 44
    }
  ],
  "location": "LoginStep.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 570672242,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1683847273,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.application_should_be_closed()"
});
formatter.result({
  "duration": 117885714,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test login with valid creditential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-creditential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open Chorme and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"chamok@gmail.com\" and valid \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.open_Chorme_and_start_application()"
});
formatter.result({
  "duration": 2969030817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chamok@gmail.com",
      "offset": 15
    },
    {
      "val": "password2",
      "offset": 44
    }
  ],
  "location": "LoginStep.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 443212086,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1516187006,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.application_should_be_closed()"
});
formatter.result({
  "duration": 127217138,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test login with valid creditential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-creditential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open Chorme and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"chamok@gmail.com\" and valid \"password3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.open_Chorme_and_start_application()"
});
formatter.result({
  "duration": 2964560244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chamok@gmail.com",
      "offset": 15
    },
    {
      "val": "password3",
      "offset": 44
    }
  ],
  "location": "LoginStep.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 299318856,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1612645751,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.application_should_be_closed()"
});
formatter.result({
  "duration": 108970433,
  "status": "passed"
});
});