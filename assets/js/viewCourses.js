
import { fetchData } from './EventHandler.js';

$(document).ready(function () {
    function updateCourseList(teacherId) {
        const coursesList = $(".CoursesList");

        fetchData($, "assets/Back-End/getCourses.php", "POST", { teacher_id: teacherId })
            .then((response) => {

                $.each(response, function (index, course) {
                    const CourseLine = $("<div>").addClass("CourseLine");
                    const name = $("<a>").addClass("CourseName").attr("href", "viewCourseChapters.php").append(course.Title);
                    let crsId = course.ID;
                    const editAnchor = $("<a>").addClass("ENbuttons").attr("id", "editButton").attr("href", "editCourse.php");
                    const editImage = $("<img>").addClass("ENicons").attr("src", "assets/images/edit.png").attr("width", "30").attr("height", "30");

                    const editButton = editAnchor.append(editImage);

                    const checkbox = $("<input>").attr("type", "checkbox").val(course.ID).addClass("courseCheckbox");
                
                    CourseLine.append(name).append(editButton).append(checkbox);
                    coursesList.append(CourseLine);

                });

                $(".courseCheckbox").on("change", function () {
                    const atLeastOneCheckboxChecked = $(".courseCheckbox:checked").length > 0;
                    $("#confirmB").prop("disabled", !atLeastOneCheckboxChecked);
                });
                
            })
            .catch((error) => {
                console.log("Error fetching courses: " + error);
            });

            $(".ENbuttons").on("click", function () {
                const courseId = $(this).closest('.CourseLine').data('course-id');
                fetchCourseDetails(courseId);
            });
    }
    const teacherID = JSON.parse(sessionStorage.getItem("userData"))[0].ID
    updateCourseList(teacherID);

    function updateConfirmButtonState() {
        const atLeastOneCheckboxChecked = $(".courseCheckbox:checked").length > 0;
        $("#confirmB").prop("disabled", !atLeastOneCheckboxChecked);
    }

    $("#RemoveB, #cancelB").click(function () {
        $(".Buttons, .RemoveButtons, .ENbuttons, .courseCheckbox").toggle();

        if ($(this).attr("id") === "cancelB") {
            $(".courseCheckbox").prop("checked", false);
        }

        updateConfirmButtonState();
    });

    $("#confirmB").click(function () {
        const checkedCourseIDs = $(".courseCheckbox:checked").map(function () {
            return $(this).val();
        }).get();
        fetchData(jQuery,'assets/Back-End/deleteCourses.php',"POST",{ course_ids: checkedCourseIDs } ).then((data) =>{
            console.log("ashdsadkjf");
        }).catch((error)=>{
            console.error(error)
        })
        
        console.log("Selected Course IDs:", checkedCourseIDs);
    });

});


