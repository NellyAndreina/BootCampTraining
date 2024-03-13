import { LinkProgressBar } from "http://uitestingplayground.com/progressbar";
const progressBar = new LinkProgressBar();
describe("Should click on Link Progress Bar", () => {
  beforeEach(() => {
    progressBar.navigateProgressBar();
  });
  it("Should click button", () => {
    progress.validateStartButton();
    progress.validateStopButton();
    //input.getMessageDblClickButton("You have done a click");
  });
  

});