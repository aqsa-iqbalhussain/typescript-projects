
// object
let studentData ={
    name: "John",
    age: 25,
    grades:[87,90,85]

}

//update properties
studentData.name = "Aliza"
console.log(studentData.grades[2])

//add new property
studentData["rollNumber"]= 23;
console.log(studentData)

// object
// let objeectname={
    // key:value,
    // key:value,
    // key:value,
    // key:value,
//}

//type interface (define customized datatype)

interface Student{
    name:string,
    age:number,
    grades:number[]
}

// define custom type property
