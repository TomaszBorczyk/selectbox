var listOfActions = ["1st action", "2nd action", "3rd action", "1st action", "2nd action", "3rd action", "1st action", "2nd action", "3rd action"];
var selectboxDiv = document.getElementsByClassName("selectbox")[0];
var optionsMenu;
var selectedOptionText = "";
var selectedOptionElement;
var hint = "Select an option.";
var CreateNewSelection = (function () {
    function CreateNewSelection() {
    }
    CreateNewSelection.prototype.createSelection = function (HTMLtype, text, selectionClass, elementToBeAppended) {
        this.selection = document.createElement(HTMLtype);
        this.selection.setAttribute("class", selectionClass);
        this.selection.innerHTML = text;
        return elementToBeAppended.appendChild(this.selection);
        // return selectboxDiv.lastElementChild;
    };
    return CreateNewSelection;
}());
// window.onload = ()=>{for(let action of listOfActions){
//                         console.log(action);
//                         let create = new CreateNewSelection();
//                         create.createSelection(action);
//                       }
//                     };
window.onload = function () {
    var create = new CreateNewSelection();
    selectedOptionElement = create.createSelection("input", selectedOptionText, "selected-option", selectboxDiv);
    selectedOptionElement.setAttribute("readonly", null);
    optionsMenu = create.createSelection("div", "", "options-menu invisible", selectboxDiv);
    var _loop_1 = function (action) {
        var option = create.createSelection("div", action, "option", optionsMenu);
        option.addEventListener("click", function () {
            selectedOptionElement.value = action;
            optionsMenu.classList.add("invisible");
        });
    };
    for (var _i = 0, listOfActions_1 = listOfActions; _i < listOfActions_1.length; _i++) {
        var action = listOfActions_1[_i];
        _loop_1(action);
    }
    selectedOptionElement.addEventListener("click", function () {
        if (optionsMenu.classList.contains("invisible")) {
            optionsMenu.classList.remove("invisible");
        }
        else {
            optionsMenu.classList.add("invisible");
        }
    });
};
