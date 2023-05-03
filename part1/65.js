// // splice method 
// // start , delete , insert 

// const myArray = ['item1', 'item2', 'item3'];

// // delete
// // const deletedItem = myArray.splice(1, 2);
// // console.log("delted item", deletedItem);
// // insert 
// // myArray.splice(1, 0,'inserted item');

// // insert and delete 
// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
// console.log("delted item", deletedItem);
// console.log(myArray);

// ------------------------------------------=====
const array=[1,2,3,4,5,6,7,8,9,10];
const deleteditems=array.splice(1,6,88,99);
console.log(array);
console.log(deleteditems);