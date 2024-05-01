 const shopingcart = [
    { name: 'shirt', price : 2500, color:'red' , quantity:2},
    { name: 'pant', price : 7500, color:'red'   ,quantity:5 },
    { name: 'cap', price : 500, color:'red'     ,quantity:6 },
    { name: 'huddie', price : 2500, color:'red' ,quantity:3 },
    { name: 'panjabi', price : 1500, color:'red',quantity:7 },


 ]


  function totalcost(products){
    let sum = 0;

    for( let i = 0 ; i < products.length; i++){

        const product =products[i];
        // const totalcost = product.price * product.quantity;
        
        sum = sum + product.price * product.quantity;





    }
    return sum;
  }

   const total = totalcost(shopingcart);
   console.log(total);