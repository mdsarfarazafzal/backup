
const expensive = () => {
  console.log("expensive");
};

const throttle = (func, limit) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      func(...args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
const debounce = (func, limit) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, limit);
  };
};
const cheap = throttle(expensive, 1000);
// const cheap = debounce(expensive, 1000);

window.addEventListener("resize", () => {
  cheap();
});
