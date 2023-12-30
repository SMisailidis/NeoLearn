/*
  The `modal` object encapsulates functions to dynamically manipulate a Bootstrap modal. 
  It provides methods to set the modal's title, content, button texts, 
  and handles opening, closing, and button-click events with optional callbacks.
*/

const secondaryModal = {
    setElement: (elements) => {
      $(".modal-body").empty().append(elements);
    },
    setTitle: (titleText) => {
      $("#secondaryModalTitle").text(titleText);
    },
    setContent: (contentText) => {
      $(".modal-body").empty().append(contentText);
    },
  
    setButtonsText: (closeText, agreeText) => {
      $("#secondaryClose").text(closeText);
      $("#secondarySave").text(agreeText);
    },
    closeModal: () => {
      $("#secondaryModal").modal("hide");
    },
    openModal: () => {
      $("#secondaryModal").modal("show");
    },
    onClickCloseHandler: (callback) => {
      $("#secondaryClose, #secondaryBtn-close").on("click", function () {
        $("#secondaryModal").modal("hide");
        if (typeof callback === "function") {
          callback();
        }
      });
    },
    onClickSaveHandler: (callback) => {
      $("#secondarySave").on("click", function () {
        if (typeof callback === "function") {
          callback();
        }
      });
    },
  };
  
  export default secondaryModal;
  