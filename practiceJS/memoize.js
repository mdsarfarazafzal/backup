let cache = {};

function calculate(a, b) {
  //   console.log(a + b);
  return a + b;
}

function memoize(a, b) {
  let key = a + ":" + b;
  if (!cache[key]) {
    const res = calculate(a, b);
    cache[key] = res;
    console.log("Calculating and caching result =", res);
  } else {
    console.log("Returning cached result =", cache[key]);
  }
}
