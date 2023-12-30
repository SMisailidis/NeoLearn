import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import secondaryModal from "./modalComplementary.js";

$(function () {
    const questionForm = $('#addQuestionForm');
    const urlParams = new URLSearchParams(window.location.search);
    const curID = urlParams.get('curID');
    const question = $('#questionName');
    const answer = $('#correctAnswerName');
    const option1 = $('#option1');
    const option2 = $('#option2');
    const option3 = $('#option3');
    const option4 = $('#option4');



    questionForm.submit(function (event) {
        event.preventDefault();
        modal.setTitle('Confirmation');
        modal.setContent("Please confirm that you want to add this question to the current chapter's quiz");
        modal.setButtonsText('Cancel', 'Add Question');
        modal.openModal();
        modal.onClickSaveHandler(addQuestion);
        modal.onClickCloseHandler(function () {
            modal.closeModal();
        })
    });

    function addQuestion() {
        fetchData(jQuery, "assets/Back-End/addQuizQuestion.php", "POST", { curID: curID, question: question.val(), answer: answer.val(), option1: option1.val(), option2: option2.val(), option3: option3.val(), option4: option4.val() })
            .then((success) => {
                if (success) {
                    modal.closeModal();
                    secondaryModal.setTitle('Success');
                    secondaryModal.setContent('The question has been successfully added!\n Would you like to add another question?');
                    secondaryModal.setButtonsText('No', 'Yes');
                    secondaryModal.onClickCloseHandler(function () {
                        window.history.back();
                    });
                    secondaryModal.onClickSaveHandler(function () {
                        questionForm.trigger('reset');
                        secondaryModal.closeModal();
                    })
                    secondaryModal.openModal();
                } else {
                    console.log('Query failed:', success);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
});
