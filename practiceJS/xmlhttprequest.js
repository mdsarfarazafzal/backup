const xhr = new XMLHttpRequest();
xhr.open("GET", "https://randomuser.me/api/");
xhr.send();
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log(JSON.parse(this.responseText));
  }
};
