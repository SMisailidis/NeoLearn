import { fetchData } from "./eventHandler.js";

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

  const onCloseModal = () => {
    $("#exampleModalCenter").modal("hide");
    resetInputs();
  };

  const resetInputs = () => {
    const inputs = $(`:input:not(:button):not(input[type=submit])`);

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
  };

  $(".btn-secondary").on("click", onCloseModal);

  $(".btn-close").on("click", onCloseModal);

  $("#save").on("click", function () {
    fetchData(jQuery, "assets/Back-End/addCourse.php", "POST", courseData)
      .then((success) => {
        if (success) {
          $("#liveToast").removeClass("hide").addClass("show");
          $("#exampleModalCenter").modal("hide");

          resetInputs();

          setTimeout(function () {
            $("#liveToast").removeClass("show").addClass("hide");
          }, 3000);
        }
      })
      .catch((error) => {});
  });

  $(".addInput-form").on("submit", onSubmitHandler);
});
