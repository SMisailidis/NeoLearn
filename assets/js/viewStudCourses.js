//Imports
import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";
import pagination from "./pagination.js";

$(document).ready(function () {
  // Function to render courses on the page
  function renderCourses() {
    pagination.renderContent(() => {
      pagination.renderElement.empty();
      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      const pageData = pagination.data.slice(startIndex, endIndex);

      $.each(pageData, function (index, course) {
        // Creating course elements dynamically
        const courseDiv = $("<div>").addClass("rectangle");
        const courseTitle = $("<a>")
          .addClass("courseTitle")
          .attr("title", course.Title)
          .attr(
            "href",
            `./viewCourseNotes.php?courseTitle=${course.Title}&courseID=${course.ID}`
          )
          .attr("id", course.ID)
          .text(course.Title);
        const viewCourse = $("<a>")
          .addClass("viewCourse")
          .attr(
            "href",
            `./viewCourseNotes.php?courseTitle=${course.Title}&courseID=${course.ID}`
          )
          .attr("id", course.ID)
          .append(
            $("<img>")
              .attr("src", "./assets/images/whiteRightarrow.png")
              .attr("alt", "arrow")
              .addClass("viewCourseImage")
          );
        const checkBoxCont = $("<div>").addClass("checkBoxCont");
        const rmvCheckBox = $('<input type="checkbox">')
          .addClass("removeCheckBox")
          .val(course.ID);

        checkBoxCont.append(rmvCheckBox);
        courseDiv.append(courseTitle).append(viewCourse).append(checkBoxCont);
        pagination.renderElement.append(courseDiv);

        rmvCheckBox.hide();
      });
    });
  }

  // Function to update the list of enrolled courses
  function updateEnrolledCourseList(studentId) {
    fetchData($, "assets/Back-End/getEnrolledCourses.php", "POST", {
      student_id: studentId,
    })
      .then((response) => {
        if (response.length === 0) {
          $(".emptyStudCourses").css("display", "block");
        } else {
          // Update pagination data and render courses
          pagination.setData(response);
          renderCourses();
          pagination.updatePaginationLinks();
        }

        // Add event listener for checkbox changes
        $(".checkBoxCont input[type='checkbox']").on("change", function () {
          updateConfirmButtonState();
        });

        // Initial check for confirm button state
        updateConfirmButtonState();
      })
      .catch((error) => {
        console.log("Error fetching enrolled courses: " + error);
      });

    // Hiding and toggling buttons and checkboxes
    $("#confirmBtn").hide();
    $("#cancelBtn").hide();

    // Handling remove button click
    $("#removeBtn").on("click", function () {
      $("#removeBtn").hide();
      $("#cancelBtn").toggle();
      $("#addBtn").hide();
      $(".viewCourse").toggle();
      $("#confirmBtn").toggle();
      $(".checkBoxCont input[type='checkbox']").toggle();
    });

    // Handling cancel button click
    $("#cancelBtn").on("click", function () {
      $("#confirmBtn").toggle();
      $("#cancelBtn").toggle();
      $("#addBtn").toggle();
      $("#removeBtn").toggle();
      $(".viewCourse").toggle();
      $(".checkBoxCont input[type='checkbox']").toggle();
      $(".checkBoxCont input[type='checkbox']").prop("checked", false);
      updateConfirmButtonState(); // Update confirm button state on cancel
    });

    // Handling confirm button click
    $("#confirmBtn").on("click", function () {
      modal.openModal();
    });

    //Handling Add Button
    $("#addBtn").on("click", function () {
      window.location.href = "availCourses.php";
    });

    // Handling pagination
    pagination.setPaginationElement($(".left-child"));
    pagination.onClickHandler(renderCourses);

    // Setting up toast and modal properties
    toast.setContent("Courses deleted successfully!");
    modal.setTitle("Remove courses");
    modal.setContent("Are you sure you want to remove the selected courses?");
    modal.setButtonsText("Cancel", "Confirm");

    // Handling save button click in modal
    modal.onClickSaveHandler(function saveClick() {
      const checkedEnrolledCoursesIDs = $(
        ".checkBoxCont input[type='checkbox']:checked"
      )
        .map(function () {
          return $(this).val();
        })
        .get();

      // Logging checked course IDs and triggering deletion
      console.log(checkedEnrolledCoursesIDs);
      fetchData(jQuery, "assets/Back-End/deleteEnrolledCourse.php", "POST", {
        EnrolledCourses_ids: checkedEnrolledCoursesIDs,
      })
        .then((data) => {
          console.log("Courses deleted successfully!");
        })
        .catch((error) => {
          console.error(error);
        });

      // Removing deleted courses from the page
      checkedEnrolledCoursesIDs.forEach((courseID) => {
        $(`.checkBoxCont input[type='checkbox'][value='${courseID}']`)
          .closest(".rectangle")
          .remove();
      });

      // Toggling and resetting elements, closing modal, and showing toast
      $("#confirmBtn").toggle();
      $("#cancelBtn").toggle();
      $("#addBtn").toggle();
      $("#removeBtn").toggle();
      $(".viewCourse").toggle();
      $(".checkBoxCont input[type='checkbox']").toggle();
      $(".checkBoxCont input[type='checkbox']").prop("checked", false);

      modal.closeModal();
      toast.showToast();
    });

    // Handling close button click in modal
    modal.onClickCloseHandler(function removeClick() {
      $("#confirmBtn").toggle();
      $("#cancelBtn").toggle();
      $("#addBtn").toggle();
      $("#removeBtn").toggle();
      $(".viewCourse").toggle();
      $(".checkBoxCont input[type='checkbox']").toggle();
      $(".checkBoxCont input[type='checkbox']").prop("checked", false);
      updateConfirmButtonState(); // Update confirm button state on modal close
    });
  }

  // Function to update the state of the confirm button based on checkbox selection
  function updateConfirmButtonState() {
    const atLeastOneCheckboxChecked =
      $(".checkBoxCont input[type='checkbox']:checked").length > 0;
    $("#confirmBtn").prop("disabled", !atLeastOneCheckboxChecked);
  }

  // Fetching student ID from session storage and updating enrolled courses
  const studentID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
  updateEnrolledCourseList(studentID);
});
