/* Wait for all content to load on page */
window.addEventListener('DOMContentLoaded', (event) => {

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } 
  else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

/* When user clicks on sidebar, experiences appear based on each experience */
var sides = document.getElementsByClassName("side");
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


/* When the user hovers over any projects they will show description */
document.getElementById("box1").addEventListener("click", function() {
  // var dis = document.getElementById('projdes1').style.display;
  if (document.getElementById('projdes1').style.display == "none") {
    document.getElementById('projdes1').style.display = "block";
    document.getElementById('proj1').style.display = "none";
  } else {
    document.getElementById('projdes1').style.display = "none";
    document.getElementById('proj1').style.display = "block";
  }
})
document.getElementById("box2").addEventListener("click", function() {
  if (document.getElementById('projdes2').style.display == "none") {
    document.getElementById('projdes2').style.display = "block";
    document.getElementById('proj2').style.display = "none";
  } else {
  document.getElementById('projdes2').style.display = "none";
  document.getElementById('proj2').style.display = "block";
  }
})
document.getElementById("box3").addEventListener("click", function() {
  if (document.getElementById('projdes3').style.display == "none") {
    document.getElementById('projdes3').style.display = "block";
    document.getElementById('proj3').style.display = "none";
  } else {
  document.getElementById('projdes3').style.display = "none";
  document.getElementById('proj3').style.display = "block";
  }
})
document.getElementById("box4").addEventListener("click", function() {
  if (document.getElementById('projdes4').style.display == "none") {
    document.getElementById('projdes4').style.display = "block";
    document.getElementById('proj4').style.display = "none";
  } else {
  document.getElementById('projdes4').style.display = "none";
  document.getElementById('proj4').style.display = "block";
  }
})
document.getElementById("box5").addEventListener("click", function() {
  if (document.getElementById('projdes5').style.display == "none") {
    document.getElementById('projdes5').style.display = "block";
    document.getElementById('proj5').style.display = "none";
  } else {
  document.getElementById('projdes5').style.display = "none";
  document.getElementById('proj5').style.display = "block";
  }
})

/* When the user hovers out any projects, they will return to image */
// document.getElementById("box1").addEventListener("mouseout", function() {
//     document.getElementById('projdes1').style.display = "block";
//     document.getElementById('proj1').style.display = "none";
// })
// document.getElementById("box2").addEventListener("mouseout", function() {
//   document.getElementById('projdes2').style.display = "block";
//   document.getElementById('proj2').style.display = "none";
// })
// document.getElementById("box3").addEventListener("mouseout", function() {
//   document.getElementById('projdes3').style.display = "block";
//   document.getElementById('proj3').style.display = "none";
// })
// document.getElementById("box4").addEventListener("mouseout", function() {
//   document.getElementById('projdes4').style.display = "block";
//   document.getElementById('proj4').style.display = "none";
// })
// document.getElementById("box5").addEventListener("mouseout", function() {
//   document.getElementById('projdes5').style.display = "block";
//   document.getElementById('proj5').style.display = "none";
// })

}); // window loaded

// function updateProj() {}
//   document.getElementById("projdes1").style.display = "none";
//   document.getElementById("proj1").style.display = "block";
// }

// function undoProj() {
//   document.getElementById("projdes1").style.display = "block";
//   document.getElementById("proj1").style.display = "none";
// }