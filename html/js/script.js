console.log("Hello");
let counter = 0;

let anim;

let ht_img = document.querySelector(".html");
let cs_img = document.querySelector(".css");
let js_img = document.querySelector(".js");
let ux_img = document.querySelector(".ux");

let ht_ar = ["pug-logo.svg", "html.svg"];
let cs_ar = ["sass.svg", "css.svg"];
let js_ar = ["angular.svg", "react.svg", "js.png"];
let ux_ar = ["ai.svg", "ps.svg"];

function myfunc() {
  anim = setInterval(nf, 1000);
}

function nf() {
  setIcon(ht_img, ht_ar);
  setIcon(cs_img, cs_ar);
  setIcon(js_img, js_ar);
  setIcon(ux_img, ux_ar);
  counter++;
}

function setIcon(el, arr) {
  if (counter >= arr.length) {
    counter = 0;
  }
  el.src = `img/icons/${arr[counter]}`;
}
