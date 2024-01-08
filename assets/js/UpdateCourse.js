import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";


$(document).ready(function () {

    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('courseId');

    function updateCourseDetails(courseId) {
        fetchData($, "assets/Back-End/getCourseDetails.php", "POST", {
            course_id: courseId,
        })
            .then((response) => {
                const courseDetails = response;

                if (courseDetails.error) {
                    console.error("Error fetching details: " + courseDetails.error);
                } else {
                    $('input[name="Cname"]').val(courseDetails[0].Title);
                    $('input[name="Ccode"]').val(courseId);
                    $('input[name="Cdesc"]').val(courseDetails[0].Description);
                    $('input[name="Cobj"]').val(courseDetails[0].Objectives);
                    $('input[name="Cpre"]').val(courseDetails[0].Prerequisities);
                    $('.catSelect').val(courseDetails[0].Category);
                }
            })
            .catch((error) => {
                console.log("Error fetching details: " + error);
            });
    }


    function saveChanges(courseId, newTitle, newDescription, newCategory, newObjectives, newPrerequisites) {
        fetchData($, "assets/Back-End/UpdateCourseDetails.php", "POST", {
            course_id: courseId,
            new_title: newTitle,
            new_description: newDescription,
            new_category: newCategory,
            new_objectives: newObjectives,
            new_prerequisites: newPrerequisites
        })
            .then((response) => {
                if (response) {
                    modal.closeModal();
                    toast.showToast();
                }
            })
            .catch((error) => {
                console.error("Error saving changes: " + error);
            });
    }


    toast.setContent("Changes saved successfully!");
    modal.setTitle("Update Course");
    modal.setContent("Are you sure you want to save these changes?");
    modal.setButtonsText("Cancel", "Save");
    modal.onClickCloseHandler(() => {
        location.reload();
    });

    modal.onClickSaveHandler(() => {

        const newTitle = $('input[name="Cname"]').val();
        const newDescription = $('input[name="Cdesc"]').val();
        const newCategoryValue = $('.catSelect').val();
        const newObjectivesValue = $('input[name="Cobj"]').val();
        const newPrerequisitesValue = $('input[name="Cpre"]').val();

        saveChanges(courseId, newTitle, newDescription, newCategoryValue, newObjectivesValue, newPrerequisitesValue);

    });

    if (courseId) {
        updateCourseDetails(courseId);

        $("form").on("submit", function (event) {
            event.preventDefault();

            modal.openModal();
        });
    } else {
        console.error("No courseId found in the URL");
    }


    updateCourseDetails(courseId);
})



