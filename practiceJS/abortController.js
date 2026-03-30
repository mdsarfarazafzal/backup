const controller = new AbortController();
const eventsContoller = new AbortController();
const { signal: eventSignal } = eventsContoller;
const { signal } = controller;
let output;
racing().then((res) => console.log(res));

async function racing() {
  try {
    const result = await Promise.any([
      fetch("https://randomuser.me/api/", { signal }).then((res) => res.json()),
      fetch("https://api.github.com/users/luffy", {
        signal,
      }).then((res) => res.json()),
    ]);
    // throw new Error("intentional");
    controller.abort();
    return result;
  } catch (error) {
    // console.log("All promises were rejected");
    console.log(error);
    throw new Error("All promises failed", error);
  }
}

// document.addEventListener(
//   "click",
//   (e) => {
//     console.log("clicked");
//   },
//   { signal },
// );

document.addEventListener(
  "click",
  (e) => {
    console.log("clicked");
  },
  { signal: eventSignal },
);
setTimeout(() => {
  console.log("tried");

  eventsContoller.abort();
}, 5000);

const garbage = document.querySelector('div[managed="true"]');
garbage.remove();
const card = document.createElement("div");
document.body.appendChild(card);
card.style.width = "100px";
card.style.height = "200px";
card.style.backgroundColor = "#000000";
card.style.border = "12px solid #ffff00";
const profile = document.createElement("img");
profile.src = "https://avatars.githubusercontent.com/u/60008923?v=4";
profile.style.width = "100px";
profile.style.height = "100px";
card.appendChild(profile);
