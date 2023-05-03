// // function returning function 

// function myFunc(){
//     function hello(){
//         return "hello world"
//     }
//     return hello;
// }

// const ans = myFunc();
// console.log(ans());

// ------------------------------------------------/

function myfun()
{
    function hello(){
        console.log("hello world");
    }

    return hello;
}

const ans=myfun();
console.log(ans());