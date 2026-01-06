// intersection type

type personalDetail = {
    name: string;
    age: number;
    gender: string;
    salary: number;
}

type professionalDetail = {
    title: string;
    company: string;
}

type information = personalDetail & professionalDetail

let message : information={
    name: "John",
    age: 25,
    salary: 50000,
    title: "Software Engineer",
    company: "ABC Corp",
    gender: "Male",


}

console.log(message);
