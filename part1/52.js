// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }

// const ans = addAll(4,5,4,2,10);
// console.log(ans);


// ---------------------------------------------------------

function sum(...a)
{
    let sum1=0;
    for(let i=0;i<a.length;i++)
    {
        sum1=sum1+a[i];
    }
    return sum1;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));