// Create a function that takes an object and a set of validation rules as property descriptors. Validate
// each property according to the rules and return a new object with validated properties.


function validated(obj,defineProperties) {
    newObj = {};
    for (let key in obj) {
        Object.defineProperty(newObj, key, {...defineProperties[key], value: obj[key]});
    }
    return newObj;
};

const obj = {
    name: "Ivan",
    age: 18,
};

const rules = {
    name: {
        enumerable: true,
        writable: false,
    },
    age: {
        enumerable: true,
        writable: true,
        configurable: true,
    },
};


let result  = validated(obj, rules);
console.log(result);