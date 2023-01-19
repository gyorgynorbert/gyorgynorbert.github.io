$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $a = $("#navbar-logo");
    var $b = $(".navbar-skills");
    var $c = $(".navbar-about");
    var $d = $(".navbar-contact");
    var $e = $(".navbar-achievements");
    var $f = $(".ham-line");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    $a.toggleClass("scrolled-navbar", $(this).scrollTop() > $nav.height());
    $b.toggleClass("scrolled-navbar", $(this).scrollTop() > $nav.height());
    $c.toggleClass("scrolled-navbar", $(this).scrollTop() > $nav.height());
    $d.toggleClass("scrolled-navbar", $(this).scrollTop() > $nav.height());
    $e.toggleClass("scrolled-navbar", $(this).scrollTop() > $nav.height());
    $f.toggleClass("scrolled-hamburger", $(this).scrollTop() > $nav.height() && !hamburger.classList.contains("toggle"));
  });
});
