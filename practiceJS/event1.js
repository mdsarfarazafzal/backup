const myEvent = new CustomEvent("fromEvent1", {
  detail: { message: "sesetive information" },
});
document.dispatchEvent(myEvent);
document
  .querySelector('div[managed="true"]')
  .addEventListener("fromEvent2", (e) => {
    console.log(e.detail.message);
  });
