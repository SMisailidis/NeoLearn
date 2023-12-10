import { fetchData } from "./EventHandler";
import { uploadPDF } from "./uploadPDF";
import toast from "./toast";
import modal from "./modal";

$(document).ready(function() {
    let urlParams = new URLSearchParams(window.location.search);
    let courseId = urlParams.get('courseId');

    let cur_id = $("chapterID").value;
    let cur_title = $("chapterTitle").value;
    let cur_desc = $("chapterDesc").value;

    function addNewChapter(){
        fetchData($, "assets/Back-End/addNewChapter.php", "POST", {Course_ID : courseId, ID : cur_id, Title : cur_title, Description : cur_desc})
        .then((response) =>{
            
        })
        .catch((error)=>{
            console.log("Error creating chapter: " + error)
        });
    }
})
