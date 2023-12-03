import { fetchData } from './EventHandler.js';
 

$(document).ready(function () {

    function updateEnrolledCourseList(studentId) {
        const coursesContainer = $(".left-child");

        fetchData($, "assets/Back-End/getEnrolledCourses.php", "POST", { student_id: studentId })
            .then((response) => {
                $.each(response, function (index, course) {

                    const courseDiv = $("<div>")
                    .addClass("rectangle");

                    const courseTitle = $("<a>")
                        .addClass("courseTitle")
                        .attr("href", `./viewCourseNotes.php?courseTitle=${course.Title}&courseID=${course.ID}`)  
                        .attr("id", course.ID)
                        .text(course.Title);

                    const viewCourse = $("<a>")
                        .addClass("viewCourse")
                        .attr("href", `./viewCourseNotes.php?courseTitle=${course.Title}&courseID=${course.ID}`)  
                        .attr("id", course.ID)
                        .append($("<img>").attr("src", "./assets/images/whiteRightarrow.png").attr("alt", "arrow"));


                    courseDiv.append(courseTitle).append(viewCourse);
                    coursesContainer.append(courseDiv);
                });
            })
            .catch((error) => {
                console.log("Error fetching enrolled courses: " + error);
            });
    }

    const studentID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
    updateEnrolledCourseList(studentID);
});





