//callback function 
function friendName(name) {
    console.log("hello ".concat(name));
}
function neighborName(name, callback) {
    console.log("my all neighbors names are ".concat(name));
    callback("anila");
}
neighborName('john', friendName); // invoking the callback function with a parameter 'john'
