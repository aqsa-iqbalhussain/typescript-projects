// // explict casting
// let myname: unknown = "Zia";
// console.log((myname as string));
// console.log((<string> myname).length)



// let friendName : any = 4567;
// console.log(<number> friendName);
// console.log(friendName as number);


//enum


//Return index
 enum color3 {red,blue,green,yellow};
 console.log(color3["green"])

// enum fruit {apple,pea,orange,mango}
// let a : fruit = fruit.apple;
// console.log(a);

//return value

enum color {red =1,blue,green,pink,black};
let a : string = color[3];
console.log(a);

enum things{pencil,ruler,box,pen,bag,book,chair};
console.log(things[3]);


//define index

enum transport {bus=3,auto=5,car=8,suzuki=20}
console.log(transport.suzuki);










