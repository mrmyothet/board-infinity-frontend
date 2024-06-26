function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let sum = addNumbers(5, 10);
console.log(sum);

let globalVariable = 'i am a global variable';

function printBothVariables() {
    let localVariable = 'I am a local variable';

    console.log(globalVariable);
    console.log(localVariable);
}

console.log(globalVariable);
console.log(localVariable); // error