const listOfActions:Array<string> = ["1st action", "2nd action", "3rd action","1st action", "2nd action", "3rd action","1st action", "2nd action", "3rd action"];
const selectboxDiv:Element = document.getElementsByClassName("selectbox")[0];
const optionsMenu:HTMLElement = <HTMLElement>document.getElementsByClassName("options-menu")[0];
const nanoContent:HTMLElement = <HTMLElement>document.getElementsByClassName("nano-content")[0];
var selectedOptionText:string = "";
const selectedOptionElement =document.querySelector("#test-id");
const scrollContent = document.getElementsByClassName("scrollContent")[0];
const hint:string = "Select an option."

class CreateNewSelection{
  selection:Element;

  createSelection(HTMLtype:string, text:string, selectionClass:string, elementToBeAppended:Element){
    this.selection = document.createElement(HTMLtype);
    this.selection.setAttribute("class", selectionClass);
    this.selection.innerHTML = text;
    return elementToBeAppended.appendChild(this.selection);
    // return selectboxDiv.lastElementChild;
  }
}


window.onload = ()=>{
  let create = new CreateNewSelection();
  // selectedOptionElement = create.createSelection("input", selectedOptionText, "selected-option", selectboxDiv);
  selectedOptionElement.setAttribute("readonly", "readonly");
  // optionsMenu = create.createSelection("div", "", "options-menu fakeScroll", selectboxDiv);

  for(let action of listOfActions){
    let option = create.createSelection("div", action, "option", nanoContent);
    option.addEventListener("click", function(){
      selectedOptionElement.setAttribute("value", action);
      optionsMenu.classList.remove("visible");
    })
  }

  selectedOptionElement.addEventListener("click", function(){
    if(optionsMenu.classList.contains("visible")!=true){
      optionsMenu.classList.add("visible");
      optionsMenu.focus();
    }else{
      optionsMenu.classList.remove("visible");
    }

  });

}
