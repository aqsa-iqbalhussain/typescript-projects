// polymorphism (diffrent form)
class Animal
{
    name: string
    constructor(name: string){
        this.name = name;
    }
    makesound(){
        console.log("General Sound!");
    }
}
class Dog extends Animal{
    makesound() {
        console.log("woof!!") // overwrite the makesound function 
        
    }

}
class cat extends Animal{
makesound() {
    console.log("meow meow")
    
}

}
let c1=new cat("tun tun");
c1.makesound();
let d1 =new Dog("bawoo");
d1.makesound();
