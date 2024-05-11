
describe('Автотесты на форму логина', function () {
   it('Проверка авторизации с верным логином и паролем', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type ('german@dlnik.ru'); // ввести верный логин
        cy.get('#pass').type ('Loveqastudi'); // ввести верный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // кнопка крестик видна

    })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#forgotEmailButton').click(); // нажать кнопку забыли пароль
        cy.get('#mailForgot').type ('german@dlnik.ru'); // ввести любую почту
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // текст совпадает
        cy.get('#exitRestoreButton > .exitIcon').should ('be.visible'); // кнопка крестик видна

    })

   	it('Проверка авторизации с верным логином и неверным паролем', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type ('german@dlnik.ru'); // ввести верный логин
        cy.get('#pass').type ('Loveqastudi'); // ввести неверный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // кнопка крестик видна

    })

    it('Проверка авторизации с неверным логином и верным паролем', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type ('german@dlnik.ru'); // ввести неверный логин
        cy.get('#pass').type ('Loveqastudi'); // ввести верный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // кнопка крестик видна

    })

    it('Проверка валидации без @ в логине', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type ('german@dlnik.ru'); // ввести неверный логин
        cy.get('#pass').type ('Loveqastudi'); // ввести верный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает

    })

    it('Проверка приведения к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type ('german@dlnik.ru'); // ввести логин с разным регистром
        cy.get('#pass').type ('Loveqastudi'); // ввести верный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // кнопка крестик видна
    })
})
