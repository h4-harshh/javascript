// function hello(){
//     console.log("hello world");
// }

// // javascript function ===> function  + object

// // console.log(hello.name);

// // you can add your own properties 
// // hello.myOwnProperty = "very unique value";
// // console.log(hello.myOwnProperty);

// // name property ---> tells function name;

// // function provides more usefull properties.


// // console.log(hello.prototype); // {}

// // only functions provide prototype property

// // hello.prototype.abc = "abc";
// // hello.prototype.xyz = "xyz";
// // hello.prototype.sing = function(){
// //     return "lalalla";
// // };
// // console.log(hello.prototype.sing());


function harsh()
{
    return `my name is harsh`;
}

// console.log(harsh());
// console.log(harsh.prototype);
// if(harsh.prototype)
// {
//     console.log(true);
// }
// else{
//     console.log(false);
// }
harsh.prototype.age=18;
harsh.prototype.gender="male";
console.log(harsh.prototype.age);

harsh.prototype.sing=function(){
    return "lalaal";
}
console.log(harsh.prototype.sing());
