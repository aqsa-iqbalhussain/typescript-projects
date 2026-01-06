// // function greet (): number {
// //  let age =18 ; 
// //  return age;  
// // }
// // console.log(greet())
// function sum(){
//     let result = 2+2
//     return result ;
// }
// sum()
// let friends =["samra","mehwish","aqsa"]
// let joinNames = friends.join(",");
// console.log(joinNames);
// let friend =["samra","mehwish","aqsa"]
// function join (...arr :string []){
//     console.log(arr);
// }
// join ("aqsa","samra","mehwish");
var friend = ["samra", "mehwish", "aqsa"];
function join() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr.join(","));
}
join("aqsa", "samra", "mehwish");
function login(email, password) {
    console.log(login);
}
login("4", "8");
