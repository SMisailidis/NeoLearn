import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";

$(document).ready(function () {
  let courseData = {};

  //Function for form submit
  const onSubmitHandler = (e) => {
    const inputs = $(`:input:not(:button):not(input[type=submit])`);
    const category = $(".catSelect").find(":selected").val();

    e.preventDefault();

    const teacher_ID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
    courseData = {
      Teacher_ID: teacher_ID,
      ID: inputs[1].value,
      Title: inputs[0].value,
      Category: category,
      Description: inputs[2].value,
      Objectives: inputs[3].value,
      Prerequisities: inputs[4].value,
    };

    modal.openModal();
  };

  //General Function for reseting inputs
  const resetInputs = () => {
    $(".addInput-form").trigger("reset");
  };

  //Function for close modal
  modal.onClickCloseHandler(() => {
    resetInputs();
  });

  //Function for agree/save modal
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
      .catch((error) => {
        console.log(error);
      });
  });

  //Adding the function to the form
  $(".addInput-form").on("submit", onSubmitHandler);

  //Setting texts to modal/toast
  modal.setTitle("Add Course");
  modal.setContent("Do you want to publish the course?");
  modal.setButtonsText("No", "Yes");
  toast.setContent("Published successfully!");
});
