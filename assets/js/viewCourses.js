
import { fetchData } from './EventHandler.js';

$(document).ready(function () {
    function updateCourseList(teacherId) {
        const coursesList = $(".CoursesList");

        fetchData($, "assets/Back-End/getCourses.php", "POST", { teacher_id: teacherId })
            .then((response) => {

                $.each(response, function (index, course) {
                    const CourseLine = $("<div>").addClass("CourseLine")
                    const name = $("<a>").addClass("CourseName").attr("href", "").append(course.Title)
                    const editAnchor = $("<a>").addClass("ENbuttons").attr("id", "editButton").attr("href", "")
                    const editImage = $("<img>").addClass("ENicons").attr("src", "assets/images/edit.png").attr("width", "30").attr("height", "30")

                    const editButton = editAnchor.append(editImage)

                    const checkbox = $("<input>").attr("type", "checkbox").val(course.ID).addClass("courseCheckbox");
                
                    CourseLine.append(name).append(editButton).append(checkbox);
                    coursesList.append(CourseLine)
                });
            })
            .catch((error) => {
                console.log("Error fetching courses: " + error);
            });
    }
    const teacherID = JSON.parse(sessionStorage.getItem("userData"))[0].ID
    updateCourseList(teacherID)

    $("#RemoveB, #cancelB").click(function () {
        $(".Buttons, .RemoveButtons, .ENbuttons, .courseCheckbox").toggle();
    });

    $("#confirmB").click(function () {
        const selectedCourses = $(".courseCheckbox:checked").map(function () {
            return $(this).val();
        }).get();
        
        const ModalB = $("#confirmB");

        if (selectedCourses.length === 0) {
            ModalB.attr("data-target", "#noCourseSelectedModal");
            $("#noCourseSelectedModal").modal('show');
        } else {
            ModalB.attr("data-target", "#confirmationModal");
            $("#confirmationModal").modal('show');
        }
    });

    $("#OKbutton").click(function () {
        $("#noCourseSelectedModal").modal('hide');
    });

    $("#confirmDeleteBtn").click(function () {
        const selectedCourses = $(".courseCheckbox:checked").map(function () {
            return $(this).val();
        }).get();
        console.log(selectedCourses);

        if (selectedCourses.length === 0) {
            console.log("No courses selected for deletion");
            return;
        }
    });

    

});


