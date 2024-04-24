  var shopingCart  ={
                books :3,
                sunglass : 5,
                pen : 12 ,
                pencil :7




  }
//   console.log(shopingCart.books); this how to get output of shoppongCart 

//   when  you know the specific propertiy name , and use dot notaion to find thr property value

 var penAmount = shopingCart.pen;
//   alternative style 

//   when  you know the specific propertiy name , and use dot notaion to find thr property value
//  var penAmount2 = shopingCart['sunglass'];
//  console.log(penAmount2);
 var propirties = Object.keys(shopingCart);
 console.log(propirties);
//  to get all properties of keys 
 var propirtieValues = Object.values(shopingCart);
 console.log(propirtieValues);
 //  to get all properties of values