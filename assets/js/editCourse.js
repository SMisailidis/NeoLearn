import { fetchData } from './EventHandler.js';

$(document).ready(function () {
    function updateCourseDetails(courseId) {
        fetchData($, "assets/Back-End/getCourseDetails.php", "POST", { course_id: courseId })
            .then((response) => {
                const courseDetails = response;

                if (courseDetails.error) {
                    console.error("Error fetching details: " + courseDetails.error);
                } else {
                    $("#title").val(courseDetails[0].Title);
                    $("#description").val(courseDetails[0].Description);
                }
            })
            .catch((error) => {
                console.log("Error fetching details: " + error);
            });
    }

    function saveChanges(courseId, newTitle, newDescription) {

        fetchData($, "assets/Back-End/updateCourse.php", "POST", {
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

    let urlParams = new URLSearchParams(window.location.search);
    let courseId = urlParams.get('courseId');

    if (courseId) {
        updateCourseDetails(courseId);

        $("#saveChanges").on("click", function () {
            
            const newTitle = $("#title").val();
            const newDescription = $("#description").val();

            saveChanges(courseId, newTitle, newDescription);
        });
    } else {
        console.error("No courseId found in the URL");
    }

});