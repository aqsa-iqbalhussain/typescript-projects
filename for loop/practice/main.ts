
// // write a function checkEvenOdd that accepts numbers and prints whether it is even numbers
// function checkEvenOdd(num:number){
//     if(num % 2 == 0){
//         console.log("Even")
//     }
//     else{
//         console.log("odd");
//     }
// }
// checkEvenOdd(45);
// checkEvenOdd(4);



// //write a function "arrayOperations" that create an array of number , add a number to the end of the array,remove the first number
// //remove the middle number, and add a new number and print the modified array

// function arrayOperations(num: number){
//     let array:number[] =[1,2,3,4,5,6,7]
//     array.push(8,9),
//     array.shift(),
//     array.splice(3,1),
//     console.log(array)


// }
// arrayOperations(10);


// //write a function multiplies the element of the array by 2 and return modified array

// // function multiplies(num:number){
// //     let arr: number[] =[1,2,3,4,5,6,7,8,9];
// //     for (let i=0; i<arr.length; i++){
// //         arr[i] = arr[i] * 2;
// //     }
// //     console.log(arr);
        
// //     }

// //     multiplies(0);


// let num : number[]=[1,2,3,4,5]
// function multilplie(num:number[]){
//     for (let i=0; i<num.length; i++){
//         num[i] =num[i] *2
//     }
//     return num;
// }
// console.log(multilplie(num));



// //write a function findLargest that accepts an array of a number and return largest number

// let nums:number[]=[1,2,3,4,5,6]
// function findLargest (num:number[]){
//     let largest =num[0]
//     for (let i=0; i<nums.length; i++){
//         if(num[i]>largest){
//             largest = num[i]
//         }
//     }
//     return largest
// }
// console.log(findLargest(nums));



// //  write a function reverseString that accepts a string nd return the reverse string

// function reverseString (nums: number): string { return  reverseString(nums  * 2); }

// console.log(reverseString(10));



 function reverseString(str: string): string {
     return str.split("").reverse().join("");
 }

 console.log(reverseString("aqsa"));

// let fruit:string[] =["apple", "orange", "mango", "grapes","peach","watermelon","pineapple"]
// fruit.splice(2,4,"kiwi")

// console.log(fruit);








