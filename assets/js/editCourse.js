import { fetchData } from './EventHandler.js';
import modal from './modal.js';
import toast from './toast.js';

$(document).ready(function () {
    
    function updateCourseDetails(courseId) {
        fetchData($, "assets/Back-End/getCourseDetails.php", "POST", { course_id: courseId })
            .then((response) => {
                const courseDetails = response;

                if (courseDetails.error) {
                    console.error("Error fetching details: " + courseDetails.error);
                } else {
                    $("#title").val(courseDetails[0].Title);
                    $("#description").val(courseDetails[0].Description);
                }
            })
            .catch((error) => {
                console.log("Error fetching details: " + error);
            });
    }

   
    function saveChanges(courseId, newTitle, newDescription) {

        fetchData($, "assets/Back-End/updateCourse.php", "POST", {
            course_id: courseId,
            new_title: newTitle,
            new_description: newDescription
        })
            .then((response) => {
                if (response) {
                    console.log("Changes saved successfully");
                    modal.closeModal();
                    toast.showToast();
                }

            })
            .catch((error) => {
                console.error("Error saving changes: " + error);
            });


    }

    toast.setContent("Changes saved successfully!")
    modal.setTitle("Edit Course");
    modal.setContent("Are you sure you want to save these changes?");
    modal.setButtonsText("Cancel", "Save");
    modal.onClickCloseHandler(()=>{
        location.reload();
    });

   
    modal.onClickSaveHandler(() => {
        const newTitle = $("#title").val();
        const newDescription = $("#description").val();

        saveChanges(courseId, newTitle, newDescription);
    })


    if (courseId) {
        updateCourseDetails(courseId);

        
        $("#saveChanges").on("click", function () {
            modal.openModal();
            
        });
    } else {
        console.error("No courseId found in the URL");
    }

});