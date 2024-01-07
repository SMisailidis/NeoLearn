import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";
import pagination from "./pagination.js";

$(document).ready(function () {
  // Retrieve teacher ID from session storage
  const teacherID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;

  // Hide confirmation buttons initially
  $("#cancelB").hide();
  $("#confirmB").hide();

  // Function to render courses based on pagination data
  const renderCourses = () => {
    pagination.renderContent(() => {
      pagination.renderElement.empty();

      // Calculate the index range for the current page
      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      const pageData = pagination.data.slice(startIndex, endIndex);

      // Repeat the page data and create course elements
      $.each(pageData, function (index, course) {
        const CourseLine = $("<div>").addClass("CourseLine");
        let courseTitle = course.Title;
        let crsId = course.ID;

        // Create a link to view course chapters with appropriate parameters
        const name = $("<a>")
          .addClass("CourseName")
          .attr(
            "href",
            "viewCourseChapters.php?courseTitle=" +
            encodeURIComponent(courseTitle) +
            "&courseId=" +
            encodeURIComponent(crsId)
          )
          .append(course.Title);

        // Create an edit button with a link to the editCourse.php page
        const editAnchor = $("<a>")
          .addClass("ENbuttons")
          .attr("id", "editButton")
          .attr("href", "editCourse.php?courseId=" + encodeURIComponent(crsId));
        const editImage = $("<img>")
          .addClass("ENicons")
          .attr("src", "assets/images/edit.png")
          .attr("width", "30")
          .attr("height", "30");
        const editButton = editAnchor.append(editImage);

        // Create a checkbox for course selection
        const checkbox = $("<input>")
          .attr("type", "checkbox")
          .attr("id", course.ID)
          .attr("value", course.ID)
          .on("change", onChangeHandler)
          .addClass("courseCheckbox");

        // Append elements to the course line
        CourseLine.append(name).append(editButton).append(checkbox);
        pagination.renderElement.append(CourseLine);
      });
    });
  };

  // Function to update the course list based on teacher ID
  const updateCourseList = (teacherId) => {
    fetchData($, "assets/Back-End/getCourses.php", "POST", {
      teacher_id: teacherId,
    })
      .then((response) => {
        // Set pagination data and render courses
        pagination.setData(response);
        renderCourses();
        pagination.updatePaginationLinks();
      })
      .catch((error) => {
        console.log("Error fetching courses: " + error);
      });
  };

  // Function to update the state of the confirm button based on checkbox selection
  const updateConfirmButtonState = () => {
    const atLeastOneCheckboxChecked = $(".courseCheckbox:checked").length > 0;
    $("#confirmB").prop("disabled", !atLeastOneCheckboxChecked);
  };

  // Function to reset the page state
  const resetPage = () => {
    $(".Buttons, .RemoveButtons, .ENbuttons, .courseCheckbox").toggle();

    // Uncheck checkboxes if cancel button is clicked
    if ($(this).attr("id") === "cancelB") {
      $(".courseCheckbox").prop("checked", false);
    }

    updateConfirmButtonState();
  };

  // Event listeners for edit buttons
  $(".ENbuttons").on("click", function () {
    const courseId = $(this).closest(".CourseLine").data("course-id");
    fetchCourseDetails(courseId);
  });

  // Event listeners for Remove and Cancel buttons
  $("#RemoveB, #cancelB").click(function () {
    resetPage();
    updateConfirmButtonState();

  });

  // Event Listener to toggle buttons
  $("#RemoveB, #cancelB").click(function () {
    $("#RemoveB, #cancelB, #confirmB, #AddB").toggle();
    updateConfirmButtonState();
  });

  // Event handler for modal close
  modal.onClickCloseHandler(function cancelRemoval() {
    $("#RemoveB, #cancelB, #confirmB, #AddB, .Buttons, .RemoveButtons, .ENbuttons, .courseCheckbox").toggle();
    $(".courseCheckbox").prop("checked", false);
  });

  // Event handler for modal save
  modal.onClickSaveHandler(function RemoveCourses() {
    modal.closeModal();
    const checkedCourseIDs = $(".courseCheckbox:checked")
      .map(function () {
        return $(this).val();
      })
      .get();

    // Call the backend to delete selected courses
    fetchData(jQuery, "assets/Back-End/deleteCourses.php", "POST", {
      course_ids: checkedCourseIDs,
    })
      .then((data) => {
        if (data) {
          
          updateConfirmButtonState();
          toast.showToast();
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // Remove the selected courses from the UI
    checkedCourseIDs.forEach((courseID) => {
      $(".courseCheckbox[value='" + courseID + "']")
        .closest(".CourseLine")
        .remove();
    });
  });

  // Event listener for the Confirm button
  $("#confirmB").click(function () {
    modal.openModal();
  });

  // Event listener for checkbox change
  const onChangeHandler = () => {
    updateConfirmButtonState();
  };

  // Set toast content for course removal success
  toast.setContent("Courses removed successfully!");

  // Set modal title, content, and button text
  modal.setTitle("Delete Courses");
  modal.setContent("Are you sure you want to delete the selected courses?");
  modal.setButtonsText("Cancel", "Remove");

  // Initial update of the course list
  updateCourseList(teacherID);

  // Set pagination element and click handler
  pagination.setPaginationElement($(".CoursesList"));
  pagination.onClickHandler(renderCourses);
});
