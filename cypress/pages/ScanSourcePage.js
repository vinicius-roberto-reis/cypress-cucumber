class ScanSourcePage {
  elements = {
    //Elementos Loin
    menu_faca_seu_login: () => cy.contains("faça seu login"),
    emailInput: () => cy.get('input[name="email"]'),
    btn_continuar: () => cy.get("#continue"),
    senhaInput: () => cy.get("#ap_password"),
    btn_fazer_login: () => cy.get("#signInSubmit"),
    btn_agora_nao: () => cy.get("#ap-account-fixup-phone-skip-link"),

    //Elementos Realizar Compra
    txt_pesquisar: () => cy.get("#twotabsearchtextbox"),
    btn_pesquisar: () => cy.get("#nav-search-submit-button"),
    click_item_tenis_nike: () => cy.get('img[src="https://m.media-amazon.com/images/I/61dHJpr85eL._AC_UL320_.jpg"]'),
    click_btn_buy_now: () => cy.get("#buy-now-button"),
    opcao_boleto: () => cy.get('input[name="ppw-instrumentRowSelection"]'),
    btn_usar_essa_forma_pgto: () => cy.get('input.a-button-input[type="submit"][aria-labelledby="orderSummaryPrimaryActionBtn-announce"]'),
    btn_proxima_etapa: () => cy.contains('Próxima etapa'),
    btn_finalizar_pedido: () => cy.get('input[name="placeYourOrder1"]'),
    txt_sucesso_pedido: () => cy.get('h3[data-test="Obrigado,"'),
    
  };

  clickFacaSeuLogin() {
    this.elements.menu_faca_seu_login().click();
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  } 

  clickBtnContinuar() {
    this.elements.btn_continuar().click();
  }

  typeSenha(senha) {
    this.elements.senhaInput().type(senha);
  }

  clickBtnAgoraNao() {
    this.elements.btn_agora_nao().click();
  }

  realizarLogin(email, senha) {
    this.elements.menu_faca_seu_login().click();
    this.elements.emailInput().type(email);
    this.elements.btn_continuar().click();
    this.elements.senhaInput().type(senha);
    this.elements.btn_fazer_login().click();
  }

  realizaCompra(item) {
    this.elements.txt_pesquisar().type(item);
    this.elements.btn_pesquisar.apply().click();
    this.elements.click_item_tenis_nike.apply().first().click();
    this.elements.click_btn_buy_now.apply().click();
    this.elements.opcao_boleto.apply().first().click();
    this.elements.btn_usar_essa_forma_pgto.apply().first().click();
    this.elements.btn_finalizar_pedido.apply().first().click();
  }


}

export const scanSourcePage = new ScanSourcePage();
