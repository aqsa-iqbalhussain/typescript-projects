// let favourite :string= "apple";
// console.log(favourite);
// favourite="banana";
// console.log(favourite);
// // let fristname ="aqsa";
// // let lastname="anila";
// // console.log(fristname +''+ lastname);
// let fristname ="aqsa";
// let lastname="anila";
// console.log(`${fristname} ${lastname}`);
// let num =3
// let num2=3
// let nums = num+num2
// console.log(nums);
// let a :number =10
// let b :number =20
// let c :number = a /b
// console.log(c);
// let result : "win"|"fail"|"success"
// result="win"
// console.log(result);
// function num (num:number, num1:number){
//    return  num*num1
// }
// console.log(num(8));
//              1+1+2+1
//  let c = ((a,b)=>++a + b++)
//  (1,2)
//  console.log(c);
// enum color2{Red=1,Green=2,Blue=3}
// console.log(color2[color2.Red])
// let myname:unknown="hello world"
// console.log((myname as string).length);
// console.log(3% -1);
// let nestedtuple:[number,[string,boolean]]=[1,["hello",true]]
// console.log(nestedtuple[1][0]);
// let tuple:[number,string]=[10,"ten"];
// tuple[0]=20
// console.log(tuple);
//  type message =[number,string]&[boolean,string]
//  let detail:message=[]
// let num=0
// if(true){
//     console.log(true);
// }else{
//     console.log(false);
// }
// let num:0
// console.log(true);
// console.log(false);
// function display (value:any):void {
//     console.log(value);
// }
// console.log(display("hello"));
// let layer :number = 5
// let layer1 : number = 5
// let power :number = layer**3
// console.log(power);
// let apple= 10
// let banana=5
// let result:number = apple % banana ;
// console.log(result);
// let result = 3+4*5
// result++;
// console.log(result);
// let deatil = false;
// if(false){
//     console.log("hello world");
// }
// else{
//     console.log("error");
// }
// let wheather = "suning";
// if(wheather ==="training"){
//     console.log("successfully");
// }else if (wheather ==="raining"){
//     console.log("clearing");
// }else if (wheather==="suning"){
//     console.log("you are best");
// }
// else{
//     console.log("error");
// }
// let hungry = false ?"apples":"juice"
// console.log(`i like ${hungry}`);
// let weekend ="sunday";
// switch (weekend){
//     case "saturday":
//         console.log("shopping");
//     break;
//     case "sunday":
//         console.log("dinner");
//     break;
//     default:
//     console.log("error");
// }
// function reciepe (salt: string,butter: string) {
//     return `${salt}  ${butter}`
// }
// let result: string =reciepe("iodine","dalda")
// console.log(result);
// function detail (name:string, value:string){
//     let dream = `${name} ${value}`
//     return dream
// }
// let infor :string = detail("ali","aliza")
// console.log(infor);
// function message(fristname:string="iqbal",lastname:string ="aqsa"){
//     console.log(`my name is ${fristname} ${lastname}`);
// }
// message("anila","iqbal");
// function mydream (name:string,...subno:number[]) {
//     console.log(name);
//     console.log(...subno);
// }
// mydream("aqsa",34,56,77,32,12,89)
// let number =[1,2,3]
// let newnumbr =[...number,3,4,6]
// console.log(newnumbr);
// let x :{id:number,[a:string]:any};
// x={
//     id:23,
//     lastname:"ali",
//     firstname:"aqsa",
//     age:23
// }
// index signature  
// let y :{name:number,[b:string]:any};
// y={
//     name:23,
//     lastname:"ali",
//     firstname:"aqsa",
//     age:23
// }
// console.log(y);
//arrow function
// let detail =()=> "hello world"
// let result:string = detail()
// console.log(result);
// let details =(name:string,age:number)=>(
//     name + age
// )
// let results=details("aqsa",21)
// console.log(results);
//  let Egg =()=>{return 1 +1.5+ 3};
//  let response:number = Egg()
//  console.log(response);
// let favouritecoloe:string ="black";
// console.log((typeof favouritecoloe));
// console.log(favouritecoloe);
// // undefines
// //let a :string;
// //console.log(a);
// //unknown
// let b :unknown=343;
// let c = b as number;
// console.log(c);
// //any
// let aqsa :any ="aqsa";
// console.log(aqsa);
// let e :null=null;
// console.log(e);
//let globalvar = "hello new environment for starting coding";
// function details(){
//     let personaldetails="aqsa"
//     console.log(details);
// }
// console.log(details);
//console.log(personaldetails("hello"));
//iife
// (function chai(){
//     console.log("hello world");
// })();
// ( (name)=>{
//     console.log(`hello ${name}`);
// })("aqsa")
// let beautiful = function(){
//     console.log("beautiful");
// }
// beautiful();
// let coder=function(){
//     return "practice make perfect"
// }
// console.log(coder());
//recursive function
// function recursivefunc(conditions){
//     if(conditions<=0){
//         console.log(`recursive ${conditions}`);
//     recursivefunc(conditions-1)
//     }      
// }
// recursivefunc(5);
//  function countdown (number: number){
//     if (number >=0){
//         console.log("Done!");
//         return;
//     }
//     console.log(number);
//     countdown(number-1);
//  }
//  countdown(5)
// // nested function
//  function outerFunction(){
//     const message = function(){
//         console.log("hello world!");
//     }
//     message();
//  }
//  outerFunction();
// callback
//function losses(){
//  console.log("hello");
//}
//function inform (callback:any){
//console.log("welcome")
//      callback();
//}
//inform(losses)
// function calculateproduct(num1:number,num2:number){
//     return num1 * num2
// }
// const results = calculateproduct(4,10)
// console.log(results);
// function greet (name:string,greetings:string="Hello"){
//     return greetings;
// }
// console.log(greet("ameen"));
// console.log(greet("ameen","zia"));
// // 
//  let add =(a:number,b:number)=>{
//   return a+b;
// }
// console.log(add(4,5));
// function sumAll (sum:number,...sum1:number[]){
// //console.log(num1);
// //console.log(num2);
// //console.log(...other);
// return sum * sum1;
// }
// console.log(sumAll(1,2));
// let object :{name:string; value:number;age:number} ={
//   name:"aqsa",
//   value:32,
//   age:12
// }
// console.log(object);
// Anonymous function
// let test = function (){
//   return "hello world";
// }
// console.log(test());
// const student :{
//   name:string;
//   age:number;
// } ={
//   name:"ali",
//   age:12
// }
// console.log(student);
// type alias
//object 
// type generative = {
//   name:string;
//   age:number;
// }
// let detail :generative ={
//   name:"aqsa",
//   age:23
// };
// console.log(detail);
// let hello :generative ={
//   name:"ali",
//   age:23
// }
// console.log(hello);
// //function
// type generatives = (a:number, b:number) => number
// let addNumbers :generatives = (a,b) => a + b
// console.log(addNumbers(2,2));
// // type literal
// let busy: "aqsa"| "aliza"|23|"sammi";
// busy = "aliza";
// busy = "aqsa";
// busy = 23;
// busy = "sammi"
// console.log(busy);
// // type union 
// let details: string|number |boolean;
// details = "hello";
// //detail ="hello";
// details = 123;
// details = true;
// //index signature
// let x :{a:number,[b:string]:any}
// x = {
//   a:1,
//   b:"hello",
//   c:true
// }
// // intersection 
// type wresting = {
//   name:string;
//   age:number;
// }
// type Intersection ={
//   hobbies:string;
//   weight:number;
// }
//  type result = wresting & Intersection
//  let wrestler :result = {
//   name:"ali",
//   age:12,
//   hobbies:"wrestling",
//   weight:65
//  }
//  console.log(wrestler);
//array
var fruitname = ["apple", "banana", "orange"];
console.log(fruitname[3]);
// console.log(fruitname.length);
// let matrix :number[][] =[
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// console.log(matrix[1][2]);
//array of obj
// type obj ={
//   name:string;
//   value:number;
//   edu:string
// };
// let message : obj[] =[
//   {name:"aqsa",value:777,edu:"html"},
//   {name:"ali",value:78,edu:"html"}
// ]
// console.log(message);
//let focused = ["html"]
//focused.splice(0,3,"kashif")
//focused.splice(1,0,"safia")
//focused.slice(0,3)
//focused.reverse()
//focused.split("").reverse().join("")
//console.log(focused.slice(0,3));
//console.log(focused.split("").reverse().join(""));
// console.log(typeof NaN);
// console.log(typeof null);
// let tuple:[number,[string,boolean]] = [2,["ali",true]]
// console.log(tuple[1][1]);
// function add (arg:number, arg1:number):number
// function add(arg:string, arg1:string):string
// function add(arg:any, arg1:any):any{
//   return arg + arg1
// }
// console.log(add("hello","world"));
// //console.log(add(2,3));
// function error(message: string): never {
//   throw new Error(message);
// }
//  console.log(error("Error"));
// // Inferred return type is never
// function fail() {
//   return error("Something failed");
// }
// console.log(fail());
// // Function returning never must not have a reachable end point
// function infiniteLoop(): never {
//   while (true) {}
// }
// console.log(infiniteLoop());
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
function greeter(fn) {
    return;
}
//console.log(greeter());
var x = 7;
var y, x = (void 0).return;
 * x;
console.log(y(x));
