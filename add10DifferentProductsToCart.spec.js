describe('Cart Tests - Add 10 Different Products', () => {
    it('should add 10 different trips to cart', () => {
        const productPages = [
            "wakacje-z-yoga-w-kraju-kwitnacej-wisni/", "egipt-el-gouna/", "fuerteventura-sotavento/",
            "grecja-limnos/", "windsurfing-w-karpathos/", "windsurfing-w-lanzarote-costa-teguise/", 
            "wyspy-zielonego-przyladka-sal/", "gran-koscielcow/", "wspinaczka-island-peak/", "wspinaczka-via-ferraty/"
        ];
        const productGenericUrlPart = "https://fakestore.testelka.pl/product/";

        productPages.forEach(product => {
            cy.visit(productGenericUrlPart + product);
            cy.get('#cookie_action_close_header').click();
            cy.get('button[name="add-to-cart"]').click();
        });
        cy.get('.woocommerce-message a').contains('View cart').click();

        cy.get('.cart_item').should('have.length', 10);
        cy.url().should('include', '/cart');
    });
});
