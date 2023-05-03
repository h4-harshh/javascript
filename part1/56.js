// // important array methods 

//  const numbers = [4,2,5,8];

// // function myFunc(number, index){
// //     console.log(`index is ${index} number is ${number}`);
// // }

// // numbers.forEach(function(number,index){
// //     console.log(`index is ${index} number is ${number}`);
// // });

// // numbers.forEach(function(number, index){
// //     console.log(number*3, index);
// // })

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// // users.forEach(function(user){
// //     console.log(user.firstName);
// // });

// // users.forEach((user, index)=>{
// //     console.log(user.firstName, index);
// // })

// // for(let user of users){
// //     console.log(user.firstName);
// // }


// -----------------------------------------------------------

// const numbers=[2,3,3,5,3];

// function myfun(number,index)
// {
//     console.log(`the number is ${number} and the index is ${index}`);
// }


// numbers.forEach(myfun);

const users=[
    {firstname:"nikhil",gender:"male"},
    {firstname:"harsh",gender:"male"},
    {firstname:"nitin",gender:"male"},
]

users.forEach(function(user)
{
    console.log(`${user.firstname}`);
})
