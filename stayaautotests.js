describe('Тестирование авторицазии', function () {
    it('Проверка на позитивный кейс авторизации', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click(3);
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click({force: true});
         cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click({force: true});
         cy.get('.checkout-button').click();
         cy.contains('Оформение заказа');
         cy.get('#billing_first_name').type('Анна');
         cy.get('#billing_last_name').type('Коржавина');
         cy.get('#billing_address_1').type('Комсомольская 15 кв3');
         cy.get('#billing_city').type('Медногорский');
         cy.get('#billing_state').type('Карачаево-Черкесская Республика');
         cy.get('#billing_postcode').type('369281');
         cy.get('#billing_phone').type('89313159276');
         cy.get('#billing_email').type('german@dolnikov.ru');
         cy.get('#place_order').click();
         cy.contains('Оформение заказа');
         cy.get('.woocommerce-notice')

     })
    })