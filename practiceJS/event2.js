document.addEventListener("fromEvent1", (e) => {
  console.log(e.detail.message);
});
const recieved = new CustomEvent("fromEvent2", {
  detail: { message: "recieved securely" },
});
setTimeout(() => {
  document.querySelector('div[managed="true"]').dispatchEvent(recieved);
}, 1000);
