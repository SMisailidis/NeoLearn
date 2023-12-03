import { fetchData } from './EventHandler.js';

$(document).ready(function () {

    const urlParams = new URLSearchParams(window.location.search);
    const courseTitle = urlParams.get('courseTitle');

    function updateEnrolledCourseList(studentId, courseTitle) {

        const ChaptersContainer = $(".allRectangles");

        fetchData($, "assets/Back-End/getCurriculumTitle.php", "POST", { student_id: studentId, course_title: courseTitle })
            .then((response) => {
                $.each(response, function (index, curriculum) {

                    const chapterRow = $("<div>").addClass("Notesrectangle");
                    const chapterTitle = $("<a>").addClass("chapterNotesTitle").attr("href", "").append(curriculum.CurriculumTitle);

                    chapterRow.append(chapterTitle);
                    ChaptersContainer.append(chapterRow);
                });
            })
            .catch((error) => {
                console.log("Error fetching curriculum titles: " + error);
            });
    }

    const studentID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
    updateEnrolledCourseList(studentID, courseTitle);

});
