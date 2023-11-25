import { fetchData } from "./eventHandler.js";

$(document).ready(function(){
    
    function updateCourses(studentID){


        fetchData($, "assets/Back-End/getEnrolledStudents.php", 'GET', {studentID: studID})
    .then(response => {

        const leftChildDiv = $(".left-child");

      $.each(response, function (index, course) {
        const courseDiv = $("<div>").addClass("rectangle");
        const courseTitle = $("<a>").addClass("courseTitle").attr("href", course.ID).text(course.Title);
        const viewCourse = $("<a>").addClass("viewCourse").attr("href", "#");
        const arrowImage = $("<img>").attr("src", "./assets/images/whiteRightarrow.png").attr("alt", "arrow");

        viewCourse.append(arrowImage);
        courseDiv.append(courseTitle).append(viewCourse);
        leftChildDiv.append(courseDiv);

      });
    })
    .catch(error => {
      console.error('Error fetching course data:', error);
    });

    }

    const studentID = JSON.parse(sessionStorage.getItem("userData"))[0].ID
    updateCourses(studentID)

});
