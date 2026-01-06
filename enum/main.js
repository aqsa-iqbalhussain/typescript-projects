// enum
// enum Color{
//     Red,
//     Green =4,
//     Yellow
// }
// let trafficLight: Color = Color.Red;
// if(trafficLight == Color.Red){
// console.log("stop");
// }
// enum color1{Red = 1, Green=2 ,Blue=4}
// console.log(color1.Green); //2
// console.log(color1[2]);//green
// console.log (color1["Green"])//2
// const enum color1{Red = 1, Green=2 ,Blue=4}
// console.log(color1.Green); //2
// console.log(color1[4]);//gre
// console.log (color1["Green"])//2
var Auth;
(function (Auth) {
    Auth[Auth["GOOLE"] = 0] = "GOOLE";
    Auth[Auth["FACEBOOK"] = 1] = "FACEBOOK";
    Auth[Auth["TWITTER"] = 2] = "TWITTER";
})(Auth || (Auth = {}));
function Login(authType) {
    if (authType == Auth.GOOLE) {
        console.log("LOGIN WITH GOOGLE");
    }
    else {
        console.log(" NOT LOGIN WITH GOOGLE");
    }
}
Login(Auth.GOOLE);
