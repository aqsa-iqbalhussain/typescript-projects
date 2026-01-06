// async function test (){
//     return "hello world"
// }

// console.log(test());

// async function message (){
//     console.log("1");
//     await console.log("2");
//     console.log("3");
    
    
// }

// message();
// console.log("4");

//error handling with try and catch

async function detail(){
    try{
        console.log("1");
        await console.log("2");
        console.log("3");

    } catch (error){console.log("error");
    }

}
detail();
console.log("4");


