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
  let count = 0;

  $.each(content, function (index, row) {
    const article = $("<article>").addClass("mainPortfolioContent");
    const link = $("<a>")
      .addClass("link")
      .attr("title", row.text)
      .attr("href", row.url)
      .addClass("portfolioAnchor");
    const img = $("<img>")
      .attr("src", row.imgURL)
      .attr("alt", row.text)
      .addClass("portfolioImg");
    const text = $("<span>").text(row.text).addClass("portfolioText");

    link.append(img).append(text);
    article.append(link);
    count % 2 === 0
      ? article.addClass("animate__animated animate__fadeInLeft")
      : article.addClass("animate__animated animate__fadeInRight");

    $(".contentPortfolioContainer").append(article);
    count++;
  });
});
