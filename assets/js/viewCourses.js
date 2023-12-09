
import { fetchData } from './EventHandler.js';
import modal from './modal.js';
import toast from './toast.js';

$(document).ready(function () {
    function updateCourseList(teacherId) {
        const coursesList = $(".CoursesList");

        fetchData($, "assets/Back-End/getCourses.php", "POST", { teacher_id: teacherId })
            .then((response) => {

                $.each(response, function (index, course) {
                    const CourseLine = $("<div>").addClass("CourseLine");
                    let courseTitle = course.Title;
                    let crsId = course.ID;
                    const name = $("<a>").addClass("CourseName").attr("href", "viewCourseChapters.php?courseTitle=" + encodeURIComponent(courseTitle) + "&courseId=" + encodeURIComponent(crsId)).append(course.Title);

                    const editAnchor = $("<a>").addClass("ENbuttons").attr("id", "editButton").attr("href", "editCourse.php?courseId=" + encodeURIComponent(crsId));
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

    function resetPage(){
        $(".Buttons, .RemoveButtons, .ENbuttons, .courseCheckbox").toggle();

        if ($(this).attr("id") === "cancelB") {
            $(".courseCheckbox").prop("checked", false);
        }

        updateConfirmButtonState();
    }

    $("#RemoveB, #cancelB").click(function () {
        
        resetPage();

        updateConfirmButtonState();
    });

    
    modal.setTitle("Delete Courses");
    modal.setContent("Are you sure you want to delete the selected courses?");
    modal.setButtonsText("Cancel", "Remove");
    modal.onClickCloseHandler(function cancelRemoval() {
        $(".Buttons, .RemoveButtons, .ENbuttons, .courseCheckbox").toggle();

        $(".courseCheckbox").prop("checked", false);

    });
    modal.onClickSaveHandler(function RemoveCourses() {
        modal.closeModal();
        const checkedCourseIDs = $(".courseCheckbox:checked").map(function () {
            return $(this).val();
        }).get();
        console.log(checkedCourseIDs);
        fetchData(jQuery, 'assets/Back-End/deleteCourses.php', "POST", { course_ids: checkedCourseIDs }).then((data) => {
            console.log("Courses deleted successfully!");
        }).catch((error) => {
            console.error(error)
        })

        location.reload();

        showToast();   
        
    });

    $("#confirmB").click(function () {

        modal.openModal();
        toast.setContent("Courses deleted successfully!");

    });

});
