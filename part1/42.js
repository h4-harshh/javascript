// // objects inside array 
// // very useful in real world applications

// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]
// for(let user of users){
//     console.log(user.firstName);
// }

const person=[
    {userid:1,firstname:"harsh",age:"19",gender:"male"},
    {userid:2,firstname:"nikhil",age:"20",gender:"male"},
    {userid:3,firstname:"nitin",age:"21",gender:"male"}
]

const [{firstname:name_of_first_user},user2,...rem]=person;
// console.log(name_of_first_user);
// console.log(user2);
// console.log(rem);

for(let user of person)
{
    console.log(user.firstname);
}