import { fetchData } from "./eventHandler.js";

import pagination from "./pagination.js";

$(document).ready(function () {
  //Function to rotate the img
  function expandMore() {
    if (!$(this).hasClass("rotate180")) {
      $(this).toggleClass("rotate180");
    } else {
      $(this).toggleClass("init");
    }
  }

  const onDeleteHandler = () => {
    console.log("HERE I WILL DO THE LOGIC FOR ON DELETE");
  };

  const onUpdateHandler = () => {
    console.log("HERE I WILL DO THE LOGIC FOR ON UPDATE");
  };

  const onAddTeacherHandler = () => {
    console.log("HERE I WILL DO THE LOGIC FOR ON ADD TEACHER");
  };

  //Function to render content with pagination also
  const renderContent = () => {
    pagination.renderContent(() => {
      pagination.renderElement.empty();

      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      const pageData = pagination.data.slice(startIndex, endIndex);

      let currentOpenCollapseId = null;
      $.each(pageData, function (index, row) {
        // Create elements
        let mainContent = $("<main>").addClass("mainViewTypeContent");
        let article = $("<article>").addClass("userData");
        let studInfo = $("<p>")
          .addClass("userFullName")
          .text(row.First_Name + " " + row.Last_Name + " - " + row.ID);
        let studPhoto = $("<img>")
          .attr("src", "assets/images/loginUser.png")
          .attr("alt", "photo");

        let expandPhoto = $("<img>")
          .attr("src", "assets/images/expand.png")
          .attr("alt", "expand")
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
        let expandContent = $("<main>").addClass("expandedContent allTeachers");

        let iconTrash = $("<i>").addClass("fa-regular fa-trash-can");
        let iconUpdate = $("<i>").addClass("fa-regular fa-pen-to-square");

        let expandedDeleteUser = $("<button>")
          .addClass("btn btn-outline-danger")
          .attr("title", "Delete User")
          .append(iconTrash)
          .append(
            $("<p>")
              .append($("<span>").text("Delete"))
              .append($("<span>").text("User"))
          )
          .on("click", onDeleteHandler);
        let expandedUpdateUser = $("<button>")
          .addClass("btn btn-outline-success")
          .attr("title", "Update User")
          .append(iconUpdate)
          .append(
            $("<p>")
              .append($("<span>").text("Update"))
              .append($("<span>").text("User"))
          )
          .on("click", onUpdateHandler);
        let expandedLink = $("<article>")
          .addClass("profileHref")
          .attr("title", "View Profile")
          .append(
            $("<a>")
              .attr("title", row.First_Name + " " + row.Last_Name)
              .attr("href", `profile.php?ID=${row.ID}`)
              .text("More Info")
          );

        article.append(studPhoto).append(studInfo);
        mainContent.append(article).append(expandPhoto);

        expandContent
          .append(expandedDeleteUser)
          .append(expandedLink)
          .append(expandedUpdateUser);
        expandSection.append(expandContent);
        div.append(expandSection);
        pagination.renderElement.append(mainContent).append(div);
      });
    });
  };

  //Fetching data from db
  const fetchStudents = () => {
    fetchData(jQuery, "assets/Back-End/retrieveAllType.php", "POST", {
      table: "teacher",
    })
      .then((data) => {
        pagination.setData(data);
        renderContent();
        pagination.updatePaginationLinks();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  $("#addTeachers").on("click", onAddTeacherHandler);

  pagination.setPaginationElement($(".contentViewTypeContainer"));
  fetchStudents();
  pagination.onClickHandler(renderContent);
});
