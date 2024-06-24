//1.array destructring
 const numbers = [ 42,58];
//  const x = numbers [0]
//  const y = numbers [1]

// const [x,y] = [42,45];
const [x,y] = numbers;
console.log(x);
console.log(y);

//2.object destructring
const {name,age }= { name :'abul',age :25};
const {name,age }= { id :'abul',roll :25}