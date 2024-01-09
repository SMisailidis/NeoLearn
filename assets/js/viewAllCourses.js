import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";

import pagination from "./pagination.js";
import toast from "./toast.js";

$(document).ready(function () {
  //Function to rotate the img
  function expandMore() {
    if (!$(this).hasClass("rotate180")) {
      $(this).toggleClass("rotate180");
    } else {
      $(this).toggleClass("init");
    }
  }

  toast.setContent("Course deleted successfully!");
  modal.setTitle("Delete course");
  modal.setContent("Are you sure you want to delete the selected course?");
  modal.setButtonsText("Cancel", "Confirm");
  modal.onClickCloseHandler(() => {
    modal.closeModal();
  });

  const onDeleteHandler = (e) => {
    const courseID = [];
    courseID.push(e.target.closest("[data-info]").getAttribute("data-info"));
    modal.openModal();
    modal.onClickSaveHandler(() => {
      fetchData(jQuery, "assets/Back-End/deleteCourses.php", "POST", {
        course_ids: courseID,
      })
        .then((data) => {
          if (data) {
            modal.closeModal();
            toast.showToast();
            let spinnerElement =
              '<div class="spinner-border text-primary" role="status" style="display:flex;align-self:center;color: #2e6d7c !IMPORTANT;margin-left:10px;"><span class="visually-hidden">Loading...</span></div>';

            $(`p:contains('${courseID[0]}')`)
              .parent()
              .parent()
              .next("div")
              .remove();

            $(`p:contains('${courseID[0]}')`)
              .parent()
              .replaceWith(spinnerElement);
            setTimeout(function () {
              location.reload();
            }, 3000);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  const onUpdateHandler = (e) => {
    const courseID = e.target.closest("[data-info]").getAttribute("data-info");

    window.location.href = `UpdateCourse.php?courseId=${courseID}`;
  };

  const onAddChapterHandler = (e) => {
    const courseID = e.target.closest("[data-info]").getAttribute("data-info");

    window.location.href = `addChapter.php?courseId=${courseID}`;
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
          .text(row.Title + " - " + row.ID);
        let studPhoto = $("<img>")
          .attr("src", "assets/images/bookmark.png")
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
        let expandContent = $("<main>").addClass("expandedContent allCourses");

        let iconTrash = $("<i>").addClass("fa-regular fa-trash-can");
        let iconUpdate = $("<i>").addClass("fa-regular fa-pen-to-square");
        let iconAdd = $("<i>").addClass("fa-solid fa-plus");
        let expandedDeleteUser = $("<button>")
          .addClass("btn btn-outline-danger")
          .attr("title", "Delete User")
          .attr("data-info", row.ID)
          .append(iconTrash)
          .append(
            $("<p>")
              .append($("<span>").text("Delete"))
              .append($("<span>").text("Course"))
          )
          .on("click", onDeleteHandler);
        let expandedUpdateUser = $("<button>")
          .addClass("btn btn-outline-success")
          .attr("title", "Update User")
          .attr("data-info", row.ID)
          .append(iconUpdate)
          .append(
            $("<p>")
              .append($("<span>").text("Update"))
              .append($("<span>").text("Course"))
          )
          .on("click", onUpdateHandler);
        let expandedAddChapter = $("<button>")
          .addClass("btn btn-outline-primary")
          .attr("title", "Add Chapter")
          .attr("data-info", row.ID)
          .append(iconAdd)
          .append(
            $("<p>")
              .append($("<span>").text("Add"))
              .append($("<span>").text("Chapter"))
          )
          .on("click", onAddChapterHandler);

        article.append(studPhoto).append(studInfo);
        mainContent.append(article).append(expandPhoto);

        expandContent
          .append(expandedDeleteUser)
          .append(expandedAddChapter)
          .append(expandedUpdateUser);
        expandSection.append(expandContent);
        div.append(expandSection);
        pagination.renderElement.append(mainContent).append(div);
      });
    });
  };

  //Fetching data from db
  const fetchCourses = () => {
    fetchData(jQuery, "assets/Back-End/retrieveAllType.php", "POST", {
      table: "course",
    })
      .then((data) => {
        if (data.length === 0) {
          $(".emptyAllCourses").css("display", "block");
        } else {
          pagination.setData(data);
          renderContent();
          pagination.updatePaginationLinks();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  pagination.setPaginationElement($(".contentViewTypeContainer"));

  fetchCourses();
  pagination.onClickHandler(renderContent);
});
