const hamburger = document.querySelector(".hamburger");
const hamburgerLines = document.querySelectorAll(".ham-line");
const navLinks = document.querySelector(".navbar-right");
const links = document.querySelectorAll(".navbar-item");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open"); 

  hamburger.classList.toggle("toggle");

  body.classList.toggle("freeze");

  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  hamburgerLines.forEach((lines) => {
    lines.classList.toggle("fading");
  });
});

document.querySelectorAll(".navbar-item").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("toggle");

  navLinks.classList.remove("open");
  
  body.classList.remove("freeze");
  
  hamburgerLines.forEach((lines) => {
    lines.classList.remove("fading");
  });
  
  links.forEach((link) => {
    link.classList.remove("fade");
  });
}))



