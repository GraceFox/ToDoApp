var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {  //dont allow null
        createListElement();
    }
}

var enterkey = 13;
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === enterkey) {
        createListElement();
    }
}


button.addEventListener("click", addListAfterClick();

input.addEventListener("keypress", addListAfterKeypress();