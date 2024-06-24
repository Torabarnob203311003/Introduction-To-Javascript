 const products = [
        { name :'laptop', price :3200, brand:'lenovo'};
        { name :'laptop', price : 3200, brand:'apple'};
        {name :'laptop', price :3200, brand:'watch'};
        {name :'laptop', price :3200, brand:'huawei'};


 ];//array of objects
 const brands= products.map(product =>product.brand) ;
 console.log(brands)
 const prices = products.map(products=>products.price);
 console.log(prices)// it retrun
 products.forEach(product=> console.log(product))// it will not return



 // 3.filter
 const cheap = products.filter (product=>product.price<=500);
 console.log(cheap)
 const specificName =  products.filter (p=> p.name.includes('n'))
 console.log(specificName)
 //4.find
 const specific =  products.find (p=> p.name.includes('n'))