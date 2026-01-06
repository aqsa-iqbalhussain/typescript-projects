// recursive function
function recursivefun(condition) {
    if (condition >= 0) {
        console.log("hello aqsa");
        recursivefun(condition - 1);
    }
}
recursivefun(5);
function recursive(count) {
    if (count >= 0) {
        console.log("hello world");
        recursive(count - 1);
    }
}
recursive(4);
