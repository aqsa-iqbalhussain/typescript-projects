//callback function 


function friendName(name: string){
    console.log(`hello ${name}`);
    
}
function neighborName(name: string, callback:any) {
    console.log( `my all neighbors names are ${name}`);
    callback("anila");
}

neighborName('john', friendName); // invoking the callback function with a parameter 'john'


