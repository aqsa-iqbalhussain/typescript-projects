// // function 
// function hello () {
//     console.log("hello aqsa");
// }
// hello()
// //arrow function
// let namefriend=()=>{
//     console.log("hello aqsa");
// }
// namefriend()
//normal function 
// function message (name:string,age:number){
//     return `hello and wellcome ${name} and age ${age}`;
// }
// console.log(message("aqsa",51));
// // arrow function
// let messages = (name:string,age:number)=>{
//     return `hello and wellcome ${name} and age ${age}`;
// }
// console.log(messages("aqsa",51));
// console.log(message("ali",12));
// console.log(message("safia",11));
// function message1 (name:string,age:number){
//     console.log( `hello and wellcome ${name} and age ${age}`);
// }
// message1("ali",12)
// message1("aqsa",11)
// function add (num1:number,num2:number){
//     return num1 + num2;
// }
// let addnumber :number = add(5,5);
// console.log(addnumber);
// function adds (num1:number,num2:number){
//     return num1 - num2;
// }
// console.log(adds(5,4));
// function number (name:string){
//     console.log(`hello ${name}`);
// }
// number("ali");
//optional parameters
function greeting(name) {
    if (name) {
        console.log("hello ".concat(name));
    }
    else {
        console.log("hello");
    }
}
greeting();
// default parameter
function fruit(name, num1) {
    if (num1 === void 0) { num1 = 21; }
    return "hello ".concat(name, " and age ").concat(num1);
}
console.log(fruit("aqsa"));
