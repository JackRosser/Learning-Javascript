//menu a comparsa

let javaScriptMenu = document.getElementById("javascript");

let aJs = document.querySelector("header ul li:first-child");
let aCss = document.querySelector("header ul li:last-child");

aJs.onclick = function () {
  javaScriptMenu.style.right = 0;
};
