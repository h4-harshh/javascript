// // array destructuring 
// const myArray = ["value1", "value2", "value3","value4"];
// // let myvar1 = myArray[0];
// // let myvar2 = myArray[1];
// // console.log("value of myvar1", myvar1);
// // console.log("value of myvar2", myvar2);
// let [myvar1, myvar2, ...myNewArray] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);


const array1=["item1","item2","item3","item4","item5"];

// let [var1,var2]=array1;
// console.log("var1",var1);
// console.log("var2",var2);
// console.log("var3",var3);

// let [var1, ,var2]=array1;
// console.log("var1",var1);
// console.log("var2",var2);

let [var1,var2,...array2]=array1;
console.log("var1=>",var1);
console.log("var2=>",var2);
console.log(array2);
