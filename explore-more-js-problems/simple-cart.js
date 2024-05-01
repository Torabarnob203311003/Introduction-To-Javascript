 const shopingcart = [
    { name: 'shirt', price : 2500, color:'red'},
    { name: 'pant', price : 7500, color:'red'},
    { name: 'cap', price : 500, color:'red'},
    { name: 'huddie', price : 2500, color:'red'},
    { name: 'panjabi', price : 1500, color:'red'},


 ]


  function totalcost(products){
    let sum = 0;

    for( let i = 0 ; i < products.length; i++){

        const product =products[i];
        
        sum = sum + product.price;





    }
    return sum;
  }

   const total = totalcost(shopingcart);
   console.log(total);