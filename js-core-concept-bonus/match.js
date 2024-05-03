 const products = [
                    {id:1,name:'iphone ', price:18000, color:'red'},
                    {id:2,name:'waltonephone ', price:18000, color:'red'},
                    {id:3,name:'oppo ', price:18000, color:'red'},
                    {id:4,name:'xaomiphone ', price:18000, color:'red'},
                    {id:5,name:'iphone ', price:18000, color:'red'},
                    {id:6,name:'nothingPhone ', price:18000, color:'red'},
                    {id:7,name:'badPhone ', price:18000, color:'red'},



 ];

// for (const product of products){

//     console.log(product);
// };


 function matchproduct(products,serch){
   const matched =[];
    for(const product of products){
        if(product.name.toLowerCase().includes(serch.toLowerCase())){  //if we  use lower case in both products and search it will be the best practice
            matched.push(product);
        } 
 }
 return matched;
}

 const reuslt =matchproduct(products,'phone');
 console.log(reuslt);