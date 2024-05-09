// //Spread and Rest Operator
// const array1 =[1,2,3,4,5,6];
// const array2 =[7,8,9,10,11];
// const [a, ...b] = array;

const array=[1,2,3,4,5,6];
const arr1=[...array, 60,70,80,80];
console.log(arr1);


let x =[1,2,3,4,5,6,7,89,23];
let y = [34,54,65,4,443,45,433];
let z = [...x, ...y];
console.log(z);

//Spread and Rest operator in arrays 
function t(a,...b){

};

t(1,2,3,4,5,6);
console.log(t);
