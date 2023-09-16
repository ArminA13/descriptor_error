// Create a deep clone of an object while preserving property descriptors. Ensure that the cloned object
// has the same property attributes as the original.

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const clone = Object.create(Object.getPrototypeOf(obj), descriptors);

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

const originalObject = {
    name: "Ivan",
    conutry: {
        city: "Yerevan",
    },
};

Object.defineProperty(originalObject, "name", {
    writable: false,
    configurable: true,
});

const clonedObject = deepClone(originalObject);

console.log(clonedObject.name);

const originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, "name");
const clonedDescriptor = Object.getOwnPropertyDescriptor(clonedObject, "name");

console.log(originalDescriptor.writable === clonedDescriptor.writable);
