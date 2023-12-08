import { fetchData } from './EventHandler.js';

$(document).ready(function () {
    let urlParams = new URLSearchParams(window.location.search);
    let courseId = urlParams.get('courseId');
    let courseTitle = urlParams.get('courseTitle');

    $('#cTitle').text(courseTitle + "(" + courseId + ")");

    const updateNotesList = () => {
        const chaptersCentralDiv = $(".chapters_central-div");
        
        fetchData($, "assets/Back-End/getCurriculumTitle.php", "POST", { course_id: courseId })
            .then((response) => {
                
                chaptersCentralDiv.empty();

                $.each(response, function (index, curriculum) {
                    const chapterRectangle = $("<div>").addClass("chapterRectangle");
                    const chapterTitle = $("<a>")
                        .addClass("chapterTitle")
                        .attr("href", "viewChapterDetails.php?courseTitle=" + encodeURIComponent(courseTitle) + "&courseId=" + encodeURIComponent(courseId) + "&curID=" + encodeURIComponent(curriculum.ID))
                        .text(curriculum.Title);

                    chapterRectangle.append(chapterTitle);
                    chaptersCentralDiv.append(chapterRectangle);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    updateNotesList();
});
