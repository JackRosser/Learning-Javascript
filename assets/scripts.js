//menu a comparsa

let header = document.querySelector("header");
let javaScriptMenu = document.getElementById("javascript");
let body = document.querySelector("body");
// generiamo un menu a comparsa che inizi a esistere quando si clicca su "javascript"
// lo generiamo con js e gli diamo come classe "header__submenu"

console.log(javaScriptMenu);

let addSubmenu = function () {
  let ulSubmenu = document.createElement("ul");
  ulSubmenu.className = "header__submenu";
  let liSubmenu1 = document.createElement("li");
  let aLiSubmenu1 = document.createElement("a");
  aLiSubmenu1.href = "#metodi";
  aLiSubmenu1.innerText = "metodi";
  liSubmenu1.appendChild(aLiSubmenu1);
  ulSubmenu.appendChild(liSubmenu1);
  header.appendChild(ulSubmenu);
};

javaScriptMenu.addEventListener("click", addSubmenu);
