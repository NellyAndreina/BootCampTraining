import { LinkInput } from "../pages/input";
const input = new LinkInput();
describe("Should click on Link input", () => {
  beforeEach(() => {
    input.navigateInput();
  })
  //it('Enter test text in the input', () => {
  //const textInput = 'Text test';
  //input.enterText(validatedText);
  //input.checkExpectedText(validatedText);
  //});
  it("Should click button", () => {
    input.existTextInput();
    input.clickButton();
    //input.getMessageDblClickButton("You have done a click");
  });
});
