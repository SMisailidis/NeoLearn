// Imports
import { fetchData } from "./eventHandler.js";

$(document).ready(function () {
  // Get curriculum details from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const curId = urlParams.get("curID");
  const crsTitle = urlParams.get("courseTitle");
  const crsID = urlParams.get("courseID");

  // Set the course name in the page
  $("#crsName").text(crsTitle + " (" + crsID + ")");

  // Function to update the list of notes details
  const updateNotesDetailsList = () => {
    // Container for displaying all the details
    const DetailsContainer = $(".allInfo");

    // Fetch curriculum details for notes
    fetchData($, "assets/Back-End/getCurriculumForNotes.php", "POST", {
      curr_id: curId,
    })
      .then((response) => {
        $.each(response, function (index, curriculum) {
          // Create a container for the note title
          const noteName = $("<div>")
            .addClass("noteTitle")
            .text(curriculum.Title);

          // Create a container for description and uploaded files
          const descAndFilesCont = $("<div>").addClass("descandFilesContainer");

          // Create a container for description
          const descCont = $("<div>").addClass("descContainer");
          const descBox = $("<div>")
            .addClass("descBox")
            .text(curriculum.Description);
          descBox.appendTo(descCont);
          descCont.appendTo(descAndFilesCont);

          // Create a container for uploaded files
          const filesCont = $("<div>").addClass("filesContainer");
          const filesBox = $("<div>").addClass("filesBox");
          const uploadText = $("<div>")
            .addClass("uploadText")
            .text("Uploaded Files");
          const uploadedFiles = $("<div>").addClass("uploadedFiles");

          // Create links for PDF and videos
          if (curriculum?.Pdf_Link) {
            const pdfList = curriculum.Pdf_Link.split(",");
            for (let i = 0; i < pdfList.length; i++) {
              const uploadedPdf = $("<div>").addClass("uploadedPdf");
              const pdfLink = $("<a>")
                .attr("title", pdfList[i])
                .attr("href", `assets/documents/${pdfList[i]}`)
                .text("PDF Link");
              pdfLink.appendTo(uploadedPdf);
              uploadedPdf.appendTo(uploadedFiles);
            }
          }
          if (curriculum?.Video_Link) {
            const videoList = curriculum.Video_Link.split(",");
            for (let i = 0; i < videoList.length; i++) {
              const uploadedVideos = $("<div>").addClass("uploadedVideos");
              const videoLink = $("<a>")
                .attr("title", videoList[i])
                .attr("href", "videoDisplay.php")
                .on("click", function () {
                  sessionStorage.setItem("video", videoList[i]);
                })
                .text("Watch Video");
              videoLink.appendTo(uploadedVideos);
              uploadedVideos.appendTo(uploadedFiles);
            }
          }

          // Append links to their respective containers
          uploadText.appendTo(filesBox);
          uploadedFiles.appendTo(filesBox);
          filesBox.appendTo(filesCont);
          filesCont.appendTo(descAndFilesCont);

          // Create a button container for the quiz
          const quizButton = $("<a>")
            .addClass("quizButton")
            .attr("href", `quiz.php?curID=${curId}`)
            .text("QUIZ");

          // Append all the created elements to the main details container
          noteName.appendTo(DetailsContainer);
          descAndFilesCont.appendTo(DetailsContainer);
          quizButton.appendTo(DetailsContainer);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Call the function to update notes details list
  updateNotesDetailsList();
});
