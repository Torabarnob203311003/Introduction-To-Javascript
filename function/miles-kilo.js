  function milestoKilometers (miles){

     const Kilometers = miles/1.60033;
      return Kilometers; 
  }

   const  rajshahi = 165;
   const rajkilo = milestoKilometers(rajshahi);
   console.log (rajkilo);