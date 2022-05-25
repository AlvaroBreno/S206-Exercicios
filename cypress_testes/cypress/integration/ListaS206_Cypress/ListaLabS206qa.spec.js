/// <reference types="cypress"/>

describe('Cenário de Teste: Testar funcionalidades ', () => {
    it('Caso de Teste: Registrar um alerta com sucesso!', () => { 
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
        cy.get('#enter-name').type("Álvaro Breno teste QA");
        cy.get('.alertbtn').click();
    });
});
