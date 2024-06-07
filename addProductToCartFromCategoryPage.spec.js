describe('Cart Tests - Add Product from Category Page', () => {
    it('should add product to cart from category page', () => {
        const url = "https://fakestore.testelka.pl/product-category/yoga-i-pilates/";
        const productId = "61";

        cy.visit(url);
        cy.get('#cookie_action_close_header').click();
        cy.get(`a[data-product_id="${productId}"]`).click();
        cy.get('.woocommerce-message a').contains('View cart').click();

        cy.get('.product-quantity input').should('have.value', '1');
        cy.url().should('include', '/cart');
    });
});
