// // const myEvent = new Event("do");
// // document.addEventListener("do", function (e) {
// //   console.log("Do triggered");
// // });
// // console.log("Before dispatch");

// // setTimeout(function () {
// //   document.dispatchEvent(myEvent);
// // }, 0);

// // window.addEventListener("load", function (e) {
// //   console.log("onLoad Event triggered");
// // });

// // // document.dispatchEvent(myEvent);

// // console.log("After dispatch");

// const bulb = document.createElement("div");
// document.body.style.margin = "0";
// document.body.style.padding = "0";
// bulb.style.width = "300px";
// bulb.style.height = "300px";
// document.body.style.height = "100vh";
// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// bulb.style.border = "2px solid black";
// bulb.style.backgroundColor = "grey";
// bulb.innerHTML = "<h1>Bulb Off</h1>";
// bulb.style.display = "flex";
// bulb.style.alignItems = "center";
// bulb.style.justifyContent = "center";
// bulb.style.textAlign = "center";
// bulb.style.borderRadius = "100%";
// // document.body.appendChild(bulb);
// document.body.append(bulb);

// bulb.addEventListener("click", function () {
//     if (bulb.style.backgroundColor === "grey") {
//         bulb.style.backgroundColor = "yellow";
//         bulb.innerHTML = "<h1>Bulb On</h1>";
//     } else {
//         bulb.style.backgroundColor = "grey";
//         bulb.innerHTML = "<h1>Bulb Off</h1>";
//     }
// });
// const input = document.createElement("input");
// const output = document.createElement("div");
// const button = document.createElement("button");
// button.innerText = "Submit";
// input.type = "text";
// input.placeholder = "Type something...";
// document.body.append(input, output, button);
// input.addEventListener("change", function (e) {
//   console.log("Input changed to: ", e.target.value);
//   output.innerText = e.target.value;
// });

// getElementsByClassName and getElementsByTagName they return a HTML collection that is dynamic that is
// elements can be updated inside the collection.
// map filter reduce will neither be applied to HTMLCollection (getElementsByTagName, getElementsByClassName)
// nor NodeList (querySelectorAll)
// for of can be applied to both, for each only applied to NodeList
// cssom - cascading style sheet object model

// as innerHTML can parse HTML elements also if you take user input
// as inner html a hacker might insert a <script>, this is called
// xss - cross site scripting that is a security issue

const list = document.createElement("ul");
document.body.appendChild(list);
function createMultipleElements(num) {
  for (let i = 1; i <= num; i++) {
    const item = document.createElement("li");
    item.innerHTML = `<h1>Item ${i}</h1>`;
    item.classList.add(`item-${i}`);
    list.prepend(item);
  }
}
createMultipleElements(11);
list.addEventListener("click", (e) => {
  console.log(`clicked ${e.target.textContent}`);
});
