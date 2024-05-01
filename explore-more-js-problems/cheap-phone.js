//    const phones = [ 
//     { name :'walton', price:1800, color:'red', ram :32},
//     { name :'apple', price:5800, color:'red', ram :22},
//     { name :'oppo', price:9800, color:'red', ram :32},
//     { name :'vivo', price:4800, color:'red', ram :32},
//     { name :'htc', price:8000, color:'red', ram :32},
//     { name :'asus', price:10800, color:'red', ram :32},
//     { name :'xaomi', price:3800, color:'red', ram :2},



// // //    ];
// //   const phones = [ 
// //     { name :'walton', price:1800, color:'red', ram :32},
// //     { name :'apple', price:5800, color:'red', ram :22},
// //     { name :'oppo', price:9800, color:'red', ram :32},
// //     { name :'vivo', price:4800, color:'red', ram :32},
// //     { name :'htc', price:8000, color:'red', ram :32},
// //     { name :'asus', price:10800, color:'red', ram :32},
// //     { name :'xaomi', price:3800, color:'red', ram :2},



// //    ];

// //    function cheapestPhone (phones){
// //    let cheapest = phones[0];
// //     for( let i =0 ; i < phones.length ; i++ ){

// //  const phone = phones[i];
// //   if( phone.ram < cheapest.ram ){

// //     phone = cheapest;


// //     }


// //    }

// //    return cheapest;
// // }
// //    const myselection =cheapestPhone(phones);
// //    console.log(myselection);

    

// // // function cheapestphone(phone) {
// // //     let cheapest = phone[0];

// // //     for(let i = 1; i < phone.length; i++) {
// // //         if(phone[i].price < cheapest.price) {
// // //             cheapest = phone[i];
// // //         }
// // //     }

// // //     return cheapest;
// // // }

// // // const myselection = cheapestphone(phone);
// // // console.log(myselection);
// function cheapestPhone (phones) {
//     let cheapest = phones[0];

//     for( let i =1 ; i < phones.length ; i++ ) {
//         const phone = phones[i];

//         if( phone.ram < cheapest.ram ) {
//             cheapest = phone;
//         }
//     }

//     return cheapest;
// }

// const myselection = cheapestPhone(phones);
// console.log(myselection);

const phones = [
    { name :'walton', price:1800, color:'red', ram :32},
    { name :'apple', price:5800, color:'red', ram :22},
    { name :'oppo', price:9800, color:'red', ram :32},
    { name :'vivo', price:4800, color:'red', ram :32},
    { name :'htc', price:8000, color:'red', ram :32},
    { name :'asus', price:10800, color:'red', ram :32},
    { name :'xaomi', price:3800, color:'red', ram :2}
];

function cheapestPhone (phones) {
    let cheapest = phones[0];

    for( let i =1 ; i < phones.length ; i++ ) {
        const phone = phones[i];

        if( phone.ram < cheapest.ram ) {
            cheapest = phone;
        }
    }

    return cheapest;
}

const myselection = cheapestPhone(phones);
console.log(myselection);