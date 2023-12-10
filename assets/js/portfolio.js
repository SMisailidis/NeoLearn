$(document).ready(function () {
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
