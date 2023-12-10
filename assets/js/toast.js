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