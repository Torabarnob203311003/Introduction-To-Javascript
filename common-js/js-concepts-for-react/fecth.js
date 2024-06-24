 //1.json stringify and parse
 const student= {

    name : 'sakib al hasan',
    age: 32,
    movies : ['king jhan' , 'god is one']
}
const studentJSON =JSON .stringify(student)
console.log(student)
console.log(studentJSON)
const studentObject =JSON .parse(studentJSON)
//2.fecth
 fetch('url')
 .then (res =>res.json());
 .then (data =>console.log(data));
 //3.keys,values
 const keys = object.keys (student)
 const value = object.values (student)
 //for

 //for of on array like  objets
 //for of in  for looping an  objects




 // add and remove an array