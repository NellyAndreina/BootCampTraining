export class LinkInput {
  navigateInput() {
    cy.visit("http://uitestingplayground.com/textinput");
  }
  //newButtonName
  //updatingButton
  existTextInput() {
    cy.get("#newButtonName").should("exist");
    cy.get("#newButtonName").click().type("Verify entering text...");
  }
  clickButton() {
    cy.get("#updatingButton").should("exist").click();
    cy.get("#updatingButton").click();
    // cy.get('#result').should('contain', 'The action was successful');
  }
}
