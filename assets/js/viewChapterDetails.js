import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";
import { uploadPDF } from "./uploadPDF.js";

$(document).ready(function () {
  // Retrieve needed values from URL
  const urlParams = new URLSearchParams(window.location.search);
  const curId = urlParams.get("curID");
  const crsTitle = urlParams.get("courseTitle");
  const crsID = urlParams.get("courseId");

  // Create FormData object for file uploads
  let formData = new FormData();
  

  // Set the title in the UI based on the course details
  $("#TitleCourse").text(crsTitle + " (" + crsID + ")");

  // Function to update chapter details list based on the current curriculum ID
  const updateChapterDetailsList = () => {
    fetchData($, "assets/Back-End/getCurriculumForNotes.php", "POST", {
      curr_id: curId,
    })
      .then((response) => {
        const curriculum = response[0];

        // Update UI elements with the fetched curriculum details
        $(".noteTitleT").val(curriculum.Title);
        $(".courseNameT #ChapterTitlePlaceholderT").text(
          curriculum.ChapterTitle
        );
        $(".descBoxT").text(curriculum.Description);
        $(".uploadedPdfT a")
          .attr("href", curriculum.Pdf_Link)
          .text(curriculum.Pdf_Link);
        $(".uploadedVideosT a")
          .attr("href", curriculum.Video_Link)
          .text(curriculum.Video_Link);
      })
      .catch((error) => {
        console.log("Error fetching curriculum details: " + error);
      });
  };

  // Function to save changes made to chapter details
  function saveChanges(courseId, newTitle, newDescription, curId) {
    let files = $("#formFileMultiple")[0].files;
    let fileNames = [];

    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i].name);
      formData.append("files[]", files[i]);
    }

    fetchData($, "assets/Back-End/updateChapterDetails.php", "POST", {
      course_id: courseId,
      new_title: newTitle,
      new_description: newDescription,
      curID: curId,
      Pdf_Link: fileNames.join(",")
    })
      .then((response) => {
        if (response) {
          updateChapterDetailsList();
          modal.closeModal();
          toast.setContent("Changes saved successfully!");
          toast.showToast();
          // Upload PDF and update Pdf_Link in the database
          if (files.length > 0) {
            uploadPDF($, "assets/Back-End/uploadPDF.php", formData)
              .then((uploadResponse) => {
                console.log(uploadResponse);
                if (uploadResponse.success) {
                  // Handle success if needed
                } else {
                  console.error("Error uploading PDF: " + uploadResponse.message);
                }
              })
              .catch((error) => {
                console.log("Error uploading files: " + error);
              });
          }
        }
      })
      .catch((error) => {
        console.error("Error saving changes: " + error);
      });
  }

  // Set up toast content, modal properties, and event handlers
  toast.setContent("Changes saved successfully!");
  modal.setTitle("Edit chapter Details");
  modal.setContent("Are you sure you want to save these changes?");
  modal.setButtonsText("Cancel", "Save");
  modal.onClickCloseHandler(() => {
    location.reload();
  });
  modal.onClickSaveHandler(() => {
    // Retrieve new chapter title and description from input fields
    const newChapterTitle = $(".noteTitleT").val();
    const newDescription = $(".descBoxT").val();

    // Save changes to chapter details
    saveChanges(crsID, newChapterTitle, newDescription, curId);
  });

  // Open modal when the "Edit" button is clicked
  $("#editB").on("click", function () {
    modal.openModal();
  });

  // Initial update of chapter details list
  updateChapterDetailsList();
});

