// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1.about());
// console.log(user3.about());

// const usermethod={
//     about:function(){
//        return  `this is ${this.firstname} and age is ${thsi.age}`;
//     },
//     is18:function(){
//         return this.age>=18;
//     },
// }
// function createuser(firstname,lastname,age,gender,address)
// {
//     const user={};
//     user.firstname=firstname;
//     user.lastname=lastname;
//     user.age=age;
//     user.gender=gender;
//     user.address=address;
//     user.about=usermethod.about;
//     user.is18=usermethod.is18;
//     return user;
// }

// const user1=createuser("harsh","kumar",19,"male","luhsana");
// console.log(user1);
// const user2=createuser("nikhil","singh",20,"male","lhsn");
// console.log(user2);











// ========================================
const usermethod=
{
    about:function()
    {
        return `${this.firstname} age is ${this.age}`;
    },
    is18:function()
    {
        return this.age>18;
    }
}

function createuser(firstname,lastname,age,gender,address,)
{
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.age=age;
    user.address=address;
    user.gender=gender;
    // user.about=function()
    // {
    //     return `${this.firstname} age is ${this.age}`;
    // };
    // user.is18=function()
    // {
    //     return this.age>18;
    // }

    // user.about=usermethod.about;
    // user.is18=usermethod.is18;
    return user;
}

const user1=createuser('harsh','kumar',20,'male','luhsana')
console.log(user1);
console.log(user1.about())