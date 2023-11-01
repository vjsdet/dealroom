/// <reference types="Cypress" />
class LoginPage {
    get txtEmail() {
        return cy.get("#login_email")
    }
    get txtPassword() {
        return cy.get("#login_password")
    }
    get btnLogin() {
        return cy.get("button[type='submit']");
    }
}
export default LoginPage;