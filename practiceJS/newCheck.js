console.log(JSON.parse('["s", 2, {"abcd":true}]'));
// parse takes a string that is a representation of a valid json like object, array, number, boolean, string
const str = "abcd";
console.log(JSON.parse(`"${str}"`));
console.log(typeof JSON.parse('["s", 2, {"abcd":true}]')[1]);
console.log(typeof JSON.parse('1'));

const testObject = {
    [Math.random()]: "hey"
}
console.log(testObject);

const key = "yo";
const obj = {
    [key]: "yes"
}
console.log(obj[key]);
console.log(obj['yo']);
console.log(testObject);
