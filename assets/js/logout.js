import modal from "./modal.js";

$(document).ready(function () {
  let inactivityTimeout;

  const resetTimer = () => {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(logoutUser, 300000);
  };

  const logoutUser = () => {
    modal.setElement();
    modal.setTitle('You have been logged out due to inactivity');
    modal.setContent('You have been inactive for too long and, as a result, you have been logged out.');
    modal.setButtonsText('Log In', '');
    $("#save").remove();
    modal.onClickCloseHandler(() => {
      modal.closeModal();
      window.location.href = "loginPage.php";
      sessionStorage.clear();
    });
    modal.openModal();


  };


  $(document).on("mousemove keypress", resetTimer);

  resetTimer();
});
