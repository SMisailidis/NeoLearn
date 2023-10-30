$(document).ready(function () {
    const content = JSON.parse(sessionStorage.getItem("userContent"));
  
    $.each(content, function (index, row) {
      const article = $("<article>").addClass("mainContent");
      const link = $("<a>").addClass("link").attr("href", row.url);
      const img = $("<img>").attr("src", row.imgURL);
      const text = row.text;
  
      link.append(img).append(text);
      article.append(link);
  
      $(".contentContainer").append(article);
    });
  })