const animal = {
  eat: function () {
    return "Eating...";
  },
};
const dog = Object.create(animal);
console.log(dog.eat());
console.log(animal.prototype);
