// object
var studentData = {
    name: "John",
    age: 25,
    grades: [87, 90, 85]
};
//update properties
studentData.name = "Aliza";
console.log(studentData.grades[2]);
//add new property
studentData["rollNumber"] = 23;
console.log(studentData);
