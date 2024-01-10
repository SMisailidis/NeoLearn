import { fetchData } from "./eventHandler.js";
import toast from "./toast.js";
import modal from "./modal.js";
import pagination from "./pagination.js";

$(document).ready(function () {

  let studentID = "";

  //Function to rotate the img
  function expandMore() {
    if (!$(this).hasClass("rotate180")) {
      $(this).toggleClass("rotate180");
    } else {
      $(this).toggleClass("init");
    }
  }

  const onDeleteHandler = (e) => {
    studentID = e.target.closest("[data-info]").getAttribute("data-info");
    modal.openModal();
  };

  modal.onClickSaveHandler(() => {
    fetchData(jQuery, "assets/Back-End/deleteUser.php", "POST", {
      userID: studentID,
      Type: "student",
    })
      .then((success) => {
        if (success) {
          modal.closeModal();
          toast.showToast();
          let spinnerElement =
            '<div class="spinner-border text-primary" role="status" style="display:flex;align-self:center;color: #2e6d7c !IMPORTANT;margin-left:10px;"><span class="visually-hidden">Loading...</span></div>';

          $(`p:contains('${studentID}')`)
            .parent()
            .parent()
            .next("div")
            .remove();

          $(`p:contains('${studentID}')`)
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

  const onUpdateHandler = (e) => {
    const studentID = e.target.closest("[data-info]").getAttribute("data-info");

    window.location.href = `updateUser.php?type=student&userID=${studentID}`;
  };

  const onAddStudent = () => {
    window.location.href = "addUser.php?type=student";
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
          .attr("alt", "expand")
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
        let expandContent = $("<main>").addClass("expandedContent allStudents");

        let iconTrash = $("<i>").addClass("fa-regular fa-trash-can");
        let iconUpdate = $("<i>").addClass("fa-regular fa-pen-to-square");

        let expandedDeleteUser = $("<button>")
          .addClass("btn btn-outline-danger")
          .attr("title", "Delete User")
          .attr("data-info", row.ID)
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
          .attr("data-info", row.ID)
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
      table: "student",
    })
      .then((data) => {
        if (data.length === 0) {
          $(".emptyAllStudents").css("display", "block");
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

  $("#addStuds").on("click", onAddStudent);

  pagination.setPaginationElement($(".contentViewTypeContainer"));
  fetchStudents();
  pagination.onClickHandler(renderContent);
  pagination.itemsPerPage = 3

  toast.setContent("User deleted succesfully!");
  modal.setTitle("Delete User");
  modal.setContent("Are you sure you want to delete the selected user?");
  modal.setButtonsText("Cancel", "Confirm");
  modal.onClickCloseHandler(() => {
    modal.closeModal();
  });
});
