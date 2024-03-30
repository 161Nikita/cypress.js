describe('Покупка аватара', function () {                               // название набора тестов
   it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/'); // переходим на сайт https://pokemonbattle.me/
        cy.wait (3000);
        cy.get(':nth-child(1) > .auth__input').type ('USER_LOGIN'); // вести верный логин
        cy.get('#password').type ('USER_PASSWORD'); // вести верный пароль
        cy.get('.auth__button').click(); // нажать на кнопку войти
        cy.wait (2000);
        cy.contains('Покемоны').should('be.visible'); // успешная авторизация, есть надпись "Покемоны"
        cy.get('.header__btns > [href="/shop"]').click(); // нажать кнопку магазин
        cy.get('.available > button').first().click(); // купить первый доступный аватар
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // ввести 
        //номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // ввести срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввести код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Nikita'); // ввести имя
        cy.wait (2000);
        cy.get('.pay-btn').click(); // нажать кнопку оплатить
        cy.get('.pay-btn').click(); // нажать кнопку оплатить второй раз т.к. с первого не всегда нажимается
        cy.get('#cardnumber').type('56456'); // ввести код подтверждения
        cy.wait (2000);
        cy.get('.payment__submit-button').click(); // нажать кнопку отправить
        cy.contains('Покупка прошла успешно').should('be.visible'); // экран успешной покупки
    });
});