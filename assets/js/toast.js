/*
  The `toast` object facilitates the dynamic display of toast messages. 
  It provides methods to set the content of the toast and trigger its display for a specified duration, 
  defaulting to 3000 milliseconds (3 seconds). 
  The toast element is identified by the ID "liveToast" and is toggled between "show" and "hide" classes to control its visibility.
*/

const toast = {
    setContent: (contentText) => {
        $(".toast-body").text(contentText);
    },
    showToast: (duration = 3000) => {
        $("#liveToast").removeClass("hide").addClass("show");
        setTimeout(function () {
            $("#liveToast").removeClass("show").addClass("hide");
          }, duration);
    }
};

export default toast;