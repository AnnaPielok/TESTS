describe('Checkout - Order with New Account Creation', () => {
    const productUrl = "https://fakestore.testelka.pl/product/fuerteventura-sotavento/";
    const userData = {
        firstName: "Joanna",
        lastName: "Testowa",
        country: "Polska",
        address: "ul. Wrocławska 25",
        postcode: "00-001",
        city: "Warsaw",
        email: "testowajoanna@test.pl",
        phone: "555-666-777",
        cardNumber: "4242424242424242",
        cardExpiryDate: "10/30",
        cardCvc: "123",
        password: "Testowe_haslo_123"
    };

    beforeEach(() => {
        cy.visit(productUrl);
        cy.get('button[name="add-to-cart"]').click();
        cy.get('.woocommerce-message a').contains('Zobacz koszyk').click();
        cy.get('.checkout-button').click();
    });

    it('should create an order with new account creation', () => {
        cy.get('#billing_first_name').type(userData.firstName);
        cy.get('#billing_last_name').type(userData.lastName);
        cy.get('#billing_country').select(userData.country);
        cy.get('#billing_address_1').type(userData.address);
        cy.get('#billing_postcode').type(userData.postcode);
        cy.get('#billing_city').type(userData.city);
        cy.get('#billing_email').type(userData.email);
        cy.get('#billing_phone').type(userData.phone);

        cy.get('#account_password').type(userData.password);

        // Payment details
        cy.iframe('.stripe-card-frame iframe').find('[name="cardnumber"]').type(userData.cardNumber);
        cy.iframe('.stripe-card-frame iframe').find('[name="exp-date"]').type(userData.cardExpiryDate);
        cy.iframe('.stripe-card-frame iframe').find('[name="cvc"]').type(userData.cardCvc);

        cy.get('#terms').check();
        cy.get('#place_order').click();

        cy.get('.woocommerce-order').should('be.visible');
    });

    afterEach(() => {
        // Delete the created account
        cy.visit('/my-account');
        cy.get('.delete-account-link').click();
        cy.get('.confirm-delete-account').click();
    });
});
