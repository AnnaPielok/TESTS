describe('Cart Tests - Change Product Amount', () => {
    it('should change product amount on the cart page', () => {
        const url = "https://fakestore.testelka.pl/product/wspinaczka-island-peak/";
        const quantity = 4;

        cy.visit(url);
        cy.get('#cookie_action_close_header').click();
        cy.get('button[name="add-to-cart"]').click();
        cy.get('.woocommerce-message a').contains('View cart').click();
        cy.get('.product-quantity input').clear().type(quantity);
        cy.get('[name="update_cart"]').click();

        cy.get('.product-quantity input').should('have.value', quantity.toString());
        cy.url().should('include', '/cart');
    });
});
