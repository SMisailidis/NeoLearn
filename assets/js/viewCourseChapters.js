import { fetchData } from "./EventHandler.js";
import pagination from "./pagination.js";

$(document).ready(function () {
  // Function to render courses based on pagination data
  function renderCourses() {
    pagination.renderContent(() => {
      pagination.renderElement.empty();

      // Calculate the index range for the current page
      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      const pageData = pagination.data.slice(startIndex, endIndex);

      // Iterate over the page data and create chapter elements
      $.each(pageData, function (index, curriculum) {
        const chapterRectangle = $("<div>").addClass("chapterRectangle");
        const chapterTitle = $("<a>")
          .addClass("chapterTitle")
          // Build the URL for viewing chapter details
          .attr(
            "href",
            "viewChapterDetails.php?courseTitle=" +
              encodeURIComponent(courseTitle) +
              "&courseId=" +
              encodeURIComponent(courseId) +
              "&curID=" +
              encodeURIComponent(curriculum.ID)
          )
          .text(curriculum.Title);

        chapterRectangle.append(chapterTitle);
        pagination.renderElement.append(chapterRectangle);
      });
    });
  }

  // Retrieve course ID and title from the URL
  let urlParams = new URLSearchParams(window.location.search);
  let courseId = urlParams.get("courseId");
  let courseTitle = urlParams.get("courseTitle");

  // Set the course title in the UI
  $("#cTitle").text(courseTitle + "-(" + courseId + ")");

  // Function to update the list of notes (curriculum)
  const updateNotesList = () => {
    fetchData($, "assets/Back-End/getCurriculumTitle.php", "POST", {
      course_id: courseId,
    })
      .then((response) => {
        // Set pagination data and render courses
        pagination.setData(response);
        renderCourses();
        pagination.updatePaginationLinks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Set pagination element and click handler
  pagination.setPaginationElement($(".Rectangles"));
  pagination.onClickHandler(renderCourses);

  // Initial update of the notes list
  updateNotesList();

  // Event listener for the "Add Chapter" button
  $("#addBtn_href").on("click", function (event) {
    event.preventDefault();

    // Redirect to the "Add Chapter" page with the current course ID
    const addChapterUrl =
      "addChapter.php?courseId=" + encodeURIComponent(courseId);
    window.location.href = addChapterUrl;
  });
});
