const map = new Map();
map.set("name", "Sarfaraz");
map.set("age", 21);
map.set("city", "Kolkata");
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
const arr = [1, 2, 3, 4, 5];
arr.forEach((num, key) => {
    console.log(`${num} at index ${key}`);
});