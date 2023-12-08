import { fetchData } from './EventHandler.js';

$(document).ready(function () {

    const urlParams = new URLSearchParams(window.location.search);
    const curId = urlParams.get('curID');
    const crsTitle = urlParams.get('courseTitle');
    const crsID = urlParams.get('courseId');

    $("#TitleCourse").text(crsTitle + " (" + crsID + ")");

    const updateChapterDetailsList = () => {
        fetchData($, "assets/Back-End/getCurriculumForNotes.php", "POST", { curr_id: curId })
            .then((response) => {
                const curriculum = response[0];

                $(".noteTitleT").val(curriculum.Title);
                $(".courseNameT #ChapterTitlePlaceholderT").text(curriculum.ChapterTitle);
                $(".descBoxT").text(curriculum.Description);
                $(".uploadedPdfT a").attr("href", curriculum.Pdf_Link).text(curriculum.Pdf_Link);
                $(".uploadedVideosT a").attr("href", curriculum.Video_Link).text(curriculum.Video_Link);

            
            })
            .catch((error) => {
                console.log("Error fetching curriculum details: " + error);
            });
    }

    function saveChanges(courseId, newTitle, newDescription) {

        fetchData($, "assets/Back-End/updateChapterDetails.php", "POST", {
            course_id: courseId,
            new_title: newTitle,
            new_description: newDescription
        })
        .then((response) => {
            console.log("Changes saved successfully");
        })
        .catch((error) => {
            console.error("Error saving changes: " + error);
        });
    }

    $("#editB").on("click", function () {
        const newChapterTitle = $(".noteTitleT").val();
        const newDescription = $(".descBoxT").val();

       saveChanges(crsID, newChapterTitle, newDescription);
       location.reload();
    });

    updateChapterDetailsList();
});
