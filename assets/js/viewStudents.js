import { fetchData } from "./eventHandler.js";

$(document).ready(function () {
  let currentPage = 1;
  let totalStuds = 0;
  const itemsPerPage = 4;
  let studData = [];

  function expandMore() {
    if (!$(this).hasClass("rotate180")) {
      $(this).toggleClass("rotate180");
    } else {
      $(this).toggleClass("init");
    }
  }

  const renderContent = (data, totalStuds) => {
    $(".contentViewStudentsContainer").empty();

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = data.slice(startIndex, endIndex);

    let currentOpenCollapseId = null;
    $.each(pageData, function (index, row) {
      // Create elements
      let mainContent = $("<content>").addClass("mainViewStudentsContent");
      let article = $("<article>").addClass("userData");
      let studInfo = $("<p>")
        .addClass("userFullName")
        .text(row.First_Name + " " + row.Last_Name + " - " + row.ID);
      let studPhoto = $("<img>")
        .attr("src", "assets/images/loginUser.png")
        .attr("alt", "photo");

      let expandPhoto = $("<img>")
        .attr("src", "assets/images/expand.png")
        .addClass("expandMore")
        .attr("data-toggle", "collapse")
        .attr("href", "#collapse-" + index)
        .attr("aria-expanded", "false")
        .attr("aria-controls", "collapse-" + index)
        .click(expandMore);

      let div = $("<div>")
        .addClass("collapse multi-collapse")
        .attr("id", "collapse-" + index);

      div.on("show.bs.collapse", function () {
        let img;
        if (currentOpenCollapseId && currentOpenCollapseId !== div.attr("id")) {
          $("#" + currentOpenCollapseId).collapse("hide");

          img = $(`img[href*="#${currentOpenCollapseId}"]`);

          let currImg = $(`img[href*="#${div.attr("id")}"]`);

          if ($(img).hasClass("rotate180")) {
            $(img).addClass("init");
            $(img).toggleClass("init");
          }
        }
        $(img).toggleClass("init");
        currentOpenCollapseId = div.attr("id");
      });

      let expandSection = $("<section>").addClass("showed");
      let expandContent = $("<content>").addClass("expandedContent");

      let expandedPhone = $("<article>")
        .addClass("phoneNumber")
        .text("Phone Number: " + row.Phone_Number);
      let expandedLink = $("<article>").append(
        $("<a>").attr("href", `profile.php?ID=${row.ID}`).text("More Info")
      );
      let expandedEmail = $("<article>")
        .addClass("email")
        .text("Email: " + row.Email);

      article.append(studPhoto).append(studInfo);
      mainContent.append(article).append(expandPhoto);

      expandContent
        .append(expandedPhone)
        .append(expandedLink)
        .append(expandedEmail);
      expandSection.append(expandContent);
      div.append(expandSection);

      $(".contentViewStudentsContainer").append(mainContent).append(div);
    });
  };

  const updatePaginationLinks = (currentPage) => {
    const totalPages = Math.ceil(totalStuds / itemsPerPage);

    $(".pagination").empty();

    const prevImg = $("<img>")
      .addClass("paginationImg")
      .attr("src", "assets/images/logo.png");

    const prevLI = $("<li>").addClass("page-item disabled").attr("id", "prev");
    const prevA = $("<a>").addClass("page-link").attr("href", "#");

    prevA.append(prevImg);
    prevLI.append(prevA);

    const nextLI = $("<li>").addClass("page-item disabled").attr("id", "next");
    const nextA = $("<a>").addClass("page-link").attr("href", "#");
    const nextImg = $("<img>")
      .addClass("paginationImg")
      .attr("src", "assets/images/logo.png");
    nextA.append(nextImg);
    nextLI.append(nextA);

    $(".pagination").append(prevLI);

    for (let i = 1; i <= totalPages; i++) {
      const li = $("<li>").addClass("page-item");
      const button = $("<button>")
        .attr("type", "button")
        .addClass("page-link")
        .text(i);
      if (i === currentPage) {
        button.addClass("customActive");
      }
      li.append(button);
      $(".pagination").append(li);
    }

    $(".pagination").append(nextLI);
  };

  $(".pagination").on("click", "button.page-link", function (e) {
    e.preventDefault();
    const page = parseInt($(this).text(), 10);
    if (!isNaN(page) && page !== currentPage) {
      currentPage = page;

      $(".pagination button.page-link").removeClass("active");

      $(this).closest("li.page-item").addClass("active");

      renderContent(studData, totalStuds);
      updatePaginationLinks(currentPage);
    }
  });

  fetchData(
    jQuery,
    "assets/Back-End/retrieveAllStudents.php",
    "POST",
    undefined
  )
    .then((data) => {
      totalStuds = data.length;
      studData = data;
      renderContent(data, totalStuds);
      updatePaginationLinks(currentPage);
    })
    .catch((error) => {
      console.error(error);
    });
});
