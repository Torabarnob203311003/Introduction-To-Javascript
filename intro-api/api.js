// Java script object notation [json]

//  const user ={id:1, name:'torab', adress:'dhaka'}
//   const stringifyd = JSON.stringify(user)
//   console.log(user)//js
//   console.log(stringifyd)//json



 const user = {

                    id: 1,
                    name : 'torab',
                    adress:{
                                distric : 'natore',
                                home : 'kaligonj'


                    }


 }
//  console.log(user)
const stringifyd = JSON.stringify(user);
console.log(stringifyd)
const adress = JSON.parse(stringifyd);// here by parse we can change string to object mode
console.log(adress)