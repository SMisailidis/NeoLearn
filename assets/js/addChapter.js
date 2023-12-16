import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";

$(document).ready(function () {
  let chapterData = {};

  const onSubmitHandler = (e) => {
    const inputs = $("form.addDetails :input");
    e.preventDefault();

    let urlParams = new URLSearchParams(window.location.search);
    let courseId = urlParams.get('courseId');
    chapterData = {
      Course_ID: courseId,
      ID: inputs[1].value,
      Title: inputs[0].value,
      Description: inputs[2].value,
      Video_Link: inputs[3].value,
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
    resetInputs();
  });

  modal.onClickSaveHandler(() => {
    chapterData.Pdf_Link = "example.pdf";

    fetchData(jQuery, "assets/Back-End/addChapter.php", "POST", chapterData)
      .then((success) => {
        if (success) {
          toast.showToast();
          modal.openModal();
          modal.closeModal();
          resetInputs();
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

  toast.setContent("Published successfully!");
});
