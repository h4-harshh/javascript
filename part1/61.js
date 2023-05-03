// find method 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

// const users = [
//     {userId : 1, userName: "harshit"},
//     {userId : 2, userName: "harsh"},
//     {userId : 3, userName: "nitish"},
//     {userId : 4, userName: "mohit"},
//     {userId : 5, userName: "aaditya"},
// ];

// const myUser = users.find((user)=>user.userId===3);
// console.log(myUser);
// ------------------------------------------------------
// const array=[1,5,6,3,2,55,22,11,];
// const ans=array.find((array)=>{return array===4});
// console.log(ans);

const user=[
    {userId:1,username:"harsh"},
    {userId:2,username:"nikhil"},
    {userId:3,username:"babita"},
    {userId:4,username:"nitin"},
    {userId:5,username:"sona"},
]

const myuser=user.find((user)=>{return user.username.length===4});
console.log(myuser);