// . Create a function that validates an object's properties based on a schema using property descriptors.
// It should enforce types, required properties, and custom validation functions.

const schema = {
name: {
value: "",
writable: true,
validate: (value) => typeof value === "string",
},

age: {
value: 0,
writable: true,
validate: (value) => typeof value === "number" && value >= 18,
},
};

function validateObj(obj, schema) {
    for(const propName in schema) {
        if(schema.hasOwnProperty(propName)) {
            const {value, writable, validate} = schema[propName];
            const propValue = obj[propName];

            if(value !== undefined && propValue === undefined) {
                throw new Error (`Property ${propName} is required`);
            }

            if(validate && !validate(propValue)) {
                throw new Error(`Property ${propName} is validation faild`)
            }

            Object.defineProperty(obj, propName, {
                value: propValue,
                writable
            })
        }
    }
    return true;

}

const obj = {
    name: "Ivan",
    age: 12,
};
  
  try {
    validateObj(obj, schema);
    console.log("Object is valid.");
  } catch (error) {
    console.log(error.message);
  }
  
  console.log(obj);