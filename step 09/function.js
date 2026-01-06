// // NAMED FUNCTION 
// function xyz (a:number,b:number) : number {
//     return a*b;
// }
// console.log(xyz(5,5));
// //anonymous function 
// let add =function (x:number,y:number):number {
//     return x/y;
// }
// console.log(add(5,5));
// // anonymous function with explict type
// let add1 : (x:number,y:number)=>number = function (x:number,y:number):number{
//     return x/y;
// }
// console.log(add1(5,10));
// let add2 : (a:number,b:number)=>number = function (x:number,y:number):number{
//     return x+y;
// }
// console.log(add2(5,10));
//console.log(typeof NaN);
// // LAamda function
var multiply = function (x, y) { return x * y; };
console.log(multiply(2, 5));
// function name with optional parameter
function addname(firstname, lastname) {
    if (lastname)
        return firstname + " " + lastname;
    else
        return "hello ".concat(firstname);
}
//
console.log(addname("ali"));
//console.log(addname("ali","ahmed"));
