const obj1={
    name : "Ali",
    age : 24,
    courses : ["Mern" , "DS" , "CS"],
};

const obj2={
    name : "Ali",
    age : 24,
    courses : ["Mern" , "DS" , "CS"],
};

obj1["Gender"] = "M"; //adding a new key
obj1.newKey="value"; //appending anything in a n object
console.log(obj1)
const arr=[obj1,obj2];
console.log(arr)

console.log(Object.keys(obj1))// to print object keys
console.log(Object.values(obj1))//to print object values
console.log(Object.entries(obj1))//to print the number of values

const val = Object.entries(obj1);
console.log(val[1][1]);

const check =({name}) => { //destructring of object

    console.log(name);
}

check(p1);