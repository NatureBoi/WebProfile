let counter = 0;

let ht_img = document.querySelector(".html");
let cs_img = document.querySelector(".css");
let js_img = document.querySelector(".js");
let ux_img = document.querySelector(".ux");

let ht_ar = ["pug-logo.svg", "html.svg"];
let cs_ar = ["sass.svg", "css.svg"];
let js_ar = ["angular.svg", "react.svg", "js.png"];
let ux_ar = ["ai.svg", "ps.svg"];

function myfunc() {
  setInterval(js, 1000);
}

function js() {
  setIcon(js_img, js_ar);
  counter++;
}

function setIcon(el, arr) {
  if (counter >= arr.length) {
    counter = 0;
  }
  el.src = `img/icons/${arr[counter]}`;
}
