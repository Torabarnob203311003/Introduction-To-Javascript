const numbers = [25,75,85,74,89,77]
const partisal = numbers.splice(2,5,69,55,87,333)
console.log(partisal);
console.log(numbers);

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @param items — Elements to insert into the array in place of the deleted elements.

// @returns — An array containing the elements that were deleted.