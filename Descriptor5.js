function extend(obj, properties) {
    for (const propName in properties) {
      if (properties.hasOwnProperty(propName)) {
        Object.defineProperty(obj, propName, properties[propName]);
      }
    }
  }
  
  const myObj = { prop1: "value1" };
  
  extend(myObj, {
    prop2: { value: "value2", writable: false },
    prop3: {
      get() {
        return "computed";
      },
    },
  });
  
  console.log(myObj.prop1); 
  console.log(myObj.prop2); 
  console.log(myObj.prop3); 
  

  myObj.prop2 = "new value";
  console.log(myObj.prop2);

  