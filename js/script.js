console.log("complete");

$(document).on("mousemove", function (event) {
  $(".hand-img").css({
    left: event.pageX,
    top: event.pageY,
  });
});

$(".center-zone").on("mouseenter", function () {
  $(".light-img").addClass("on");
});

$(".center-zone").on("mouseleave", function () {
  $(".light-img").removeClass("on");
});

$(".header1").on("click", function () {
  $(this).toggleClass("clicked");
});

$(".header").on("click", function () {
  $(this).toggleClass("clicked");
  $(this).find(".header-list").stop().slideToggle(300);
});

$(".header1").on("click", function () {
  $(".info1").stop().slideToggle(300);
});
