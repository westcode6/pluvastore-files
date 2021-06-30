const toggle = document.querySelector("#toggle");
const rightNav = document.querySelector("#rightNav");
const leftNav = document.querySelector("#leftNav");

toggle.addEventListener("click", showNav);

function showNav(e) {
  if (
    rightNav.classList.contains("hidden") &&
    leftNav.classList.contains("hidden")
  ) {
    rightNav.classList.remove("hidden");
    leftNav.classList.remove("hidden");
  } else {
    rightNav.classList.add("hidden");
    leftNav.classList.add("hidden");
  }
}

// same as
// function $(el){
//     return document.querySelector(el);
// }

/*-----------------------------*/
// MODAL
const $ = el => document.querySelector(el);

function modal() {
    $('.modal').classList.add('reveal-modal');
}
function hideModal() {
    $('.modal').classList.remove('reveal-modal');
}

// setTimeout(function() {
//     modal();
// }, 4000)
