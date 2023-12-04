import { fetchData } from './EventHandler.js';

$(document).ready(function () {

    const urlParams = new URLSearchParams(window.location.search);
    const courseTitle = urlParams.get('courseTitle');
    const courseID = urlParams.get("courseID");

    $("#curHeader").text(courseTitle + " (" + courseID + ")")
    const updateNotesList = () => {
        
        const ChaptersContainer = $(".allRectangles");
        
        fetchData($, "assets/Back-End/getCurriculumTitle.php", "POST", { course_id: courseID })
        .then((response) => {
            $.each(response, function (index, curriculum) {

                const chapterRow = $("<div>")
                .addClass("Notesrectangle");


                const chapterTitle = $("<a>")
                .addClass("chapterNotesTitle")
                .attr("href", `viewNotesDetails.php?courseTitle=${courseTitle}&courseID=${courseID}&curID=${curriculum.ID}`).text(curriculum.Title);
                
                chapterRow.append(chapterTitle);
                ChaptersContainer.append(chapterRow);
            });
        })
        .catch((error) => {
            console.log("Error fetching curriculum titles: " + error);
        });
    }
    updateNotesList();

});
