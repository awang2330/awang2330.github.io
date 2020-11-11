/* Wait for all content to load on page */
window.addEventListener('DOMContentLoaded', (event) => {

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

/* When user clicks on sidebar, experiences appear based on each experience */
var sides = document.getElementsByClassName("side");
console.log(sides);
console.log(sides.length);
for (var i = 0; i < sides.length; ++i) {
  sides[i].addEventListener("click", function() {
    // upon click, change element with the current expactive class to just exp (hidden)
    var current = document.getElementsByClassName("expactive");
    current[0].className = current[0].className.replace(" expactive", "");

    // gather all elements in exp class make the corresponding experience paragraph visible
    var exps = document.getElementsByClassName("exp");
    var num = this.name;
    exps[num].className = exps[num].className.replace("exp", "exp expactive");
  });
}

});