//  chair = 3cft
//  tabile = 10cft
//   bed =  50cft

 function woodCalculator (chairquantity,tablequantity,bedquantity){

        const perchairwood = 3;
        const pertabilwood = 10;
        const perbedwood = 50;

        const totalchairwood = chairquantity * perchairwood;
        const totaltablewood = tablequantity * pertabilwood;
        const totalbedwood = bedquantity * perbedwood;

        const totallwood = totalbedwood+totalchairwood+totaltablewood;
        return totallwood;
        
        

 }

  const totallwood =woodCalculator(0,5,5)
  console.log(totallwood);


//    furntiture wood calculator 