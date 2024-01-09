import { fetchData } from "./eventHandler.js";
import toast from "./toast.js";
import modal from "./modal.js";

$(document).ready(function () {

  let userData = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const type = urlParams.get("type");
  const userID = urlParams.get("userID");



  fetchData(jQuery, "assets/Back-End/getUserDetails.php", "POST", {table: type, ID: userID})
  .then((data) => {
    const inputs = $(`:input:not(:button):not(input[type=submit])`);
    inputs[0].value = data[0].First_Name;
    inputs[1].value = data[0].Last_Name;
    inputs[2].value = data[0].Phone_Number;
    inputs[3].value = data[0].Password;
    inputs[4].value = data[0].Email;
    inputs[5].value = data[0].Academic_Email;

})


  const onSubmitHandler = (e) => {

    e.preventDefault();

    const inputs = $(`:input:not(:button):not(input[type=submit])`);

    userData = {
        Fname: inputs[0].value,
        Lname: inputs[1].value,
        userNumber: inputs[2].value,
        userPass: inputs[3].value,
        userEmail:inputs[4].value,
        userAcEmail: inputs[5].value,
        Type: type,
        ID : userID
      };

      modal.openModal();



  }

  const updateUserHandler = () => {

    fetchData(jQuery, "assets/Back-End/updateUser.php", "POST", userData)
      .then((success) => {
        if (success) {
          modal.closeModal();
          toast.showToast();
        }
      })
      .catch((error) => {
        console.error(error);
      });

  }

  


   //Function for close modal
   modal.onClickCloseHandler(() => {
    modal.closeModal();
    location.reload();
  });

  //Function for agree/save modal
  modal.onClickSaveHandler(updateUserHandler);

  $(".addInput-form").on("submit", onSubmitHandler);



  toast.setContent("User Updated successfully!");
  modal.setButtonsText("No", "Yes");
  modal.setContent("Do you want to update the user's info?");
  modal.setTitle("Update User");


});