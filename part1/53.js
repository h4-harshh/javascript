// // param destructuring 

// // object 
// // react 

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

// // function printDetails(obj){
// //     console.log(obj.firstName);
// //     console.log(obj.gender);
// // }


function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);


// -------------------------------------------------------------

const users={
    user1:"harsh",
    age:21,
    gender:"male"
}

function user({user1,age,gender})
{
    console.log(user1);
    console.log(age);

}

user(users);