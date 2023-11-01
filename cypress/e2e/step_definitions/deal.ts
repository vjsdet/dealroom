import DealPage from "../pages/deal.page";
const deal = new DealPage();

import {
  Then,When
} from "@badeball/cypress-cucumber-preprocessor";

function createDealRoom(datatable)
{
  const rows = datatable.hashes();
  rows.forEach(row => {
    const dealInfo: any = {};
    if (row.dealroomname) {
      dealInfo.dealroomname = row.dealroomname + Date.now();
      deal.txtDealRoomName.type(dealInfo.dealroomname);
    }

    if (row.dealname) {
      dealInfo.dealname = row.dealname + Date.now();
      deal.txtDealName.clear().type(dealInfo.dealname);
    }

    if (row.dealstage) {
      deal.ddlDealStage.eq(0).click();
      cy.get("div[title='" + row.dealstage + "']").click();
      dealInfo.dealstage = row.dealstage;
    }

    if (row.dealvalue) {
      deal.txtDealValue.clear().type(row.dealvalue);
      dealInfo.dealvalue = row.dealvalue;
    }

    if (row.closedate) {
      deal.dpCloseDate.click();
      cy.focused().clear().type(row.closedate + "{enter}");
      dealInfo.closedate = row.closedate;
    }

    if (row.company) {
      deal.txtCompany.type(row.company + "{enter}");
      dealInfo.company = row.company;
    }
    cy.wrap(dealInfo).as("dealInfo");
  });
}
When('I click on the new deal room button', () => {
  deal.btnNewDealRoom.should("be.visible").click();
});

Then('I should be able to view the create deal room page', () => {
  deal.lblTitle.should("have.text", "Create Deal Room")
});

Then(/^I am at new deal room page$/, () => {
  deal.btnNewDealRoom.should("be.visible").click();
  deal.lblTitle.should("have.text", "Create Deal Room")
});

When('I enter following data for deal room', (datatable: any) => {
  createDealRoom(datatable);
});

Then(/^I click on the create button$/, () => {
  deal.btnCreate.realClick();
});

Then(/^I click on the update button$/, () => {
  deal.btnUpdate.realClick();
});

Then(/^I should see "([^"]*)" as the success message$/, (message:string) => {
	cy.contains(message).should("be.visible");
});

Then(/^I have created a new deal room with following data$/, (datatable:any) => {
  deal.btnNewDealRoom.should("be.visible").click();
  deal.lblTitle.should("have.text", "Create Deal Room")
  createDealRoom(datatable);
  deal.btnCreate.realClick();
  cy.contains("Deal Room created successfully").should("be.visible");
});

Then(/^I navigate to deal rooms page$/, () => {
	cy.visit("/deal-rooms/?view=all")
});

Then(/^I click on the edit button for created room$/, () => {
  cy.get("@dealInfo").then((dealInfo:any)=>{
    deal.btnEdit(dealInfo.dealname).click();
  });
});

Then(/^I should be able to view the created deal room data$/, () => {
  cy.get("@dealInfo").then((dealInfo:any)=>{
    deal.dvDealCard(dealInfo.dealname).should("be.visible");
    deal.dvDealCard(dealInfo.dealname).find("div[class*='dealRoomCard_ownerDetails']").contains(dealInfo.company).should("be.visible");
    deal.dvDealCard(dealInfo.dealname).find("div[class*='dealRoomCard_tags']").contains(dealInfo.dealstage).should("be.visible");
    deal.dvDealCard(dealInfo.dealname).find("span[class*='dealRoomCard_price']").contains(dealInfo.dealvalue).should("be.visible");
  });
});

