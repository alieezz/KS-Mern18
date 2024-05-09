const arr=[1,"ali", true, null, undefined, {},[]];

//Methods: push,pop,shift,unshift,indexof,includes;
//Map,filters,reduce,find,flat.flatMap

arr[8]='newValue';
const [a]=arr; //array Destructure
const[c, ...b] = arr; //spread operator
console.log(a);


console.log(arr[8]);