
class CartPage {
    constructor(page) {
        this.page = page;

        // Navigation cart button (example: 🛒 Cart 4)
        this.cartButton = page.getByRole('button', {
            name: /🛒 Cart \d+/
        });

        // Checkout
        this.proceedToCheckout = page.getByRole('button', {
            name: 'Proceed to Checkout'
        });

        // Address
        this.addressInput = page.getByRole('textbox', {
            name: 'House no., Street, City,'
        });

        // Payment methods
        this.codButton = page.getByRole('button', {
            name: /Cash on Delivery/
        });

        this.upiButton = page.getByRole('button', {
            name: /UPI Pay via any UPI app/
        });

        // UPI applications
        this.googlePay = page.getByRole('button', {
            name: /Google Pay/
        });

        this.phonePe = page.getByRole('button', {
            name: /PhonePe/
        });

        this.paytm = page.getByRole('button', {
            name: /Paytm/
        });

        this.bhim = page.getByRole('button', {
            name: /BHIM UPI/
        });

        // UPI ID
        this.upiIdInput = page.getByRole('textbox', {
            name: 'Enter UPI ID (e.g. name@upi)'
        });

        // Place order and confirmation
        this.placeOrderButton = page.getByRole('button', {
            name: /Place Order/
        });

        this.orderConfirmation = page.getByRole('heading', {
            name: 'Order Placed! 🎉'
        });
    }

    // Open cart
    async openCart() {
        await this.cartButton.click();
    }

    // Proceed to checkout
    async checkout() {
        await this.proceedToCheckout.click();
    }

    // Enter delivery address
    async enterAddress(address) {
        await this.addressInput.fill(address);
    }

    // Select Cash on Delivery
    async selectCOD() {
        await this.codButton.click();
    }

    // Select UPI payment
    async selectUPI() {
        await this.upiButton.click();
    }

    // Select UPI application
    async selectUPIApp(app) {
        const apps = {
            googlePay: this.googlePay,
            phonePe: this.phonePe,
            paytm: this.paytm,
            bhim: this.bhim
        };

        const selectedApp = apps[app];

        if (!selectedApp) {
            throw new Error(`Invalid UPI application: ${app}`);
        }

        await selectedApp.click();
    }

    // Enter UPI ID
    async enterUPIId(upiId) {
        await this.upiIdInput.fill(upiId);
    }

    // Place order
    async placeOrder() {
        await this.placeOrderButton.click();
    }
}

export default CartPage;
