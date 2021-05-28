///   <reference types="cypress"/>



context('Cadastro', () => {
    it('cadastro de usuario no site', () => {
        cy.visit('Register.html')


      cy.get('input[placeholder="First Name"]').type('Aluno')
      cy.get('input[placeholder="Last Name"]').type('Agilizei')
      cy.get('input[ng-model="EmailAdress"]').type('aluno@email.com')
      cy.get('input[placeholder="Phone"]').type('123456789')


      cy.get('input[placeholder="Phone"]').type('123456789')




      





    });
});