// // primitve vs reference data types
// // let num1 = 6;
// // let num2 = num1;
// // console.log("value is num1 is", num1);
// // console.log("value is num2 is", num2);
// // num1++;
// // console.log("after incrementing num1")
// // console.log("value is num1 is", num1);
// // console.log("value is num2 is", num2);


// // reference types 
// // array 
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("after pushing element to array 1");
// console.log("array1", array1);
// console.log("array2", array2);


// --------------------
// primitive
let num1=2;
let num2=num1;
num1=7;
console.log(num1);
console.log(num2);

//reference
let fruit1=["fruit1","fruit2","fruit3","fruit4"];
let fruit2=fruit1;
console.log("array1",fruit1);
console.log("array2",fruit2);

fruit1[1]="fruit0";

console.log("the values after updation in array1");
console.log("array1",fruit1);
console.log("array2",fruit2);


