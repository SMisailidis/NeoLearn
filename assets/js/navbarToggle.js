$(document).ready(function () {
  const body = $('body');
  let mainContent = $('.mainContainer');
  let navigationBar = $(".navContainer");
  let menuButton = $(".menuBtn");
  let menuState = false;
  const menuLine = $('.menuLine');
  let portfolioContainer = $('.mainScreenPortfolioContainer');
  let portfolio = $('.contentPortfolioContainer');
  function openMenu() {
    menuState = true;
    navigationBar.addClass('navContainerActive');
    mainContent.css('opacity','0 !important');
    menuButton.addClass('menuBtnActive');
    menuLine.css('transform', 'translateX(-2000px)');
  }

  function closeMenu() {
    menuState = false;
    navigationBar.removeClass('navContainerActive');
    mainContent.css('opacity','1');
    menuButton.removeClass('menuBtnActive');
    menuLine.css('transform', 'translateX(0)');
  
  }


  menuButton.on("click", function () {
    if (!menuState)
      openMenu();
    else
      closeMenu();
  });

  $(window).on("resize", function () {
   (window.innerWidth >= 1200) && closeMenu();
  });

});
