/*
  dynamically populates a portfolio container with content fetched from sessionStorage. 
  It updates the user's welcome message based on stored data 
  and customizes the appearance of a quiz link by adjusting the image width and removing the text label.
*/

$(document).ready(function () {
  if (sessionStorage.length === 0) {
    window.location.href = "loginPage.php";
  }

  const content = JSON.parse(sessionStorage.getItem("userContent"));

  const firstName = JSON.parse(sessionStorage.getItem("userData"))[0]
    .First_Name;

  $(".headerUserName").text("Welcome, " + firstName);

  $.each(content, function (index, row) {
    const article = $("<article>").addClass("mainPortfolioContent");
    const link = $("<a>").addClass("link").attr("href", row.url);
    const img = $("<img>").attr("src", row.imgURL);
    const text = $("<span>").text(row.text);

    link.append(img).append(text);
    article.append(link);

    $(".contentPortfolioContainer").append(article);
  });

  const quizSpan = $('a[href="quiz.php"] span');
  const quizImg = $('a[href="quiz.php"] img');

  quizImg.css("width", "20vw");
  quizSpan.text("");
});
