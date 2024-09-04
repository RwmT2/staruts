$(document).ready(function () {
  $(document).on("click", ".hamburger-icon", function () {
    $(".nav").addClass("nav-left");
  });
  $(document).on("click", ".cross-btn", function () {
    $(".nav").removeClass("nav-left");
  });
});

