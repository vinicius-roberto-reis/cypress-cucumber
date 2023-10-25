import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {scanSourcePage} from '@pages/ScanSourcePage' 

Given("A web browser is at the saucelabs login page", () => {
  cy.visit(url);
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  scanSourcePage.submitLogin(username,password)
  
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    scanSourcePage.submitLogin(row.username, row.password)

  });
});
Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("The error message {string} is displayed", (errorMessage) => {
  scanSourcePage.elements.errorMessage().should("have.text", errorMessage);
});
