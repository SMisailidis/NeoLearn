/*
  The `modal` object encapsulates functions to dynamically manipulate a Bootstrap modal. 
  It provides methods to set the modal's title, content, button texts, 
  and handles opening, closing, and button-click events with optional callbacks.
*/

const modal = {
  setElement: (elements) => {
    $(".modal-body").empty().append(elements);
  },
  setTitle: (titleText) => {
    $("#exampleModalLongTitle").text(titleText);
  },
  setContent: (contentText) => {
    $(".modal-body").empty().append(contentText);
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
