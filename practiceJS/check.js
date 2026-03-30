// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
// const arr = [1, 2, 3];
// arr.forEach((num) => console.log(num));
// console.log(arr.toString());
// const $a = "s";

// console.log({}.valueOf());
// let c = (async function () {
//   console.log("iife");
// })();

// c.then(() => {
//   console.log("done");
// });

// console.log("B");

const managed = document.querySelector('div[managed="true"]');
const text = document.createTextNode("this is text node");
managed.prepend(text);
managed.setAttribute("managed", "false");
managed.setAttribute("class", "attributeClass");
const newManaged = document.querySelector(".attributeClass");
newManaged.style.backgroundColor = "#6b6060";
console.log(managed.getAttribute("managed"));
const items = managed.querySelectorAll('div[a="1"]');
console.log(items);
managed.setAttribute("data-name", "datasetattribute");
console.log(managed.dataset.name);
managed.addEventListener("click", (e) => {
  console.log(e.target.closest('div[a="2"]'));
});

// confirm("confirm?");
// alert("alerted");
// prompt("say");
// prompt("hey", "yes");
// console.log(+10);
