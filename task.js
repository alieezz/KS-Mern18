//Array Pop kicks out the last entry from the array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
fruits.pop();
console.log(fruits)

//Array Push enters a number in the end of the array 
const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit)
fruit.push("Kiwi")
console.log(fruit)

//Array Shift method removes the top value and shift the indexes of the remaining elements
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
fruit1.shift();
console.log(fruit1)

//Array unShift method adds the top value and shift the indexes of the remaining elements
const fruit2 = ["Banana", "Orange", "Apple", "Mango"];
fruit2.unshift("Watermelon");
console.log(fruit2)

//Array indexOf methods returns back that the element exists at that index or not 
const fruit3 = ["Banana", "Orange", "Apple", "Mango"];
let index = fruit3.indexOf("Apple", -1);
console.log(index)

//Array includes methods returns back a boolean value that if the checked entry exist in an array or not
const fruit5 = ["Banana", "Orange", "Apple", "Mango","Orange"];
let inc = fruit5.includes("Banana");
console.log(inc)
