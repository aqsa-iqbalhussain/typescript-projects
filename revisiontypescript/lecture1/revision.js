// variable
var color = "black";
console.log(color);
// change variable
var favouritecolour = "yellow";
favouritecolour = "blue";
console.log(favouritecolour);
// print only blue
// print both yellow and blue
var colr = "yellow";
console.log(colr);
colr = "blue";
console.log(colr);
// string
var userName = "aqsa";
var age = 66;
var student = false;
var education = "https.//www.bbsul";
console.log(userName, age, student, education);
// constant
var gravity = 9.8;
console.log(gravity);
// string concatenation
var firstName = "aqsa";
var lastName = "iqbal";
var fullName = firstName + lastName;
console.log(fullName);
// template literals
var num1 = "aqsa";
var num2 = "khan";
var fullname = "".concat(num1, " ").concat(num2);
console.log(fullname);
// operator 
console.log(2 + 5);
console.log(9 * 2);
console.log(5 % 2);
console.log(7 - 2);
console.log(Math.pow(3, 3));
var start = 44;
var end = 50;
var total = end - start;
console.log(total);
// space create
var firsName = "aqsa";
var endName = "iqbal";
console.log("my name is ".concat(firstName, " and my father name is ").concat(endName));
// unary operator
var index = 10;
++index; // 10+1=11
++index; //11+1=12
++index; //12+1=13
console.log(index);
var a = 10;
var b = 20;
a++; //10+1=11
a++; //11+1=12
a++; //12+1=13
b--; //20-1=19
b--; //19-1=18
console.log(a);
console.log(b);
// home work answer=22
var x = 5;
var y = 2;
var z = ++x + x++ + --y + y-- + x + y++ + y;
//            (5+1=6) + (6+1=7) + (2-1=1) + (1-1=0) + 5 + (o+1=1) + (2)
// 6+7+1+0+5+1+2=22
console.log(z);
//practice answer=38
var index1 = 10;
var result = ++index1 + ++index1 + 6 + --index1 - 2; // (10+1=11) + (11+1=12) + 6 + (12-1=11) - 2 
// 11+12+6+11-2=38
console.log(result);
// assignment operator + - * /
var name1 = 20;
name1 *= 50;
console.log(name1);
// comparision operator (it give answer with boolean)
var name2 = 50;
var name3 = 100;
console.log(name2 == name3);
// combining operator
console.log(56 <= 56);
console.log(67 <= 77);
