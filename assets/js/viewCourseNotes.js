// Imports
import { fetchData } from "./eventHandler.js";
import pagination from "./pagination.js";

$(document).ready(function () {

    // Get course details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const courseTitle = urlParams.get('courseTitle');
    const courseID = urlParams.get("courseID");

    // Set the course header
    $("#curHeader").text(courseTitle + " (" + courseID + ")");

    // Function to render courses based on pagination data
    function renderCourses() {
        pagination.renderContent(() => {
            pagination.renderElement.empty();
            const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
            const endIndex = startIndex + pagination.itemsPerPage;
            const pageData = pagination.data.slice(startIndex, endIndex);

            $.each(pageData, function (index, curriculum) {
                // Creating notes elements dynamically
                const chapterRow = $("<div>").addClass("Notesrectangle");

                const chapterTitle = $("<a>")
                    .addClass("chapterNotesTitle")
                    .attr("href", `viewNotesDetails.php?courseTitle=${courseTitle}&courseID=${courseID}&curID=${curriculum.ID}`)
                    .text(curriculum.Title);

                chapterRow.append(chapterTitle);

                pagination.renderElement.append(chapterRow);
            });
        });
    }

    // Function to update the list of notes based on curriculum titles
    function updateNotesList() {
        fetchData($, "assets/Back-End/getCurriculumTitle.php", "POST", { course_id: courseID })
            .then((response) => {
                // Update pagination data and render courses
                pagination.setData(response);
                renderCourses();
                pagination.updatePaginationLinks();
            })
            .catch((error) => {
                console.log( error);
            });
    }

    // Handling pagination
    pagination.setPaginationElement($(".allRectangles"));
    pagination.onClickHandler(renderCourses);

    // Update of the notes list
    updateNotesList();
});
