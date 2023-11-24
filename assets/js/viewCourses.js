
import { fetchData } from './EventHandler.js';

$(document).ready(function () {
    function updateCourseList(teacherId) {
        const coursesList = $(".CoursesList");

        fetchData($, "assets/Back-End/getCourses.php", "POST", { teacher_id: teacherId })
            .then((response) => {

                $.each(response, function (index, course) {
                    const CourseLine=$("<div>").addClass("CourseLine")
                    const name=$("<p>").addClass("CourseName").append(course.Title)
                    const editAnchor=$("<a>").addClass("ENbuttons").attr("id","editButton")
                    const editImage=$("<img>").addClass("ENicons").attr("src","assets/images/edit.png").attr("width","30").attr("height","30")
                    const notesAnchor=$("<a>").addClass("ENbuttons").attr("id","notesButton")
                    const notesImage=$("<img>").addClass("ENicons").attr("src","assets/images/notes.png").attr("width","30").attr("height","30")
                    const editButton=editAnchor.append(editImage)
                    const notesButton=notesAnchor.append(notesImage)
                    CourseLine.append(name).append(editButton).append(notesButton)
                    coursesList.append(CourseLine)
                });
            })
            .catch((error) => {
                console.log("Error fetching courses: " + error);
            });
    }
    const teacherID=JSON.parse(sessionStorage.getItem("userData"))[0].ID
    updateCourseList(teacherID)
});


