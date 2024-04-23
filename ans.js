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