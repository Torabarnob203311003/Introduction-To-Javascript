  function isleapYear (year){

        const remainder = year% 4;
        if( remainder === 0 ) {

            console.log('yor year is a leap year');


        }
        else{

            console.log('your year is not a leap  year')
        }

  }

     var input = [2024,2560,2023];
     for (var i = 0; i < input.length; i++) {
         const year = input[i];
         isleapYear(year);
     }
  isleapYear( 2024);

//    sloved 