import { fetchData } from "./eventHandler.js";
import toast from "./toast.js";
import modal from "./modal.js";

$(document).ready(function () {
  let userData = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const type = urlParams.get("type");

  //Algorithm to generate random credentials for Users f.e ics3144 and ics3144@neolearn...
  const generateAcadCredentials = (type) => {
    let credentials = {
      student: "ics",
      teacher: "dia",
    };

    let startPoint = credentials[type];
    let number = Math.floor(Math.random() * 9000) + 1000;

    const ID = startPoint + number;
    const acad_Email = ID + "@neolearn.edu.com";

    return { ID: ID, Acad_Email: acad_Email };
  };

  //Function for form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputs = $(`:input:not(:button):not(input[type=submit])`);

    const acadData = generateAcadCredentials(type);

    userData = {
      First_Name: inputs[0].value,
      Last_Name: inputs[1].value,
      ID: acadData.ID,
      Birth_Date: inputs[2].value,
      Phone_Number: inputs[3].value,
      Email: inputs[4].value,
      Acad_Email: acadData.Acad_Email,
      Type: type,
    };

    modal.openModal();
  };

  //Function that adds the user to db
  const addUserHandler = () => {
    fetchData(jQuery, "assets/Back-End/addUser.php", "POST", userData)
      .then((success) => {
        modal.closeModal();
        toast.showToast();
        resetInputs();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Reset form
  const resetInputs = () => {
    $(".addInput-form").trigger("reset");
  };

  //Function for close modal
  modal.onClickCloseHandler(() => {
    resetInputs();
  });

  //Function for agree/save modal
  modal.onClickSaveHandler(addUserHandler);

  //Adding the function to the form
  $(".addInput-form").on("submit", onSubmitHandler);

  //Setting texts to modal/toast
  toast.setContent("User published successfully!");
  modal.setButtonsText("No", "Yes");
  modal.setContent("Do you want to publish the user?");
  modal.setTitle("Add User");
});
