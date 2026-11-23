class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginSignupButton = page.getByRole('button', { name: 'Login / Sign Up' });
        this.loginTab = page.getByRole('button', { name: 'Login' }).nth(1);
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.locator('form').getByRole('button', { name: 'Login' });
    }

    async openLoginPage() {
        await this.page.goto('/');
        await this.loginSignupButton.click();
        await this.loginTab.click();
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

export default LoginPage;
