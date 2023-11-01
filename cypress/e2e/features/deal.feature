Feature: Deal room listing page feature

   Deal room listing page feature

   Scenario: As an user, I should be able to login to the application
      Given I navigate to the application
      Then I should be able to view the login page
      When I enter email and password
      And I click on the signin button
      Then I should be login to the application

   Scenario: As an user, I should be able to view the new deal room page
      Given I am logged in to the application
      When I click on the new deal room button
      Then I should be able to view the create deal room page

   Scenario: As an user, I should be able to create the new deal room
      Given I am logged in to the application
      And I am at new deal room page
      When I enter following data for deal room
         | dealroomname     | dealname     | dealstage | dealvalue | closedate  | company    |
         | AcmeCorpDealRoom | AcmeCorpDeal | Lead      | 10        | 2023-12-12 | Dealintent |
      And I click on the create button
      Then I should see "Deal Room created successfully" as the success message

   Scenario: As an user, I should be able to edit the deal room
      Given I am logged in to the application
      And I have created a new deal room with following data
         | dealroomname     | dealname     | dealstage | dealvalue | closedate  | company    |
         | AcmeCorpDealRoom | AcmeCorpDeal | Lead      | 10        | 2023-12-12 | Dealintent |
      And I navigate to deal rooms page
      And I click on the edit button for created room
      When I enter following data for deal room
         | dealname         | dealstage | dealvalue | closedate  |
         | AcmeCorpDealEdit | Demo      | 11        | 2023-11-12 |
      And I click on the update button
      Then I should see "Deal Room updated successfully" as the success message

  Scenario: As an user, I should be able to view the created deal room data
      Given I am logged in to the application
      And I have created a new deal room with following data
         | dealroomname     | dealname     | dealstage | dealvalue | closedate  | company    |
         | AcmeCorpDealRoom | AcmeCorpDeal | Lead      | 10        | 2023-12-12 | Dealintent |
      And I navigate to deal rooms page
      And I should be able to view the created deal room data
