//8 reason to get undefined

//Variable Declaration Without Initialization:
 let x;
console.log(x); // undefined

// Function Without a Return Statement:
 function foo() {}
console.log(foo()); // undefined

// Accessing Non-Existent Object Properties:
let obj = {a: 1};
console.log(obj.b); // undefined

// Array Elements That Don’t Exist:
let arr = [1, 2, 3];
console.log(arr[5]); // undefined

//Function Parameters That Are Not Passed:
 function bar(x) {
  console.log(x);
}
bar(); // undefined

//Using void Operator:
console.log(void 0); // undefined

//Explicitly Assigning undefined:
 let y = undefined;
console.log(y); // undefined

//Destructuring Assignment with Missing Values:
let [a, b] = [1];
console.log(b); // undefined

let {x, y} = {x: 10};
console.log(y); // undefined
