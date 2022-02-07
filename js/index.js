function _(x) {
  return document.querySelector(x);
}

window.addEventListener("scroll", function (e) {
  if (this.scrollY > 300) {
    _(".nav-container").style.background = "rgb(243 218 178 / 100%)";
  } else {
    _(".nav-container").style.background = "rgb(243 218 178 / 38%)";
  }
});
