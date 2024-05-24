// == check the value same or not and  also do type coercion and type conversion..
// but === equal check value and value types  in a single step

// The == operator will perform type coercion if the operands are of different types before checking for equality.
// == example
console.log(5 == '5');  // true


console.log(null == undefined); // true
// Explanation: null and undefined are considered equal with ==.

console.log(0 == false);  // true

console.log('' == false); // true


console.log([1,2] == '1,2'); // true

// The === operator checks for equality without type coercion, meaning both value and type must be the same for it to return true.

// === example
console.log(5 === '5');  // false
// Explanation: The number 5 and the string '5' are of different types, so they are not strictly equal.

console.log(null === undefined); // false
// Explanation: null and undefined are of different types, so they are not strictly equal.

console.log(0 === false);  // false
// Explanation: The number 0 and the boolean false are of different types, so they are not strictly equal.

console.log('' === false); // false
// Explanation: The empty string and the boolean false are of different types, so they are not strictly equal.

console.log([1,2] === '1,2'); // false
// Explanation: The array [1,2] and the string '1,2' are of different types, so they are not strictly equal.

 const first = 0
 const sec = false 

 if (first== sec){
console.log('they are equal')

 }
 else{

    console.log('they are not equal')
 }
//   output will be they are equl cz 0  is falsey and flase is false so they are same .. if we use anything else number it will not equal



 const firsty = 0
 const secy = false 

 if (firsty=== secy){
console.log('they are equal')

 }
 else{

    console.log('they are not equal')
 }
//output : they are not equal bcz they data types are not same === chexk data typea alos with value

