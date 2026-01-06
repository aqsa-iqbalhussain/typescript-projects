// recursive function

function recursivefun (condition :number){
    if(condition >= 0){
        console.log("hello aqsa");
        recursivefun(condition - 1);
    }

}
recursivefun(5)


function recursive(count: number){
    if(count >= 0){
        console.log("hello world");
        recursive(count -1)
        
    }
}
recursive(4)