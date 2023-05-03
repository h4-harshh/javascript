
// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

// // don't do this mistake 

// // user1.about();
// const myFunc = user1.about.bind(user1);
// myFunc();

const user1={
    firstname:"harsh",
    age:20,
    about:function()
    {
        console.log(`${this.firstname},${this.age}`)
    }
}

const myfunc=user1.about.bind(user1);
myfunc(); 