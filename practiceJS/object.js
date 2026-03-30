const moreSecret = Symbol("testing");
const normalObject = {
  yo: "ha",
  [moreSecret]: "tested",
};
console.log(normalObject[moreSecret]);

// console.log(normalObject[yo]); - error
console.log(normalObject["yo"]);
console.log(normalObject.yo);

console.log(Object.getOwnPropertyNames(normalObject));

const secret = Symbol("abcd");
const newObject = {
  [secret]: "efgh",
};
Object.defineProperty(newObject, "myProp", {
  value: "haha",
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.defineProperties(newObject, {
  [secret]: {
    writable: false,
  },
});
// newObject.myProp = "hehe"; - error
console.log(newObject);
console.log(Object.getOwnPropertyDescriptors(newObject));
// console.log(Object.hasOwn(newObject, [secret].toStringTag()));

// console.log(newObject['secret']); - won't work
// console.log(newObject.secret); - won't work
