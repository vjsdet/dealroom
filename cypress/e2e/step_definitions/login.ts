import LoginPage from "../pages/login.page";
const login = new LoginPage();

import {
    Then,Given, When
  } from "@badeball/cypress-cucumber-preprocessor";
  const email = Cypress.env("EMAIL");
  const password = Cypress.env("PASSWORD");
  
  Given('I navigate to the application', () => {
    cy.visit("/");
  });
  
  Then('I should be able to view the login page', () => {
    cy.contains("Sign in to your account").should("be.visible")
    cy.url().should("contain","login")
  });
  
  When('I enter email and password', () => {
    login.txtEmail.should("be.visible").type(email);
    login.txtPassword.should("be.visible").type(password);
  });
  
  Then('I click on the signin button', () => {
    login.btnLogin.should("be.visible").click();
  });
  
  Then('I should be login to the application', () => {
    login.txtEmail.should("not.exist");
    cy.url().should("contain","dashboard")
    cy.contains("Let's get Deal-licious!").should("be.visible");
  });
 
  Given('I am logged in to the application',()=>{
    cy.visit("/");
    cy.contains("Sign in to your account").should("be.visible")
    cy.url().should("contain","login");
    login.txtEmail.should("be.visible").type(email);
    login.txtPassword.should("be.visible").type(password);
    login.btnLogin.should("be.visible").click();
    login.txtEmail.should("not.exist");
    cy.url().should("contain","dashboard")
    cy.contains("Let's get Deal-licious!").should("be.visible");
});