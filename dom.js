

for (let counter = 0; counter < 5; counter++) {
    const paragraph = document.createElement("p");
    const node = document.createTextNode("This sentence was created using js");
    paragraph.appendChild(node);
    const container = document.getElementById("container");
    container.appendChild(paragraph);

}

function changeColor(){
    container.style.backgroundColor = "yellow";
    document.body.style.backgroundColor = "lightblue";
};