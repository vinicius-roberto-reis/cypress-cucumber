import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { scanSourcePage } from "@pages/ScanSourcePage";

Given("que estou logado no site da amazon com o usuario", () => {
  cy.visit("/");
  scanSourcePage.realizarLogin("scan.teste.2019@gmail.com", "Scansource2022");
});

When("quando realizo uma compra via boleto", () => {
  scanSourcePage.realizaCompra("tv 55");
});

Then("a compra e realizada com sucesso", () => {
  cy.contains('h4', 'obrigado').should('be.visible'); //esse codigo vai para o metodo de validacao no pege..
});
