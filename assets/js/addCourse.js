import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";

$(document).ready(function () {
  let courseData = {};

  const onSubmitHandler = (e) => {
    const inputs = $(`:input:not(:button):not(input[type=submit])`);
    e.preventDefault();

    const teacher_ID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
    courseData = {
      Teacher_ID: teacher_ID,
      ID: inputs[1].value,
      Title: inputs[0].value,
      Description: inputs[2].value,
      Objectives: inputs[3].value,
      Prerequisities: inputs[4].value,
    };

    $("#exampleModalCenter").modal("show");
  };

  const resetInputs = () => {
    const inputs = $(`:input:not(:button):not(input[type=submit])`);

    $.each(inputs, function (index, row) {
      row.value = "";
    })
  };

  modal.onClickCloseHandler(() => {
    modal.closeModal()
    resetInputs();
  })

  modal.onClickSaveHandler(() => {
    fetchData(jQuery, "assets/Back-End/addCourse.php", "POST", courseData)
    .then((success) => {
      if (success) {
        toast.showToast();
        modal.openModal();
        modal.closeModal();
        resetInputs();
      }
    })
    .catch((error) => {console.log(error)});
  })

  $(".addInput-form").on("submit", onSubmitHandler);

  modal.setTitle("Add Course");
  modal.setContent("Do you to publish the Course?");
  modal.setButtonsText("No", "Yes");

  toast.setContent("Published successfully!")
});
