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
                        .attr("href", "./viewCourseNotes.php")  
                        .data("courseTitle", course.Title)
                        .text(course.Title);

                    const viewCourse = $("<a>")
                        .addClass("viewCourse")
                        .attr("href", "./viewCourseNotes.php") 
                        .data("courseTitle", course.Title)
                        .append($("<img>").attr("src", "./assets/images/whiteRightarrow.png").attr("alt", "arrow"));


                    courseDiv.append(courseTitle).append(viewCourse);
                    coursesContainer.append(courseDiv);
                });
            })
            .catch((error) => {
                console.log("Error fetching enrolled courses: " + error);
            });
    }

    // Handle click on courseTitle or viewCourse
    $(document).on("click", ".courseTitle, .viewCourse", function (event) {
        event.preventDefault();
        const courseId = $(this).data("courseTitle");
        console.log("Clicked courseTitle:", courseId);

        if (courseId !== undefined) {
            // Redirect to the next page with courseId
            window.location.href = $(this).attr("href") + "?courseTitle=" + courseId;
        }
    });

    const studentID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
    updateEnrolledCourseList(studentID);
});





