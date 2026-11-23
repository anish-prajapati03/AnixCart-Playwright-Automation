
class SignupPage {

    constructor(page) {
        this.page = page;

        this.loginSignupButton = page.getByRole('button', {
            name: 'Login / Sign Up'
        });

        this.signupTab = page.getByRole('button', {
            name: 'Sign Up',
            exact: true
        });

        this.usernameInput = page.getByRole('textbox', {
            name: 'Username'
        });

        this.emailInput = page.getByRole('textbox', {
            name: 'Email (optional)'
        });

        this.passwordInput = page.getByRole('textbox', {
            name: 'Password'
        });

        this.createAccountButton = page.getByRole('button', {
            name: 'Create Account'
        });
    }


    async openSignupPage() {
        await this.page.goto('/');
        await this.loginSignupButton.click();
        await this.signupTab.click();
    }

    async signup(username, email, password) {
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.createAccountButton.click();
    }
}

export default SignupPage;
