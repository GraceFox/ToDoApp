var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value.length > 0) {  //dont allow null
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""; //clears input box
        console.log("click is working");
    }
})

var enterkey = 13;
input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.keyCode === enterkey) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
    
})