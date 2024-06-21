 /*
 Variable  start
 
1. what is js ?
  Ans : js is scripting language (Scripting languages are interpreted from source code directly, without the need for compilation, using an interpreter to translate commands. It is important to note that all scripting languages are programming languages, but not all programming languages are scripting languages.)



   ##### js is a synchornous Single threaded language.
   That means it can excute single command or line at a time and next command will start when the previous command will executed ###

    2.How does js work ?
     Ans :The JavaScript engine is simply a computer program that interprets JavaScript code. The engine is responsible for executing the code. Every major browser has a JavaScript engine that executes JavaScript code. The most popular one is the Google Chrome V8 engine.

    3.What is variable?
     Ans : Variables in JavaScript are used to store data that can be manipulated and retrieved throughout your code. Here’s a summary of what variables are in JavaScript:

       Data Containers: Variables act as containers for storing data values.
       Declaration: You can declare a variable using var, let, or const.
       Types of Values: They can hold various types of values, such as numbers, strings, and objects.
       Dynamic Typing: JavaScript is dynamically typed, which means the type of a variable is determined at runtime.
       Here’s an example of variable declaration and assignment in JavaScript:

                   let x = 5; // Declares a variable x and assigns it the value 5
                   let y = 6; // Declares a variable y and assigns it the value 6
                   let z = x + y; // Declares a variable z and assigns it the sum of x and y

   4. Declare a variable?
    Ans: Var  i =10 ;

    5.Types of variable ? How can you find type of a variable?
     Ans : Variable Types: JavaScript variables can hold different types of data, such as numbers, strings (text values), and more complex structures like objects and arrays. The page mentions numbers and strings as examples.
       Declaring Variables: Variables in JavaScript can be declared using var, let, or const. The page gives examples of each, showing how they are used to store values.
       Identifiers: Variables must be identified with unique names, known as identifiers, which can range from short names like x and y to more descriptive names like age, sum, or totalVolume.
       Finding Variable Type: To find the type of a variable in JavaScript, you can use the typeof operator. For example, typeof x will return the data type of the variable x.




         6.primitive and non-primitive data types?\
           Ans :   Primitive Data Types:

           These are the basic data types that are built into the language.
           They represent single values and are immutable (cannot be changed).

         Non-Primitive Data Types:

           These data types are derived from primitive data types and are known as reference types.
           They can hold multiple values and are mutable (can be changed).              


           
           
           In JavaScript, data types are broadly categorized into primitive and non-primitive types:

           Primitive Data Types:

           Number: Used for both integer and floating-point numbers.
           String: Represents a sequence of characters.
           Boolean: Can be either true or false.
           Undefined: Indicates an uninitialized variable.
           Null: Represents a deliberate non-value.
           BigInt: For integers larger than what the Number type can hold.
           Symbol: Represents a unique identifier.
           Non-Primitive Data Types (also known as reference types):

           Object: The most common non-primitive type, used for collections of data and more complex entities.
           Array: A special kind of object, suited to storing ordered collections.
           Function: A block of code designed to perform a particular task, also an object in JavaScript.


           7. Naming convension of js variables?
               Ans :    Identifiers: Variable names in JavaScript are known as identifiers and must be unique.
                               
               Rules: Identifiers can include letters, digits, underscores, and dollar signs, but must begin with a letter, underscore, or dollar sign.
               Case Sensitivity: Variable names are case-sensitive, meaning variableName and VariableName would be considered different variables.
               Reserved Words: Certain words are reserved in JavaScript and cannot be used as variable names, such as var, let, const, if, else, etc.
               Remember to choose descriptive and meaningful names for your variables to make your code more readable and maintainable.

                   8.How  will express math Operation?[+,-,/,%]
                   Ans : Addition (+): Adds two numbers.
                       Subtraction (-): Subtracts one number from another.
                       Division (/): Divides one number by another.
                       Multiplication (*): Multiplies two numbers.
                       Modulus (%): Returns the remainder of a division.
                       Here’s an example of how you can use these operators in JavaScript:

                       let sum = 10 + 5;        // Addition: sum is 15
                   let difference = 10 - 5; // Subtraction: difference is 5
                   let product = 10 * 5;    // Multiplication: product is 50
                   let quotient = 10 / 5;   // Division: quotient is 2
                   let remainder = 10 % 3;  // Modulus: remainder is 1


                         9.Short hand : +=,-=,*=,/= ?
                           ans : += Addition Assignment: Adds the right operand to the left operand and assigns the result to the left operand.
                       -= Subtraction Assignment: Subtracts the right operand from the left operand and assigns the result to the left operand.
                       *= Multiplication Assignment: Multiplies the left operand by the right operand and assigns the result to the left operand.
                       /= Division Assignment: Divides the left operand by the right operand and assigns the result to the left operand.
                       Here’s an example of how these shorthand operators work:
                       let a = 10;

                               a += 5; // Equivalent to a = a + 5; Now a is 15
                               a -= 3; // Equivalent to a = a - 3; Now a is 12
                               a *= 2; // Equivalent to a = a * 2; Now a is 24
                               a /= 4; // Equivalent to a = a / 4; Now a is 6




                          10.++ ,-- ?
                           Ans : ++ means value imcreases in +1
                                 --  means value decreasce in -1

                        11.parseINT,pARSEfLOAT?
                           aNS :  parseInt(string, radix):
                           It parses a string and returns an integer.
                           The radix is an optional parameter (between 2 and 36) that represents the base of the number in the string. If it’s not provided, the default is 10.
                           It will read up to the first non-digit character and return the number found up to that point. If no number is found, it returns NaN.
                           parseFloat(string):
                           It parses a string and returns a floating point number.
                           It does not have a radix parameter because it always interprets the number as base 10.
                           It will parse until an invalid character for a decimal number is found.


                         12.toFixed ?
                           ans : to fixed mean the fixed value u want show in output as  a decimal number 
                            example : toFixed [2] = 20.22


                              _______Variable  End _____




                              #### Array start #####

         1.What is the purpose of array?
          Ans :An array is a collection of items of same data type stored at contiguous memory locations.

           For simplicity, we can think of an array as a flight of stairs where on each step is placed a value (let’s say one of your friends). Here, you can identify the location of any of your friends by simply knowing the count of the step they are on.

            2.How to declare an array in js ?
             Ans : example :  Var number = [25,65,45,78,99,69] ;
              example 2 : Var cars = [
                                   "Saab",
                                   "Volvo",
                                   "BMW"
                                   ];

                 3. Number of elements in an array?
                  Ans : var myArray = [99, 101.5, "John Doe", true, { age: 44 }];
                         var total = myArray.length;
                       console.log(total);

           4.What is index?
            ans : js array are zero indexed . first elemnt of an array is at zero index , thn next one in 1 index and so on.....

            example : var  fruits = ['mango','apple', 'orange']; here mango index =0 , apple = 1 and orange index =2 ;

            5.Find the  value of an element by index?
             ans : var imageList = [100,200,300,400,500];
               var index = imageList.indexOf(200); 
                by index of we can find perticular index or array elements .

                     6.Change and elemnt by index?
                     ans : var numbers =[25,45,84,97,95,65,22,45,65];

                   to get element value by index 
                   var element = numbers[0];

                    to add element value by index 
                       numbers[5] = 69; 

                        get index number by  the value using  ".index off" 
                       var positionIndex = numbers.indexOf(69);
                   console.log(positionIndex);

                   7.Get the index of an elemnt by the value?
                    ans :   get index number by  the value using  ".index off" 
                       var positionIndex = numbers.indexOf(69);
                   

                8.What does it mean when you get undefined  while geting the value of an element ?
                 ans : 
                           Getting "undefined" typically happens in languages like JavaScript when you try to access a property or element that doesn't exist. It means the variable you are trying to access has not been defined or initialized, or the property or element you are trying to access does not exist in the object or array.
                           example :var myArray = [1, 2, 3];

                           console.log(myArray[5]); // Output will be "undefined" because there is no element at index 5


                            9. How can you add  an elemnt to an array at the last position?
                                   ans : we have to use push
                                    var myArray = [1, 2, 3];
                                   myArray.push(4);
                                   console.log(myArray); // Output will be [1, 2, 3, 4]


                                    10.How can you remove an elemnt an aray?
                                    ans : we have to use pop
                                        var myArray = [1, 2, 3];
                                   myArray.pop(4);
                                   console.log(myArray); // Output will be [1, 2, 3, 4]


                                    11.How can you add   an element of the fast postion of ann array ?
                                     ans : by using unshift
                                            var myArray = [1, 2, 3];
                                   myArray.unshift(4);
                                   console.log(myArray); // Output will be [1, 2, 3, 4]

                                      12.remobve the firrst elemnt of an array?
                                      ans : by using shift
                                      example :       var myArray = [1, 2, 3];
                                                   myArray.shift(4);
                                                   console.log(myArray); // Output will be [1, 2, 3, 4]



                                       ### array end ######




                       ### Conditon start ###

                               1.Meaning of :>, < ,<=,>= !=,===,!===;
                                ans :1. > : Greater than. It checks if the value on the left side is greater than the value on the right side.Example: 5 > 3 evaluates to true.
                                   < : Less than. It checks if the value on the left side is less than the value on the right side.Example: 3 < 5 evaluates to true.
                                   <= : Less than or equal to. It checks if the value on the left side is less than or equal to the value on the right side.Example: 3 <= 3 evaluates to true.
                                   >= : Greater than or equal to. It checks if the value on the left side is greater than or equal to the value on the right side.Example: 5 >= 5 evaluates to true.
                                   != : Not equal to. It checks if the value on the left side is not equal to the value on the right side.Example: 5 != 3 evaluates to true.
                                   === : Strict equality. It checks if the value on the left side is equal to the value on the right side, and both the value and the type must be the same.Example: 5 === "5" evaluates to false because they are not of the same type.
                                   !== : Strict inequality. It checks if the value on the left side is not equal to the value on the right side, or if they are not of the same type.Example: 5 !== "5" evaluates to true because they are not of the same type.



                        2.meaning of &&
                         ans :In JavaScript, && is the logical AND operator. It's used to combine two boolean expressions, and it returns true if both expressions are true; otherwise, it returns false.

                         example :var x = 5;
                                   var y = 10;

                                   if (x < 10 && y > 5) {
                                       console.log("Both conditions are true");
                                   } else {
                                       console.log("At least one condition is false");
                                   }
                                   

                                3.meaning of ||
                                 ans : or operation



                     4.lets say u have x amount of money< you u have more than u have  8k then u eil by mac book , if u have more than 90k u will by gaming laptop, if u have 20k then u will by lenovo laptop if u have more than 20k then u will buys ue dlaptop, othwr wise u will use ur mobile phone ?

                     ans :   var totalAmount = 10000 ;
                            if ( totalAmount >= 8000){
                               console.log("youwill buy a mcabook");
                            } 
                            else if (totalAmount >=90000){

                               console.log ("you wil bus a gimg laptop");
                            }
                            else if (totalAmount >=20000){

                               console.log ("you will buy s lenovo laptop");
                            }
                            else {

                               console.log ("use your mobile phone");
                            }


                            ### Conditon end ###


                           ### loop start ###


                            1.Display "ajker amar mon valo nei" for 39 times?
                            
                            ans :
                               
                            for( var i =40 ; i<=39 ; i++){

                               console .log("ajke amar mon valo nai");
                            }


                             2.Display numbers beetween 58 to 98?
                              ans :         for (var i = 58; i <= 98; i++) {
                                                               console.log(i);
                                                           }
                           
                       3.Show all even numbers from 412 to456?

                        ans :   for (var i = 412; i <= 456; i++) {
                                   if (i % 2 === 0) {
                                       console.log(i);
                                   }
                               }

                       4. show all odd numbers from 581 to623 ?
                       ans : for (var i = 581; i <= 623; i++) {
                                   if (i % 2 !== 0) {
                                       console.log(i);
                                   }
                               }

                             5. deff between while loop and froo loop?
                              ans :While Loop:
                                       A while loop repeatedly executes a block of code as long as a specified condition is true.
                                       It consists of a condition followed by the code block to be executed.
                                       The condition is evaluated before executing the code block. If the condition is true, the code block is executed. If the condition is false, the code block is skipped, and the program continues with the next statement after the while loop.

                                       example : var x = 0;
                                           while (x < 5) {
                                               console.log(x);
                                               x++;
                                           }

                                   For Loop:
                                   A for loop repeats a block of code a specified number of times.
                                   It consists of three parts: initialization, condition, and increment/decrement.
                                   The initialization part is executed once at the beginning of the loop.
                                   The condition is evaluated before each iteration. If it's true, the code block is executed; if it's false, the loop terminates.
                                   After each iteration, the increment/decrement part is executed.

                                   example :  for (var i = 0; i < 5; i++) {
                                                   console.log(i);
                                               }


                                7.Creat an array from all the mobile phones u used ? display all the elemnts of the array by using a while loop

                                ans :  var mobilePhones = ["iPhone", "Samsung Galaxy", "Google Pixel"];
                                       var i = 0;

                                       while (i < mobilePhones.length) {
                                           console.log(mobilePhones[i]);
                                           i++;
                                       }


                                        8.Run a loop from 30 to 86 , tjis eill stop if the value is get higher than 44?
                                         ans :   for (var i =30 ; i<86 ; i++)
                                         {

                                           console.log(i);
                                           if(i>=44)
                                           break;
                                         }



                                9.Write the price of the books that ou have ,  Display the p[rices if th peices is lower than 200?
                                   ans :  var bookPrices = [150, 220, 180, 190, 250];

for (var i = 0; i < bookPrices.length; i++) {
   if (bookPrices[i] < 200) {
       console.log(bookPrices[i]);
   }
}



  ### loop end  ###


                                                   


