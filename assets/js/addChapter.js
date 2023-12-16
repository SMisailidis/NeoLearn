import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";
import {uploadPDF} from "./uploadPDF.js";

$(document).ready(function () {
  let chapterData = {};
  let formData = new FormData();

  const onSubmitHandler = (e) => {
    const inputs = $("form.addDetails :input");
    e.preventDefault();

    let urlParams = new URLSearchParams(window.location.search);
    let courseId = urlParams.get('courseId');
    
    let fileNames = [];

    let files = Array.from(inputs[4].files); 

    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i].name);
      formData.append("files[]", files[i]);
    }

    
    chapterData = {
      Course_ID: courseId,
      ID: inputs[1].value,
      Title: inputs[0].value,
      Description: inputs[2].value,
      Video_Link: inputs[3].value,
      Pdf_Link: fileNames.join(",")
    };
  
    modal.openModal();
  };

  const resetInputs = () => {
    const inputs = $("form.addDetails :input");

    $.each(inputs, function (index, row) {
      row.value = "";
    });
  };

  modal.onClickCloseHandler(() => {
    location.reload();
  });

  modal.onClickSaveHandler(() => {

    fetchData(jQuery, "assets/Back-End/addChapter.php", "POST", chapterData)
      .then((success) => {
        if (success) {
          uploadPDF(jQuery, "assets/Back-End/uploadPDF.php", formData)
            .then((response) => {
              if (response.success) {
                toast.showToast();
                modal.openModal();
                modal.closeModal();
                resetInputs();
              }
            })
            .catch((error) => {
              console.log(error);
            });
          
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  $("form.addDetails").on("submit", onSubmitHandler);

  modal.setTitle("Add Chapter");
  modal.setContent("Do you want to publish the Chapter?");
  modal.setButtonsText("No", "Yes");
  toast.setContent("Published Chapter successfully!");
});
