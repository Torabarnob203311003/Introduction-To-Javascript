//  delect duplicate thing frim array 

 const names =['abul', 'babul', 'cabul','kabul','abul','babul','cabul',]
 const uniqueNames = [];
 function removeduplicatenames(names){


    for(let i =0 ; i<names.length; i++ ){

        const name = names[i];
        if(uniqueNames.includes(name) === false ) {
            uniqueNames.push(name);

    }
   
 }
  return uniqueNames;
 }
  const uniqueNameses = removeduplicatenames(names)
  console.log (uniqueNameses);
     