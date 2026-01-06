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




enum Auth{
    GOOLE,
    FACEBOOK,
    TWITTER
} 

function Login (authType:Auth){
    if(authType == Auth.GOOLE){
    console.log("LOGIN WITH GOOGLE");
    }else{
        console.log(" NOT LOGIN WITH GOOGLE");
    }
}Login (Auth.GOOLE)