class OrangePage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () =>
      cy.get(
        "button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button"
      ),
    menu_dashboard: () => cy.get("a.oxd-main-menu-item.active"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  clickLogin() {
    this.elements.menu_dashboard().should("exist");
  }
}

export const orangePage = new OrangePage();
