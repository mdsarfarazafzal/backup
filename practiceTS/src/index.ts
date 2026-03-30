let sales: number[] = [1000, 2000, 3000];
let product: [string, number] = ["Book", 100]; // tuple - fixed length array with different types of values
// enum Size { Small = 1, Medium, Large } // enum - a way to define a set of named constants
const enum Size {
  Small = 1,
  Medium,
  Large,
} // const enum - a way to define a set of named constants that are inlined at compile time
let mySize: Size = Size.Medium; // enum value

type Employee = {
  id: number;
  name: string;
  join: (date: Date) => void;
}; // type alias - a way to define a custom type

type EmployeeWithDepartment = Employee & {
  department: string;
}; // intersection type - a way to combine multiple types into one

interface EmployeeInterface {
  id: number;
  name: string;
  join: (date: Date) => void;
} // interface - a way to define a contract for an object

const employeeInterface: EmployeeInterface = {
  id: 1,
  name: "Sarfaraz",
  join: (date: Date) => {
    console.log(
      `Employee ${employeeInterface.name} joined on ${date.toDateString()}`,
    );
  },
};

const employee: EmployeeWithDepartment = {
  id: 1,
  name: "Sarfaraz",
  join: (date: Date) => {
    console.log(`Employee ${employee.name} joined on ${date.toDateString()}`);
  },
  department: "IT",
};

const intern: Employee = {
  id: 1,
  name: "Sarfaraz",
  join: (date: Date) => {
    console.log(`Employee ${intern.name} joined on ${date.toDateString()}`);
  },
};

type AddFunc = (a: number, b: number) => number; // function type - a way to define the type of a function

type isLoggedIn = boolean | string; // union type - a way to define a type that can be one of several types
type Quantity = 50 | 100; // literal type - a way to define a type that can only be a specific value
type Metric = "cm" | "inch"; // literal type - a way to define a type that can only be a specific value
type Fact = true | false; // literal type - a way to define a type that can only be a specific value

const add: AddFunc = (a, b) => a + b;

function sum(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 4));

intern.join(new Date());

console.log(mySize);

console.log(sales);
console.log(product);

class MyClass {
  static readonly id = "abc123";
}

console.log(MyClass.id);
