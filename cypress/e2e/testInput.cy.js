import { LinkInput } from "../pages/input";
const input = new LinkInput();
describe("Should click on Link input", () => {
  beforeEach(() => {
    input.navigateInput();
  })
  
  it("Should click button", () => {
    input.existTextInput();
    input.clickButton();
    //input.getMessageDblClickButton("You have done a click");
  });
  
  it('Debería reflejar el texto del input en el botón', () => {
    const enterText = 'Test Text';
    testPage.enterTextInput(enterText);
    testPage.verifyTextButton(enterText);
});

  });
