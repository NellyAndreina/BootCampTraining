export class LinkProgressBar {
    navigateProgressBar() {
      cy.visit("http://uitestingplayground.com/textinput");
    }
//startButton
//stopButton
//progressBar

validateStartButton (){
    cy.get('#startButton').should('exist').click;
    cy.get('#startButton').should('be.visible');
}

validateStopButton (){
    cy.get('#stopButton').should('exist').click;
    cy.get('#stopButton').should('be.visible');
}


VerifyProgressBar (){
    cy.get('#progressBar').should('exist');
    cy.get('#progressBar').should('be.visible');
    cy.get('#miProgressBar').should('have.attr', 'valor', '75');
    cy.get('#miProgressBar').should('have.css', 'width', '100%');
}


}