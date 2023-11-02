$(document).ready(function () {
  let navigationBar = $(".navContainer");
  let menuButton = $(".menuBtn");
  let menuState = false;
  let menuIcon = $("#menuIcon");
  function openMenu() {
    menuState = true;
    navigationBar.addClass("navActive activateWidth");
    menuIcon.removeClass("fa-bars").addClass("fa-x");
  }
  function closeMenu() {
    menuState = false;
    navigationBar.removeClass("navActive activateWidth");
    menuIcon.removeClass("fa-x").addClass("fa-bars");
  }
  menuButton.on("click", function () {
    if (navigationBar.css("flex-basis") === "0%") {
      navigationBar.css("flex-basis", "25%");
    } else {
      navigationBar.css("flex-basis", "0%");
    }
    if (navigationBar.css("flex-basis") === "0%") {
      openMenu();
    } else {
      closeMenu();
    }
  });
  $(window).on("resize", function () {
    if (this.innerWidth > 768) {
      closeMenu();
    }
  });
});
