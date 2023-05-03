// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// const user1 = {
//     firstName : "harshit",
//     age: 8,   
// }
// const user2 = {
//     firstName : "mohit",
//     age: 9,
    
// }

// // apply
// // about.apply(user1, ["guitar", "bach"]);
// // const func = about.bind(user2, "guitar", "bach");
// // func();

function about(hobby1,hobby2){
    console.log(`the firstname is ${this.username} and the age is ${this.age} hobby1=${hobby1}  hobby2=${hobby2}`);
}

const user1={
    username:'harsh',
    age:20,
    gender:'male',
    about1:function (){
        console.log(`the gender is ${this.gender}`);
    }
}


const user2={
    username:'nikhil',
    age:21,
    gender:'MALE',
}

// about.call(user1,"cricket","volley");
// about.call(user2);
about.apply(user1,["circket","volley"]);
about.apply(user1,)
