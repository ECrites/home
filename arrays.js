const numArray = [];
let numInt = 0;
let lengthInt = 0;

do {

    numInt = parseInt(prompt("Give me at least 4 numbers. Type zero 0 when done", 0));

    if (numInt != 0) {
        numArray[numArray.length] = numInt;
        lengthInt++;
    }


    evenOdd(numInt, lengthInt);
}
while (numInt != 0);

function addOne (input) {
    const add = input + 1;
    console.log(add);
};

//Checks for odd number for array length when going through 
//If even, send number to addOne function
function evenOdd (numInt, lengthInt) {
    if (numArray.length % 2 == 00) {
        addOne(numInt)
    }
    else {
        console.log("Number is odd");
    }
};
