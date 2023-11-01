/// <reference types="Cypress" />
class DealPage {
    get lblTitle() {
        return cy.get(".ant-drawer-title");
    }
    get btnNewDealRoom() {
        return cy.contains("New Deal Room");
    }
    get txtPassword() {
        return cy.get("#login_password")
    }
    get txtDealRoomName() {
        return cy.get("#add_deal_room_form_name")
    }
    get txtDealName() {
        return cy.get("#add_deal_room_form_deal_name")
    }
    get ddlDealStage() {
        return cy.get("#add_deal_room_form .ant-select-selector")
    }
    get txtDealValue() {
        return cy.get("#add_deal_room_form_deal_value")
    }
    get dpCloseDate() {
        return cy.get("#add_deal_room_form_deal_closeDate")
    }
    get txtCompany() {
        return cy.get("#add_deal_room_form_companyId")
    }
    get btnCreate() {
        return cy.get("button[type='submit']").contains("Create");
    }
    get btnUpdate() {
        return cy.get("button[type='submit']").contains("Update");
    }
    btnEdit(dealName) {
        return cy.get("h2[class*='dealRoomCard_dealName']").contains(dealName).parent().parent().parent().find("div[class*='dealRoomCard_footer'] .anticon.anticon-edit")
    }
    dvDealCard(dealName) {
        return cy.get("h2[class*='dealRoomCard_dealName']").contains(dealName).parent().parent().parent();
    }
}
export default DealPage;