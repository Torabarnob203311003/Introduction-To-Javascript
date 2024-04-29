 function getSumArray(numbers) {

     var sum = 0;
    for( var i =0 ; i <numbers.length ; i++) {
        var index = i;
        var element = numbers[index];

          sum = sum+element;
        console.log(index, element,sum);
    }
}

var array = [12, 25, 78, 88];
getSumArray(array);