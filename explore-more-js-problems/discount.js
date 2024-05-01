// 1. if ticket numbers is less than 100, per ticket price : 100
// 2. if ticket number is more than 100 ,  but less than 100,  First 100 tickets will be 100/  less ticket will be 90
// 3. if purscahe more than 200 tickets

//          first 100 -----> 100tk
//          101-200  -------> 90tk
//          200+     ------> 70tk


 function ticketPrice (quantity) {

    const first100rate = 100;
    const sec100rate = 90;
    const restticketrate = 70;

    if(quantity<=100){

        const price = quantity * first100rate;
        return price;

        }

        
        else if (quantity <= 100) {

            const price = quantity * sec100rate;
            return price;


    }
    else if (quantity<=200){
        const price = quantity * first100rate;
        const restticketquantity  = quantity -100;
        const restticketprice = restticketquantity * restticketrate;
        const totalprice = price + restticketprice;
        return price;



    }
    

 }

  const price = ticketPrice(180);
  console.log(price);