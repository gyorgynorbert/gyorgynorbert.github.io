$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $a = $("#navbar-logo");
    var $b = $(".navbar-item");
    var $f = $(".ham-line");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    $a.toggleClass("scrolled-navbar", $(this).scrollTop() > $nav.height());
    $b.toggleClass("scrolled-navbar", $(this).scrollTop() > $nav.height() && !navLinks.classList.contains("open"));
    $f.toggleClass("scrolled-hamburger", $(this).scrollTop() > $nav.height() && !hamburger.classList.contains("toggle"));
  });
});


