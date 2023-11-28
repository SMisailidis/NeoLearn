import { fetchData } from './EventHandler.js';

$(document).ready(function () {
    function updateCourseList(studentId) {
        const coursesContainer = $(".left-child");

        fetchData($, "assets/Back-End/getEnrolledCourses.php", "POST", { student_id: studentId })
            .then((response) => {
                $.each(response, function (index, course) {
                    const courseDiv = $("<div>").addClass("rectangle");

                    const courseTitle = $("<a>").addClass("courseTitle").attr("href", "#").text(course.Title);

                    const viewCourse = $("<a>").addClass("viewCourse").attr("href", "#");

                    const arrowImage = $("<img>").attr("src", "./assets/images/whiteRightarrow.png").attr("alt", "arrow");

                    viewCourse.append(arrowImage);

                    courseDiv.append(courseTitle).append(viewCourse);

                    coursesContainer.append(courseDiv);
                });
            })
            .catch((error) => {
                console.log("Error fetching enrolled courses: " + error);
            });
    }

    const studentID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
    updateCourseList(studentID);
});
