$(document).ready(function () {
  const navListContent = JSON.parse(sessionStorage.getItem("userNavList"));

  const navList = $(".navList");

  $.each(navListContent, function (index, row) {
    let li = $("<li>");
    let anchor = $("<a>").attr("href", row.url).attr("title", row.text);
    let icon = $("<i>").attr("class", row.imgURL);
    let span = $("<span>").text(row.text);

    anchor.append(icon).append(" ").append(span);
    li.append(anchor);
    navList.append(li);
  });
});
