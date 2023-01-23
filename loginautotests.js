describe('Тестирование авторицазии', function () {
    it('Проверка на позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon')
     })

 
 it('Проверка логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.contains('Восстановите пароль');
    cy.get('#mailForgot').type('anya@korx.ru');
    cy.get('#restoreEmailButton').click();
    cy.contains('Успешно отправили пароль на e-mail');
     cy.get('#exitMessageButton > .exitIcon')
 })


it('Проверка на негативный кейс авторизации - неправильный пароль:', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio2');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon')
 })  

 it('Проверка на негативный кейс авторизации - неправильный логин:', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov2.ru');
    cy.get('#pass').type('iLoveqastudio2');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon')
 })  

 it('Проверка на негативный кейс валидации - без @:', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio');
    cy.get('#loginButton').click();
    cy.contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon')
 }) 

})