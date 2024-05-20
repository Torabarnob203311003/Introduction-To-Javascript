// //  fuctions defualt  parameter value  will be undefined 

// //  question number 1
// //  write an arrow with three parameters .. whoih will multiple peramters and return 

// //  const multiply = (a, b, c) => a * b * c;

// // // Example usage:
// // console.log(multiply(2, 3, 4)); 


// // question 2
// //  write the following sentnce in three lines and print the result: i am a web developer , i love to ode , i love biriyani

// //  const sentene =   `i love web development
// //  i love code
// //  i love also biriyani `
// //  console.log(sentene)

// //  question 3 
// //  write and arrow funtion with 2 parameter s. on parameters will be ome from you and other one will be default 

//  const  number = (frist,sec=2 ) =>{ return frist+sec } 
//   console.log( number(10))
//   console.log( number(10,5))

//  question no 4 

//  write an arrow function  where it will do the following 

//   a) it will take   an array  where the array elements will be the name of your friewnds
//    b) hcek if the length of each element is event, push elements with even length to a  new array and retrun the rsulat print the result

const filterEvenLengthNames = (friends) => {
    const evenLengthNames = [];
    friends.forEach(name => {
        if (name.length % 2 === 0) {
            evenLengthNames.push(name);
        }
    });
    return evenLengthNames;
};

// Example usage:
const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Emily'];
const evenLengthFriends = filterEvenLengthNames(friends);
console.log(evenLengthFriends);
