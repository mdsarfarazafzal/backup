function curry(fn){
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        else {
            return function (...args2) {
                return curried.apply(this, [...args, ...args2]);
            }
        }
    }
}
function intro(greet, name, city){
  console.log(`${greet} ${name} from ${city}`);
};

const curryLogger = curry(intro);
// If want to set greet to default value
const hi = curryLogger("Hi");
const hey = curryLogger("Hey");
hi("Alice", "New York");
hey("Bob")("Los Angeles");


