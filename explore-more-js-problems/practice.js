// ফাংশন নেম দিতে হবে RadianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (Radian)। তারপর সেটাকে ডিগ্রীতে (Degree) কনভার্ট করে কত ডিগ্রী (Degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

//  function RadianToDegree(Radian){
//         var degree = Radian * (180 / Math.PI);
//   return degree ;


//  }

//   const radianvalue = 10;
//   const getDegree = RadianToDegree(radianvalue);
//   console.log(getDegree.toFixed(2));



// Problem:2  IsJavaScriptFile 

// ফাংশন নেম দিতে হবে IsJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘Index.Js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে True রিটার্ন করতে হবে আর যদি না হয় তাহলে False রিটার্ন করতে হবে । 

//  function IsJavaScriptFile (names){


//  if ( names.endsWith(".js") ){
//      return true;
//     }else{
//         return false;
//       }



//  }


//  const isJavaScriptFile = IsJavaScriptFile("lab-03.js");
//  console.log (isJavaScriptFile);




// Problem 3: OilPrice

// ফাংশন নেম দিতে হবে OilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

// ভিডিও ভালো করে দেখবে। 



// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 



// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

// function OilPrice(dijelquantity, petrolquantity, octenquantity) {
//     const djlprice = 114;
//     const petrolprice = 130;
//     const octenprice = 135;

//     let totalCost = (djlprice * dijelquantity + petrolprice * petrolquantity + octenprice * octenquantity);

//     return totalCost;
// }

// const needoils = [3, 1, 2];
// const totalprice = OilPrice(...needoils); // Using spread operator to pass array elements as arguments
// console.log(totalprice); // Output: 587


// Problem 4: PublicBusFare



// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে PublicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

//    function Publicbusfare(people){

//     const buscapacity = 50;
//     const microbuscapacity = 11;
//     const publicbusprice = 250;
//     const publicbuspepole = people/buscapacity;
//     const micropepole = people/microbuscapacity;
//      const pepoleleft = people -(buscapacity+microbuscapacity);
//      const totalfare =  pepoleleft * publicbusprice;
//      return totalfare;



//    }



//  const peoplenumber = 50;
//    const totalcost = Publicbusfare( peoplenumber);
//    console.log('total fare of public buses :', totalcost);


// Problem 5: IsBestFriend



// তোমাকে একটি ফাংশন লিখতে হবে IsBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে True রিটার্ন করবে , না হলে False রিটার্ন করবে ।


// function IsBestFriend(name1, name2) {
//     if ((name1.friend === name2.name && name2.friend === name1.name) ||
//         (name1.name === name2.friend && name2.name === name1.friend)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const namebuddies1 = {name: 'abudl', friend: 'babul'};
// const namebuddies2 = {name: 'babul', friend: 'abudl'};

// const buddies = IsBestFriend(namebuddies1, namebuddies2);
// console.log(buddies); 
