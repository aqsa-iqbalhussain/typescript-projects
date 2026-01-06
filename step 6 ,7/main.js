// // explict casting
// let myname: unknown = "Zia";
// console.log((myname as string));
// console.log((<string> myname).length)
// let friendName : any = 4567;
// console.log(<number> friendName);
// console.log(friendName as number);
//enum
//Return index
var color3;
(function (color3) {
    color3[color3["red"] = 0] = "red";
    color3[color3["blue"] = 1] = "blue";
    color3[color3["green"] = 2] = "green";
    color3[color3["yellow"] = 3] = "yellow";
})(color3 || (color3 = {}));
;
console.log(color3["green"]);
// enum fruit {apple,pea,orange,mango}
// let a : fruit = fruit.apple;
// console.log(a);
//return value
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
    color[color["green"] = 3] = "green";
    color[color["pink"] = 4] = "pink";
    color[color["black"] = 5] = "black";
})(color || (color = {}));
;
var a = color[3];
console.log(a);
var things;
(function (things) {
    things[things["pencil"] = 0] = "pencil";
    things[things["ruler"] = 1] = "ruler";
    things[things["box"] = 2] = "box";
    things[things["pen"] = 3] = "pen";
    things[things["bag"] = 4] = "bag";
    things[things["book"] = 5] = "book";
    things[things["chair"] = 6] = "chair";
})(things || (things = {}));
;
console.log(things[3]);
//define index
var transport;
(function (transport) {
    transport[transport["bus"] = 3] = "bus";
    transport[transport["auto"] = 5] = "auto";
    transport[transport["car"] = 8] = "car";
    transport[transport["suzuki"] = 20] = "suzuki";
})(transport || (transport = {}));
console.log(transport.suzuki);
