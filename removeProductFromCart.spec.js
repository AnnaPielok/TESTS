describe('Cart Tests - Remove Product from Cart', () => {
    it('should remove product from cart', () => {
        const url = "https://fakestore.testelka.pl/product/fuerteventura-sotavento/";

        cy.visit(url);
        cy.get('#cookie_action_close_header').click();
        cy.get('button[name="add-to-cart"]').click();
        cy.get('.woocommerce-message a').contains('View cart').click();
        cy.get('.remove').click();

        cy.get('.cart-empty').should('be.visible');
        cy.url().should('include', '/cart');
    });
});
