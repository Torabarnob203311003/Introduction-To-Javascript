// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array
// 2
// . The map() method does not change the original array
// 1
// // .

  const numbers = [2,5,8,10]

   const double = numbers.map(n=>n*2)
   console.log(double)

  
   const addnumbers = numbers.map(n=>n+2)
  
   console.log(addnumbers)
    const friends = ['tom','arnob','saif']
    const length = friends.map( n=>n.length)
    console.log(length)