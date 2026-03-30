// function composeFunctions(...fns) {
//     return function (...value) {
//         return fns.reduce((a, b) => b(a), value);
//     }
// }
// function add(args) {
//     return args.reduce((a,b)=>a+b,0);
// }
// function square(x) {
//     return x*x;
// }

// const composed = composeFunctions(add, square, (val)=>val+1);
// console.log(composed(1,2,3));

// While **Function Composition** is a pipeline for data (Input → Output), **Object Composition** is a building block system for behavior.

// Instead of a "Parent-Child" hierarchy where a class inherits everything from above, Object Composition is about **assembling** an object from small, reusable pieces.

// ---

// ### 1. The "Mixing" Approach (Mixins)

// In JavaScript, the most common way to do object composition is using `Object.assign()`. You define small objects that represent specific "abilities" and then merge them into a target object.

// ```javascript
// Small, reusable behaviors
const canEat = {
  eat: function () {
    console.log("Eating...");
  },
};

const canWalk = {
  walk: function () {
    console.log("Walking...");
  },
};

const canSwim = {
  swim: function () {
    console.log("Swimming...");
  },
};

// Compose a "Duck" object
const duck = Object.assign({}, canEat, canWalk, canSwim);

duck.eat(); // Works
duck.swim(); // Works

// ```

// ---

// ### 2. The "Functional" Composition (Factory Functions)

// This is the pattern most senior developers prefer. Instead of classes, you use functions to create objects. This avoids the `this` keyword mess entirely.

// ```javascript
const swimmer = (state) => ({
  swim: () => console.log(`${state.name} is swimming!`),
});

const flyer = (state) => ({
  fly: () => console.log(`${state.name} is flying!`),
});

// Build a specific entity by "composing" behaviors
const createSuperDuck = (name) => {
  let state = { name };
  return {
    ...state,
    ...swimmer(state),
    ...flyer(state),
  };
};

const myDuck = createSuperDuck("Quackers");
myDuck.fly(); // "Quackers is flying!"

// ### 3. Why is this better than Inheritance?

// In your internship, you might encounter the **"Gorilla/Banana" problem**:

// > You wanted a banana, but because you used inheritance, you ended up with a gorilla holding the banana and the entire jungle attached to it.

// * **Inheritance:** You get everything from the parent, even stuff you don't need (bloated code).
// * **Composition:** You pick and choose. If your "User" doesn't need "Admin" powers, you just don't add the `adminTools` object to it.
