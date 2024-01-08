import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";

$(document).ready(function () {
  // Retrieve course ID from the URL parameters
  let urlParams = new URLSearchParams(window.location.search);
  let courseId = urlParams.get("courseId");

  // Function to update course details based on the provided course ID
  function updateCourseDetails(courseId) {
    fetchData($, "assets/Back-End/getCourseDetails.php", "POST", {
      course_id: courseId,
    })
      .then((response) => {
        const courseDetails = response;

        if (courseDetails.error) {
          console.error("Error fetching details: " + courseDetails.error);
        } else {
          // Update the input fields with the fetched course details
          $("#title").val(courseDetails[0].Title);
          $("#description").val(courseDetails[0].Description);
        }
      })
      .catch((error) => {
        console.log("Error fetching details: " + error);
      });
  }

  // Function to save changes made to the course details
  function saveChanges(courseId, newTitle, newDescription) {
    fetchData($, "assets/Back-End/updateCourse.php", "POST", {
      course_id: courseId,
      new_title: newTitle,
      new_description: newDescription,
    })
      .then((response) => {
        if (response) {
          modal.closeModal();
          toast.showToast();
        }
      })
      .catch((error) => {
        console.error("Error saving changes: " + error);
      });
  }

  // Set up toast content, modal properties, and event handlers
  toast.setContent("Changes saved successfully!");
  modal.setTitle("Edit Course");
  modal.setContent("Are you sure you want to save these changes?");
  modal.setButtonsText("Cancel", "Save");
  modal.onClickCloseHandler(() => {
    location.reload();
  });

  modal.onClickSaveHandler(() => {
    // Retrieve new title and description from input fields
    const newTitle = $("#title").val();
    const newDescription = $("#description").val();

    // Save changes to the course details
    saveChanges(courseId, newTitle, newDescription);
  });

  // Check if courseId is available in the URL and update course details
  if (courseId) {
    updateCourseDetails(courseId);

    // Open modal when "Save Changes" button is clicked
    $("#saveChanges").on("click", function () {
      modal.openModal();
    });
  } else {
    console.error("No courseId found in the URL");
  }
});
