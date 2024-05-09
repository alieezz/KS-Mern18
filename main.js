const newName = require("./day-1");

let name="Ali";

const updateName=(newvalue) => {
    name = newvalue;
};

newName(updateName, name);
console.log(name);