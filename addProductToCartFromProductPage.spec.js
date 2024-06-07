describe('Cart Tests - Add Product from Product Page', () => {
    it('should add product to cart from the product page', () => {
        const productUrl = "https://fakestore.testelka.pl/product/windsurfing-w-karpathos/";

        cy.visit(productUrl);
        cy.get('.product_title').invoke('text').as('productName');
        cy.get('#cookie_action_close_header').click();

        cy.get('button[name="add-to-cart"]').click();
        cy.get('.woocommerce-message a').contains('View cart').click();

        cy.get('@productName').then((productName) => {
            cy.get('.product-name a').should('contain', productName);
        });
        cy.get('.product-quantity input').should('have.value', '1');
        cy.url().should('include', '/cart');
    });
});
