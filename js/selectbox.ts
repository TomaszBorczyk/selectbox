const listOfActions:Array<string> = ["1st action", "2nd action", "3rd action","1st action", "2nd action", "3rd action","1st action", "2nd action", "3rd action"];
const selectboxDiv:Element = document.getElementsByClassName("selectbox")[0];
var optionsMenu:Element;
var selectedOptionText:string = "";
var selectedOptionElement;
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



// window.onload = ()=>{for(let action of listOfActions){
//                         console.log(action);
//                         let create = new CreateNewSelection();
//                         create.createSelection(action);
//                       }
//                     };

window.onload = ()=>{
  let create = new CreateNewSelection();
  selectedOptionElement = create.createSelection("input", selectedOptionText, "selected-option", selectboxDiv);
  selectedOptionElement.setAttribute("readonly", null);
  optionsMenu = create.createSelection("div", "", "options-menu invisible", selectboxDiv);

  for(let action of listOfActions){
    let option = create.createSelection("div", action, "option", optionsMenu);
    option.addEventListener("click", function(){
      selectedOptionElement.value = action;
      optionsMenu.classList.add("invisible");
    })
  }

  selectedOptionElement.addEventListener("click", function(){
    if(optionsMenu.classList.contains("invisible")){
      optionsMenu.classList.remove("invisible");
    }else{
      optionsMenu.classList.add("invisible");
    }
  });






}
