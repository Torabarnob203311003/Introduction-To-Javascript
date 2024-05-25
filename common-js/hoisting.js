// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means you can use variables and functions before you declare them in your code. However, only the declarations are hoisted, not the initializations.

//Variable Hoisting
// For variables declared with var, the declaration is hoisted, but the initialization remains in place.
console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5
//Function Hoisting
// Function declarations are completely hoisted, meaning both the declaration and the definition are moved to the top.

sayHello(); // Output: Hello!
function sayHello() {
    console.log('Hello!');
}

//Let and Const
// Variables declared with let and const are also hoisted, but they are not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is encountered.
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 10;
console.log(myLetVar); // Output: 10

console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = 20;
console.log(myConstVar); // Output: 20


// Summary
// var: Declaration is hoisted, initialization is not.
// function: Both declaration and definition are hoisted.
// let and const: Declarations are hoisted, but not initialized, leading to a temporal dead zone.