// Property Descriptor
// . Write an object with getter/setter field name.

const obj = {
    _name: "",
    get name() {
      return this._name;
    },
    set name(value) {
      this._name = value;
    },
  };
  
Object.defineProperty(obj, "nameLength", {
    get() {
      return this._name.split(', ').map(word => [word, word.length]);
    }
});


obj.name = "Hamlet, Artavazd";
console.log(obj.nameLength);
console.log(obj._name);
// Output: [['Hamlet', 6], ['Artavazd', 8]]
  