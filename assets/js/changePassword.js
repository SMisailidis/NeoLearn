import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";

$(document).ready(function () {
  let id = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
  let table = sessionStorage.getItem("userType");
  let isPassConf = false;
  let newPass = "";
  let prevPass = "";

  //Function to check if the new passwords and prev is equal
  const checkSimilarity = (pass1, pass2) => {
    return pass1.toUpperCase() === pass2.toUpperCase() && pass1.toUpperCase() !== prevPass.toUpperCase();
  };

  //Function to reset the wrong inputs on typing
  const onChangeHandler = (e) => {
    $(".changePasswordInput").removeClass("inputError");
    $(".labelVerPass").removeClass("labelError");
    $("#newPassword, #confirmPassword").removeClass("inputError");
    $(".confError").css("display", "none");
    $("#save").css("background-color", "#114054");
    $("#changePassConfBtn").removeClass("submitError");
  };

  //Function for form
  $(".changePassForm").on("submit", function (e) {
    e.preventDefault();

    newPass = $("#newPassword").val();
    let confNewPass = $("#confirmPassword").val();

    if (checkSimilarity(newPass, confNewPass)) {
      isPassConf = true;
      modal.setElement();
      modal.setTitle("Confirm changes");
      modal.setContent("Are you certain about changing your password?");
      modal.setButtonsText("No", "Yes");

      modal.openModal();
    } else {
      $("#newPassword, #confirmPassword").addClass("inputError");
      $(".confError").css("display", "block");
      $("#changePassConfBtn").addClass("submitError");
    }
  });

  //Function for close modal
  modal.onClickCloseHandler(() => {
    if (!isPassConf) {
      window.location.href = `profile.php?ID=${id}`;
    }
    modal.closeModal();
  });

  //Function for agree/save modal
  modal.onClickSaveHandler(() => {
    if (!isPassConf) {
      if ($(".changePasswordInput").val() === 0) {
        $("#pci").addClass("inputError");
      } else {
        fetchData(jQuery, "assets/Back-End/changePassword.php", "POST", {
          id: id,
          password: $(".changePasswordInput").val(),
          table: table,
          isPassConf: isPassConf,
        })
          .then((success) => {
            if (+success[0].count) {
              modal.closeModal();
              prevPass = $(".changePasswordInput").val();
            } else {
              $("#pci").addClass("inputError");
              $(".labelVerPass").addClass("labelError");
              $("#save").css("background-color", "red");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      fetchData(jQuery, "assets/Back-End/changePassword.php", "POST", {
        id: id,
        password: newPass,
        table: table,
        isPassConf: isPassConf,
      })
        .then((success) => {
          console.log(success);
          if (success) {
            modal.closeModal();
            toast.showToast();
            $("#newPassword").attr("disabled", true);
            $("#confirmPassword").attr("disabled", true);
            $("#changePassConfBtn")
              .attr("disabled", true)
              .css("display", "none");
            $(".spinner-border.text-primary").css("display", "inherit");

            setTimeout(function () {
              window.location.href = `profile.php?ID=${id}`;
            }, 3000);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  //Creating elements to change password
  let div = $("<div>");

  let input = $("<input>")
    .addClass("changePasswordInput")
    .attr("type", "password")
    .attr("placeholder", "Enter your password here...")
    .attr("id", "pci")
    .attr("name", "pci")
    .on("input", onChangeHandler);

  let label = $("<label>")
    .addClass("labelVerPass")
    .attr("for", "pci")
    .text("something went wrong try again!");

  div.append(input).append(label);

  $("#newPassword, #confirmPassword").on("input", onChangeHandler);

  //Setting texts to modal/toast
  modal.setElement(div);
  modal.setTitle("Change Password");
  modal.setButtonsText("Cancel", "Confirm");
  toast.setContent("Password Changed Succesfully!");
  modal.openModal();
});
