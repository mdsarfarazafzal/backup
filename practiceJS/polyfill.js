Function.prototype.myBind = function (...args) {
  const obj = this;
  console.log(obj);
  
  const parms = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...parms, ...args2]);
  };
};

const student = {
  name: "Alice",
};
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const greetAlice = greet.myBind(student, "Hello");
greetAlice("!");
