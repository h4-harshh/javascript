// // filter method 

// const numbers = [1,3,2,6,4,8];



// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });
// console.log(evenNumbers);

// =======================================

const number=[1,2,3,4,5,6,7,8];

function fun1(num)
{
    return num%2===0;
}

const evennumber=number.filter(fun1);
console.log(evennumber);