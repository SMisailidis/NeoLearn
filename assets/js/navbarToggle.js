$(document).ready(function () {
  let navigationBar = $(".navContainer");
  let menuButton = $(".menuBtn");
  let menuState = false;
  let menuIcon = $("#menuIcon");
  let portfolioContainer = $('.mainScreenPortfolioContainer');
  let portfolio = $('.contentPortfolioContainer');
  function openMenu() {
    menuState = true;
    navigationBar.css("flex-basis", "60%");
    portfolioContainer.addClass('openMenuContainerResponse');
    portfolio.addClass('openMenuPortfolioResponse');
    menuIcon.removeClass("fa-bars").addClass("fa-x");
  }

  function closeMenu() {
    menuState = false;
    navigationBar.css("flex-basis", "0%");
    removeTransitionClasses(500);
    menuIcon.removeClass("fa-x").addClass("fa-bars");
  }

  function removeTransitionClasses(delay) {
    setTimeout(() => {
      portfolioContainer.removeClass('openMenuContainerResponse');
      portfolio.removeClass('openMenuPortfolioResponse');
    }, delay);
  }

  menuButton.on("click", function () {
    if (!menuState)
      openMenu();
    else
      closeMenu();
  });

  $(window).on("resize", function () {
    if (window.innerWidth > 768) {
      if (menuState) {
        openMenu();
      } else {
        navigationBar.css("flex-basis", "20%");
      }
    } else {
      closeMenu();
    }
  });

  window.onresize = function () {
    if (window.innerWidth > 768) {
      removeTransitionClasses(250);
      navigationBar.css("flex-basis", "20%");

    }
  };
});
