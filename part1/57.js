// // map method 
// // const numbers = [3,4,6,1,8];

// // const square = function(number){
// //     return number*number;
// // }

// // const squareNumber = numbers.map((number, index)=>{
// //     return index;
// // });
// // console.log(squareNumber);

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// // const userNames = users.map((user)=>{
// //     return user.firstName;
// // });

// // console.log(userNames);

// // --------------------------------------------------------

// // function function1(user)
// // {
// //     return user.firstname;
// // }


// const usernames=users.map((user)=>{
//     return user.firstname;
// });

// console.log(usernames);


const person=[
    {firstname:"nikhil",age:19},
    {firstname:"harsh",age:20},
    {firstname:"nitin",age:21},
]


const array=person.map(function(user){
    return user.firstname;
});

console.log(array);

