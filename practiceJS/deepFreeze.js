const obj = {
  name: "sam",
  canSing: function () {
    console.log("Sam sung");
  },
  obj2: {
    lastName: "alex",
    moreObj: {
      firstName: "the",
    },
  },
};
function deepFreeze(obj) {
  Object.freeze(obj);
  const keys = Object.keys(obj);
  for (var index = 0; index < keys.length; index++) {
    if (typeof obj[keys[index]] === "object") {
      return deepFreeze(obj[keys[index]]);
    }
  }
}
deepFreeze(obj);
console.log(Object.isFrozen(obj.obj2.moreObj));
console.log(Object.getOwnPropertyDescriptors(obj));

