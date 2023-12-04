import { fetchData } from './EventHandler.js';

$(document).ready(function () {

    const urlParams = new URLSearchParams(window.location.search);
    const curId = urlParams.get('curID');
    const crsTitle = urlParams.get('courseTitle');
    const crsID = urlParams.get('courseID');

    $("#crsName").text(crsTitle + " (" + crsID + ")");

    const updateNotesDetailsList = () => {

        const DetailsContainer = $(".allInfo");

        fetchData($, "assets/Back-End/getCurriculumForNotes.php", "POST", { curr_id: curId })
        .then((response) => {
            $.each(response, function (index, curriculum) {

                const noteName = $("<div>").addClass("noteTitle").text(curriculum.Title);

                const descAndFilesCont = $("<div>").addClass("descandFilesContainer");
                const descCont = $("<div>").addClass("descContainer"); 
                const descBox = $("<div>").addClass("descBox").text(curriculum.Description);
                descBox.appendTo(descCont);
                descCont.appendTo(descAndFilesCont);

                const filesCont = $("<div>").addClass("filesContainer");
                const filesBox = $("<div>").addClass("filesBox");
                const uploadText = $("<div>").addClass("uploadText").text("Uploaded Files");
                const uploadedFiles = $("<div>").addClass("uploadedFiles");
                const uploadedPdf = $("<div>").addClass("uploadedPdf");
                const uploadedVideos = $("<div>").addClass("uploadedVideos");
                const pdfLink = $("<a>").attr("href", curriculum.Pdf_Link).text("curriculum.Pdf_Link");
                const videoLink = $("<a>").attr("href", curriculum.Video_Link).text("curriculum.Video_Link");

                uploadText.appendTo(filesBox);

                pdfLink.appendTo(uploadedPdf);
                videoLink.appendTo(uploadedVideos);

                uploadedPdf.appendTo(uploadedFiles);
                uploadedVideos.appendTo(uploadedFiles);

                uploadedFiles.appendTo(filesBox);

                filesBox.appendTo(filesCont);

                filesCont.appendTo(descAndFilesCont);

                const quizButton = $("<div>").addClass("quizButton");
                const button = $("<button>").text("QUIZ");
                button.appendTo(quizButton);
                noteName.appendTo(DetailsContainer);

                descAndFilesCont.appendTo(DetailsContainer);
                
                quizButton.appendTo(DetailsContainer);
                

               
            });
        })
        .catch((error) => {
            console.log("Error fetching curriculum titles: " + error);
        });
    }



    updateNotesDetailsList();



});
