"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sales = [1000, 2000, 3000];
let product = ["Book", 100]; // tuple - fixed length array with different types of values
// enum Size { Small = 1, Medium, Large } // enum - a way to define a set of named constants
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {})); // const enum - a way to define a set of named constants that are inlined at compile time
let mySize = Size.Medium; // enum value
const employeeInterface = {
    id: 1,
    name: "Sarfaraz",
    join: (date) => {
        console.log(`Employee ${employeeInterface.name} joined on ${date.toDateString()}`);
    },
};
const employee = {
    id: 1,
    name: "Sarfaraz",
    join: (date) => {
        console.log(`Employee ${employee.name} joined on ${date.toDateString()}`);
    },
    department: "IT",
};
const intern = {
    id: 1,
    name: "Sarfaraz",
    join: (date) => {
        console.log(`Employee ${intern.name} joined on ${date.toDateString()}`);
    },
};
const add = (a, b) => a + b;
function sum(a, b) {
    return a + b;
}
console.log(add(2, 4));
intern.join(new Date());
console.log(mySize);
console.log(sales);
console.log(product);
class MyClass {
    static id = "abc123";
}
console.log(MyClass.id);
//# sourceMappingURL=index.js.map