const numArray = [];
let numInt = 0;
var lengthInt = 0;

do {

    numInt = parseInt(prompt("Give me 4 numbers. Type zero 0 when done", 0));

    if (numInt != 0) {
        numArray[numArray.length] = numInt;
        lengthInt++;
    }


}
while (numInt != 0);

for (let x in numArray) {
    evenOdd(addOne(numArray[x]), lengthInt);
    lengthInt++;
}

function addOne (input) {
    const add = input + 1;
    console.log(add);
    return add;
};


function evenOdd (num, length) {
    if (num % 2 == 00) {
        console.log(num + " In Array segment " + length);
    }
    else {
        console.log("Number is odd");
    }
};
