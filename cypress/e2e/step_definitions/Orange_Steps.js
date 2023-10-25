import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {orangePage} from '@pages/OrangePage' 


Given("que o usuário deseja se logar", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

When("ele informar os dados válidos", () => {
  //cy.get('input[name="username"]').type('Admin');
  //cy.get('input[name="password"]').type('admin123');
  //cy.get('button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();
  orangePage.submitLogin('Admin','admin123')
});

Then("deve acessar o site com sucesso", () => {
  //cy.get('div[data-test="class_user"]').should("be.visible");
  cy.get('a.oxd-main-menu-item.active').should('exist');
});
