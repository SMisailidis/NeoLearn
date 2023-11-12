$(document).ready(function () {
  $(document).ready(function () {
    $(".expandMore").click(function () {
      if (!$(this).hasClass("rotate180")) {
        $(this).toggleClass("rotate180");
      } else {
        $(this).toggleClass("reverse");
      }
    });
  });
});
