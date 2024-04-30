//  function maxInArray(numbers){

//      let largest = numbers[0];

//     for( let i =0; i < numbers.length; i++){

       
//             const index = i;
//             const element = numbers[index]; 
//              if (element > largest){

//                 largest =element;
//              }

//     }
//     return largest;



//  }

//   const heights = [167,190,152,55]
//   const tallest = maxInArray(heights);
//   console.log( 'tallest number is : ',  tallest);



//    this is the lowest 


 function maxInArray(numbers){

     let lowest = numbers[0];

    for( let i =0; i < numbers.length; i++){

       
            const index = i;
            const element = numbers[index]; 
             if (element < lowest){

                lowest =element;
             }

    }
    return lowest;



 }

  const heights = [167,190,152,55]
  const lowest = maxInArray(heights);
  console.log( 'tallest number is : ',  lowest);

