// Implement an Immutable class that creates objects with immutable properties. Any attempt to
// modify a property should result in an error.


function Immutable(obj) {
    let o = Object.freeze(obj);
    return o;
};

const oldObj = {
    name: "Ivan",
    age: 18,
};

oldObj.name = "Vanya"

let result  = new Immutable(oldObj);
console.log(result);
console.log(Object.isFrozen(result));