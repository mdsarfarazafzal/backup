// "use strict";
// const obj1 = {
//   a: 10,
//   obj2: {
//     a: 20,
//     x: () => {
//       console.log(this);
//     },
//   },
//   y: function () {
//     console.log(this);
//   },
// };
// obj1.y();
// obj1.obj2.x();
//"use strict";
// const student = {
//   name: "Alice",
// };
// function greet() {
//   console.log("Hello, " + this.name);
// }
// function x() {
//   console.log(this);
// }

// // window.greet();

// greet.call(student);
const obj1 = {
  a: 10,
  b: function () {
    const c = () => {
      console.log(this.a);
    };
    c();
  },
};
obj1.b();
