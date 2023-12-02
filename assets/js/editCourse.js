import { fetchData } from './EventHandler.js';

$(document).ready(function () {
    function updateCourseDetails(courseId) {
        fetchData($, "assets/Back-End/getCourseDetails.php", "POST", { course_id: courseId })
            .then((response) => {
                const courseDetails = JSON.parse(response);

                if (courseDetails.error) {
                    console.error("Error fetching details: " + courseDetails.error);
                } else {
                    $("#title").val(courseDetails.Title);
                    $("#description").val(courseDetails.Description);
                }
            })
            .catch((error) => {
                console.log("Error fetching details: " + error);
            });
    }

});