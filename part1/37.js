// difference between dot and bracket notaion
// const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]

// }

// console.log(person["person hobbies"]);
// person[key] = "harshitvashisth@gmail.com";
// console.log(person);

const key="email";
const person={
    name1:"nikhil",
    age:21,
}
console.log(person);
console.log(person.name1);
person.gender="male";

// person.key="harsh@gmail.com";wrong this is main difference
person[key]="harsh@gmail.com";


console.log(person);