// api.spec.js

describe('Testes de API', () => {
    it('Deve fazer uma solicitação GET ao endpoint do ViaCEP', () => {
      cy.request('https://viacep.com.br/ws/03275090/json')
        .then((response) => {
          // Verifique se a solicitação foi bem-sucedida (status 200)
          expect(response.status).to.equal(200);
  
          // Verifique o corpo da resposta
          expect(response.body).to.have.property('cep', '03275090');
          //expect(response.body).to.have.property('logradouro', 'Rua Luís Asson');
          //expect(response.body).to.have.property('bairro', 'Vila Tolstoi');
          // Adicione mais verificações conforme necessário
        });
    });
  });
  