// every method
// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans = userCart.every((cartItem)=>cartItem.price < 35001);
console.log(ans);

// -----------------------------------------------

const arr=[2,4,6,8,10];
const ans2=arr.every((number)=>{return number%2==0});
console.log(ans2);

