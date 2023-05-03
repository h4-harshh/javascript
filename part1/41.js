// // object destructuring
// const band = {
//   bandName: "led zepplin",
//   famousSong: "stairway to heaven",
//   year: 1968,
//   anotherFamousSong: "kashmir",
// };

// let { bandName, famousSong, ...restProps } = band;
// console.log(bandName);
// console.log(restProps);

const fruits={
    item1:"fruit1",
    item2:"fruit2",
    item3:"fruit3",
    item4:"fruit4",
    item5:"fruit5",
}

let {item1:f1,item2:f2,...rem}=fruits;
console.log(f1);
console.log(f2);
console.log(rem);

