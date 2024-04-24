//  function functionName (parameters){

//     function body
//     return
//  }
//    var returnedValue = function name (parametersvalues)

  function getAverage (assignment1, assignment2, assginment3){

    var total =assignment1+assignment2+assginment3;
    var average =total/3;
    return average;


  }

   var assignment1Marks = 59;
   var assignment2Marks= 60;
   var assignment3Marks = 58;



    var myAverage = getAverage(assignment1Marks,assignment2Marks,assignment3Marks);

    console.log('my average number is :', myAverage);