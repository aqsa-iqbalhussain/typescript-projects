// //         //RESOLVE

// // let promise = new Promise((resolve,reject)=>{
// //      resolve("success")

// //  })
// //  promise.then((res)=>{
// //      console.log(res) // success

// // })

// //                         /// REJECT
// // let promise1 = new Promise((resolve,reject)=>{
// //     reject("failure!!!")
// // })
// // promise1.catch((err)=>{
// //     console.log(err);
    

// // })


// const returnMoney= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         //resolve("success")
//         reject("failure!!!")

//     },3000)

// })

// returnMoney.then((value)=>{
//     console.log(value);
    
//     console.log("I will return you money now")

// }).catch((value)=>{
//     console.log(value);
    
//     console.log("I won't return you money now")
 
// })


function washing (){
    console.log("washing started");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("washing completed")
        },3000)

    })
    
}

function soaking (){
    console.log("soaking started");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("soaking completed")
        },3000)

    })
    
}

function drying(){
    console.log("drying started..");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("drying completed")
        },3000)

    })
    
}

// washing().then((value)=>{
//         console.log(value);
//          return soaking();
        
//     })
//     .then((value)=>{
//         console.log(value);
//         return drying();
        
    
//     })
//     .then((value)=>{
//         console.log(value);
        
//     })
//     .catch(()=>{
//         console.log();
        
//     })


async function runwashingmachine(){
    try{
       const resuil= await washing();
       console.log(resuil);
        const result1=await soaking();
        console.log(result1);
        
        const result2=await drying();
        console.log(result2);
        
        
        
    }catch(err){
        console.log(err);
        
    }
    
 
}
runwashingmachine();
    

