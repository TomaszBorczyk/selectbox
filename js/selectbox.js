var listOfActions = ["1st action", "2nd action", "3rd action", "1st action", "2nd action", "3rd action", "1st action", "2nd action", "3rd action"];
var selectboxDiv = document.getElementsByClassName("selectbox")[0];
var optionsMenu = document.getElementsByClassName("options-menu")[0];
var nanoContent = document.getElementsByClassName("nano-content")[0];
var selectedOptionText = "";
var selectedOptionElement = document.querySelector("#test-id");
var scrollContent = document.getElementsByClassName("scrollContent")[0];
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
window.onload = function () {
    var create = new CreateNewSelection();
    // selectedOptionElement = create.createSelection("input", selectedOptionText, "selected-option", selectboxDiv);
    selectedOptionElement.setAttribute("readonly", "readonly");
    var _loop_1 = function (action) {
        var option = create.createSelection("div", action, "option", nanoContent);
        option.addEventListener("click", function () {
            selectedOptionElement.setAttribute("value", action);
            optionsMenu.classList.remove("visible");
        });
    };
    // optionsMenu = create.createSelection("div", "", "options-menu fakeScroll", selectboxDiv);
    for (var _i = 0, listOfActions_1 = listOfActions; _i < listOfActions_1.length; _i++) {
        var action = listOfActions_1[_i];
        _loop_1(action);
    }
    selectedOptionElement.addEventListener("click", function () {
        if (optionsMenu.classList.contains("visible") != true) {
            optionsMenu.classList.add("visible");
            optionsMenu.focus();
        }
        else {
            optionsMenu.classList.remove("visible");
        }
    });
};
