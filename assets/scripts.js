//menu a comparsa

let header = document.querySelector("header");
let javaScriptMenu = document.getElementById("javascript");

// generiamo un menu a comparsa che inizi a esistere quando si clicca su "javascript"
// lo generiamo con js e gli diamo come classe "header__submenu"

console.log(javaScriptMenu);

let addSubmenu = function (par1, par2, par3) {
  let ulSubmenu = document.createElement("ul");
  ulSubmenu.className = "header__submenu";
  let liSubmenu1 = document.createElement("li");
  let aLiSubmenu1 = document.createElement("a");
  aLiSubmenu1.href = "#";
  header.appendChild(ulSubmenu);
  ulSubmenu.append(liSubmenu1);
};

addSubmenu("metodi");
