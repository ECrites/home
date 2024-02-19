
let userString = "";
userString = prompt("Type Anything!");
const format = function (x) { return "You Typed: " + x };
let output = format(userString);

for (let counter = 0; counter < 5; counter++) {
    const paragraph = document.createElement("p");
    const node = document.createTextNode(output);
    paragraph.appendChild(node);
    const container = document.getElementById("container");
    container.appendChild(paragraph);

}

function changeColor() {
    container.style.backgroundColor = "white";
    document.body.style.backgroundColor = "cyan";
}