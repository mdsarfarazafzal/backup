// closure
const multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}
const multiplyByThree = multiply(3);
multiplyByThree(4);

// bind
const bindMultiply = function (x,y) {
    console.log(x * y);
}
const multiplybyTwo = bindMultiply.bind(this, 2);
multiplybyTwo(5);