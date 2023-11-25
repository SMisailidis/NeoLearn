import { fetchData } from "./eventHandler.js";

$(document).ready(function () {
    let quizContainer = $('.quizContainer');
    let startingPage = $('.startingPage');
    let questionPage = $('.questionPage');
    let question = $('.question');
    let startBtn = $('.startBtn');
    let previousBtn = $('.previous');
    let confirmBtn = $('.confirm');
    let nextBtn = $('.next');
    let firstAnswer = $('#first');
    let secondAnswer = $('#second');
    let thirdAnswer = $('#third');
    let fourthAnswer = $('#fourth');
    let options = $(".option");
    let optionLabels = $('.optionLabel');
    let tableWrapper = $('.tableWrapper');
    let resultsBody = $('#resultsBody');
    let totalPointsWrapper = $('.totalPointsWrapper');
    let points = $('.totalPoints');

    let order = 0;
    let remaining = 5;
    let correctAnswers = 0;
    const givenAnswers = {};

    
    let QuestionsObject = {};



    fetchData(jQuery, 'assets/Back-End/quiz.php', 'POST',undefined).then(data => {
        // console.log(data);
            $.each(data, function(index, row) {
                QuestionsObject[row.Question] = {
                    options: [row.Option1, row.Option2, row.Option3, row.Option4],
                    correctAnswer: row.Correct_Answer,
                    answered: row.Answered === '0' ? false : true
                };
            });
        console.log(QuestionsObject);
    
    }).catch(error=>{
        console.error(error);
    });

    startBtn.on("click", function () {
        resetRadioButtons();
        startingPage.css("display", "none");
        questionPage.css("display", "flex");
        order = 0;
        displayCurrentQuestion();
    });

    nextBtn.on("click", function () {
        nextQuestion();
        resetRadioButtons();
    });

    previousBtn.on("click", function () {
        previousQuestion();
        resetRadioButtons();
    });

    function disableButtons() {
        options.prop("disabled", true);
        optionLabels.prop("disabled", true);
        optionLabels.css("scale", "1");
    }

    confirmBtn.on("click", function () {
        const selectedAnswer = $('input[name="answers"]:checked');
        if (!selectedAnswer.length)
            alert("Please Select an Answer before Proceeding!");
        else {
            checkAnswer();
            disableButtons();
            QuestionsObject[getCurrentQuestion()].answered = true;
            remaining--;

            if (remaining === 0) {
                questionPage.css("display", "none");
                showResults();
            } else {
                nextQuestion();
                enableButtons();
            }

        }

    });

    function displayCurrentQuestion() {
        resetRadioButtons();
        question.text(getCurrentQuestion());
        let options = QuestionsObject[getCurrentQuestion()].options;
        optionLabels.each(function (index) {
            $(this).text(options[index]);
        });
    }

    function resetRadioButtons() {
        options.prop("checked", false);
    }

    function getCurrentQuestion() {
        return Object.keys(QuestionsObject)[order];
    }

    function nextQuestion() {
        let originalOrder = order;
        do {
            order = (order + 1) % Object.keys(QuestionsObject).length;
        } while (QuestionsObject[getCurrentQuestion()].answered && order !== originalOrder);
        displayCurrentQuestion();
    }

    function previousQuestion() {
        let originalOrder = order;
        do {
            order = (order - 1 + Object.keys(QuestionsObject).length) % Object.keys(QuestionsObject).length;
        } while (QuestionsObject[getCurrentQuestion()].answered && order !== originalOrder);
        displayCurrentQuestion();
    }

    function enableButtons() {
        options.prop("disabled", false);
    }

    function checkAnswer() {
        const selectedAnswer = $('input[name="answers"]:checked');
        const currentQuestion = getCurrentQuestion();
        const selectedAnswerLabel = selectedAnswer.next('label').text();
        givenAnswers[currentQuestion] = selectedAnswerLabel;

        if (selectedAnswerLabel === QuestionsObject[currentQuestion].correctAnswer)
            correctAnswers++;
    }

    function showResults() {
        for (let currentQuestion in givenAnswers) {
            let dataRow = new $("<tr>");
            let questionData = $("<td>").text(currentQuestion);
            let givenAnswerData = $("<td>").text(givenAnswers[currentQuestion]);
            let correctAnswerData = $("<td>").text(QuestionsObject[currentQuestion].correctAnswer);

            if (givenAnswerData.text() === correctAnswerData.text())
                givenAnswerData.css("color", '#a5feae');
            else
                givenAnswerData.css("color", '#fda0a0');

            dataRow.append(questionData).append(givenAnswerData).append(correctAnswerData);
            resultsBody.append(dataRow);
        }
        quizContainer.css('justify-content', 'flex-start');
        quizContainer.css('padding-top', '0');
        tableWrapper.css("display", "flex");
        points.text( 'Total Correct Answers: ' + correctAnswers);
        totalPointsWrapper.css("display", "block");


    }
});
