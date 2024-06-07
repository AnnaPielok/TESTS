describe('Cart Tests - Modify Amount on Product Page', () => {
    it('should add product to cart and modify the amount on the product page', () => {
        const url = "https://fakestore.testelka.pl/product/fuerteventura-sotavento/";
        const numberOfItems = 9;

        cy.visit(url);
        cy.get('#cookie_action_close_header').click();
        cy.get('input.qty').clear().type(numberOfItems);
        cy.get('button[name="add-to-cart"]').click();
        cy.get('.woocommerce-message a').contains('View cart').click();

        cy.get('.product-quantity input').should('have.value', numberOfItems.toString());
        cy.url().should('include', '/cart');
    });
});
