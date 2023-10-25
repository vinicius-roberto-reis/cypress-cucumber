Feature: Realizar uma compra no site da Amazon

    Scenario: Realizar uma compra de um item no site da amazon via boleto com sucesso
        Given que estou logado no site da amazon com o usuario
        When  quando realizo uma compra via boleto
        Then  a compra e realizada com sucesso
    