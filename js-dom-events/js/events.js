

//  option number 1 
//   direct use in click me Option


//  Option 2

  function makePurple(){

    document.body.style.backgroundColor='purple';

  };

// //    create a function and call function in onclick
 //option 3

   const makeBlackButoon = document .getElementById('make-black');
   makeBlackButoon.onclick = makeBlack;
   
   function makeBlack(){
    document.body.style.backgroundColor='black';
   }
    

    // option 4 

     const pinkbutton =  document.getElementById('make-pink') 
     pinkbutton.addEventListener('click',makepink)

     function makepink(){

      document.body.style.backgroundColor='pink'
     }

     //option 4 another

       const makeButtongreen = document.getElementById('make-green')
       makeButtongreen.addEventListener('click',function buttongreen(){
        document.body.style.backgroundColor='green'

       })

       //option 4 final
       
       const makeblue = document.getElementById('make-blue').addEventListener('click', function (){

        document.body.style.backgroundColor='blue';
       })
