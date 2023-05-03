// // methods
// // function inside object

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 = {
//     firstName : "harsh",
//     age: 8,
//     about: personInfo
// }
// const person2 = {
//     firstName : "mohit",
//     age: 18,
//     about: personInfo
// }
// const person3 = {
//     firstName : "nitish",
//     age: 17,
//     about: personInfo
// }

// person1.about();
// person2.about();
// person3.about();


function personinfo(){
    console.log(`the firstname is ${this.firstname} and the age is ${this.age}`);
}

const obj1={
    'firstname':'harsh',
    age:21,
    about:personinfo
}

const obj2={
    'firstname':'nikhil',
    age:19,
    about:personinfo
}

const obj3={
    'firstname':'nitin',
    age:18,
    about:personinfo
}

obj1.about();
obj2.about();
obj3.about();




