// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some kind of event or action has occurred. Callbacks are used to ensure that certain code runs only after a certain event happens, which is particularly useful in asynchronous programming.

// Synchronous Callback Example
// In a synchronous context, a callback function is executed immediately after the function it's passed to finishes executing.

function greet(name) {
    console.log('Hello, ' + name);
}

function processUserInput(callback) {
    const name = 'Alice';
    callback(name);
}

processUserInput(greet); // Output: Hello, Alice


// Asynchronous Callback Example
// In an asynchronous context, a callback function is executed after an asynchronous operation has completed, such as a network request or a timer.

function fetchData(callback) {
    setTimeout(function() {
        const data = 'Some data';
        callback(data);
    }, 1000); // Simulates an async operation with a 1-second delay
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData); // Output: Some data (after 1 second)


// Why Use Callbacks?
// Asynchronous Programming: Callbacks allow you to perform actions after an asynchronous task completes without blocking the main thread.
// Code Reusability: Functions can be more generic and reusable by accepting different callback functions.
// Event Handling: Callbacks are commonly used for handling events such as clicks, form submissions, and AJAX requests.

// Summary
// Callback Function: A function passed as an argument to another function, to be "called back" later.
// Synchronous Callbacks: Executed immediately within the calling function.
// Asynchronous Callbacks: Executed after an asynchronous operation completes.
// Error-First Callbacks: A common pattern in asynchronous operations where the first argument is an error object.