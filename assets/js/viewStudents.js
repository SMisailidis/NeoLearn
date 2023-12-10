import { fetchData } from "./eventHandler.js";

import pagination from "./pagination.js";

$(document).ready(function () {
  function expandMore() {
    if (!$(this).hasClass("rotate180")) {
      $(this).toggleClass("rotate180");
    } else {
      $(this).toggleClass("init");
    }
  }

  const renderContent = () => {
    pagination.renderContent(() => {
      pagination.renderElement.empty();

      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      const pageData = pagination.data.slice(startIndex, endIndex);

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
          if (
            currentOpenCollapseId &&
            currentOpenCollapseId !== div.attr("id")
          ) {
            $("#" + currentOpenCollapseId).collapse("hide");

            img = $(`img[href*="#${currentOpenCollapseId}"]`);

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

        pagination.renderElement.append(mainContent).append(div);
      });
    });
  };

  const fetchStudents = () => {
    fetchData(
      jQuery,
      "assets/Back-End/retrieveAllStudents.php",
      "POST",
      undefined
    )
      .then((data) => {
        pagination.setData(data);
        renderContent();
        pagination.updatePaginationLinks();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  pagination.setPaginationElement($(".contentViewStudentsContainer"));

  fetchStudents();
  pagination.onClickHandler(renderContent);
});