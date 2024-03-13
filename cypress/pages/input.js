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
  //class LinkInput {
  // constructor() {
  //    this.inputSelector = '#newButtonName';
    //  this.buttonSelector = '#newButtonName';
    //}
    //enterTextInput(text) {
      //cy.get(this.inputSelector).clear().type(text);
    //}
    //getTextInput() {
      //return cy.get(this.inputSelector).invoke('val');
    //}
    //verifyTextButton(expectedText) {
      //cy.get(this.buttonSelector).should('have.text', expectedText);
    //}
  //}
  
  //export default TestInputButtonPage;
}

