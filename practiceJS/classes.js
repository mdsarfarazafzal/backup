// instance methods require object to be created but static methods are on the constructor itself for example Object.keys()
// is a static method that is defined on the Object constructor itself, you don't need to do myObj.keys()
class MathUtils {
  static add = (a, b) => {
    return a + b;
  };
}
class Local extends MathUtils {
  subtract(a, b) {
    return a - b;
  }
}
class Human {
  constructor(gender) {
    this.gender = gender;
  }
  setName(name) {
    this.name = name;
    console.log(`${this.name} is ${this.gender}`);
  }
}

const she = new Human("female");
she.setName("Alisha");
// const minus = new Local();
// minus.add won't work because static methods are defined on constructor and not instance so minus.__proto__ points to
// Local.prototype while Local.__proto__ points to MathUtils on which add is present
// When call minus.add(), JavaScript looks at the minus object, then its prototype (Local.prototype), then the
//  parent's prototype (MathUtils.prototype). It doesn't find add anywhere because add is sitting directly on the 
// constructor MathUtils, not the prototype.
console.log(Local.add(1, 3));
