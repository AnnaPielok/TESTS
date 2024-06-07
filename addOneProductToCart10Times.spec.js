describe('Cart Tests - Add One Product 10 Times', () => {
    it('should add one product to cart ten times', () => {
        const productUrl = "https://fakestore.testelka.pl/product/wakacje-z-yoga-w-kraju-kwitnacej-wisni/";

        cy.visit(productUrl);
        cy.get('#cookie_action_close_header').click();

        for (let i = 0; i < 10; i++) {
            cy.get('button[name="add-to-cart"]').click();
        }
        cy.get('.woocommerce-message a').contains('View cart').click();

        cy.get('.product-quantity input').should('have.value', '10');
        cy.url().should('include', '/cart');
    });
});
