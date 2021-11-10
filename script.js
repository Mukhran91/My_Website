//scrool top btn
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// typed 
var typed = new Typed(".typing", {
  strings: ["Hello, I am Mukhran Kakhadze"],
  typeSpeed: 100,
  backSpeed: 60, 
  loop: false 
});

var typed = new Typed(".typ-2", {
  strings: ["Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
  
var typed = new Typed(".typ-3", {
strings: ["My creative skills and experiences."],
typeSpeed: 100,
backSpeed: 60,
loop: false
});