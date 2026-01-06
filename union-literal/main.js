// let age: string|number;
// age=20;
// age="21";
// age=`true ${99 + 1}`;
// console.log(age);
// age = 100
// console.log(typeof age);
// NARROWING
// narrowing do not change original data type 
// let age : string|number;
// age=23;
// age.toFixed(2);
//  age="18" // because we first write number but after we implement (change) to string thatswhy we show all string method when we put(.)  
//  age.toUpperCase();
// console.log(typeof age); 
// console.log(Math.random());
var age = Math.random() > 0.5 ? "Aqsa" : 18;
//in false condition after the value of : colon is print 
// in this condition we cannot follow narrowing because anytime generate random number thats why we follow if and else
if (typeof age === "number") {
    console.log(age.toFixed(2)); //15.00
}
else {
    console.log(age.toLocaleUpperCase());
}
;
console.log(age);
