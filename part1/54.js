// // callback functions 

// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit");
// }


// myFunc(myFunc2);

function fun1()
{
    console.log("inside function 1");
}

function fun2(fun1)
{
    fun1();
    console.log("inside function 2");
}

fun2(fun1);