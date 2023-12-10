import { fetchData } from './EventHandler.js';
import toast from './toast.js';
import modal from './modal.js';

$(document).ready(function () {

    //Retrieve needed values from URL
    const urlParams = new URLSearchParams(window.location.search);
    const curId = urlParams.get('curID');
    const crsTitle = urlParams.get('courseTitle');
    const crsID = urlParams.get('courseId');

    $("#TitleCourse").text(crsTitle + " (" + crsID + ")");

    const updateChapterDetailsList = () => {
        fetchData($, "assets/Back-End/getCurriculumForNotes.php", "POST", { curr_id: curId })
            .then((response) => {
                const curriculum = response[0];

                $(".noteTitleT").val(curriculum.Title);
                $(".courseNameT #ChapterTitlePlaceholderT").text(curriculum.ChapterTitle);
                $(".descBoxT").text(curriculum.Description);
                $(".uploadedPdfT a").attr("href", curriculum.Pdf_Link).text(curriculum.Pdf_Link);
                $(".uploadedVideosT a").attr("href", curriculum.Video_Link).text(curriculum.Video_Link);

            
            })
            .catch((error) => {
                console.log("Error fetching curriculum details: " + error);
            });
    }

    function saveChanges(courseId, newTitle, newDescription) {

        fetchData($, "assets/Back-End/updateChapterDetails.php", "POST", {
            course_id: courseId,
            new_title: newTitle,
            new_description: newDescription
        })
        .then((response) => {
            if(response){
                console.log("Changes saved successfully");
                updateChapterDetailsList();
                modal.closeModal();
                toast.showToast();
            }
            
        })
        .catch((error) => {
            console.error("Error saving changes: " + error);
        });
    }

    toast.setContent("Changes saved successfully!");
    modal.setTitle("Edit chapter Details");
    modal.setContent("Are you sure you want to save these changes?");
    modal.setButtonsText("Cancel", "Save");
    modal.onClickCloseHandler(()=>{
        location.reload();
    });
    modal.onClickSaveHandler(()=>{
        const newChapterTitle = $(".noteTitleT").val();
        const newDescription = $(".descBoxT").val();

       saveChanges(crsID, newChapterTitle, newDescription);
       
    })

    $("#editB").on("click", function () {
        modal.openModal();
    });

    updateChapterDetailsList();
});
