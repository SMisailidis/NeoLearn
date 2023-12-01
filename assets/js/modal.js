const modal = {
    setTitle: (titleText) => {
        $("#exampleModalLongTitle").text(titleText);
    },
    setContent: (contentText) => {
        $(".modal-body").text(contentText);
    },
    setButtonsText: (closeText, agreeText) => {
        $("#close").text(closeText);
        $("#save").text(agreeText);
    },
    closeModal: () => {
        $("#exampleModalCenter").modal("hide");
    },
    openModal: () => {
        $("#exampleModalCenter").modal("show");
    },
    onClickCloseHandler: (callback) => {
        $("#close, .btn-close").on("click", function () {
            $("#exampleModalCenter").modal("hide");
            if (typeof callback === "function") {
                callback();
            }
        });
    },
    onClickSaveHandler: (callback) => {
        $("#save").on("click", function () {
            if (typeof callback === "function") {
                callback();
            }
        });
    },
};

export default modal;
