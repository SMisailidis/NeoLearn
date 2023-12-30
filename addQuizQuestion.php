<?php
$pageTitle = 'Add A Question';
require 'layout.php' ?>
<div class="addQuestionPageWrapper container-fluid">
    <section class="formQuestionAdditionWrapper container-fluid d-flex flex-column justify-content-start align-items-center">
        <h1 class="headerStyle mb-5">Add A Question</h1>
        <form id="addQuestionForm" class="d-flex flex-column justify-content-evenly container-fluid mt-sm-5 mt-0">
            <div class="row">
                <div class="form-group mb-sm-3 mb-4 col-sm-6 col-12">
                    <label for="exampleFormControlInput1">Question</label>
                    <input type="text" class="form-control" id="questionName" required>
                </div>
                <div class="form-group mb-sm-3 mb-4 col-sm-6 col-12">
                    <label for="exampleFormControlInput1">Correct Answer</label>
                    <input type="text" class="form-control" id="correctAnswerName" required>
                </div>
            </div>
            <div class="row">
                <div class="form-group mb-sm-3 mb-4 col-sm-6 col-12">
                    <label for="exampleFormControlInput1">Option No1</label>
                    <input type="text" class="form-control" id="option1" required>
                </div>
                <div class="form-group mb-sm-3 mb-4 col-sm-6 col-12">
                    <label for="exampleFormControlInput1">Option No2</label>
                    <input type="text" class="form-control" id="option2" required>
                </div>
            </div>
            <div class="row">
                <div class="form-group mb-sm-3 mb-4 col-sm-6 col-12">
                    <label for="exampleFormControlInput1">Option No3</label>
                    <input type="text" class="form-control" id="option3" required>
                </div>
                <div class="form-group mb-sm-3 mb-4 col-sm-6 col-12">
                    <label for="exampleFormControlInput1">Option No4</label>
                    <input type="text" class="form-control" id="option4" required>
                </div>
            </div>
            <div class="row">
                <div>
                    <button type="submit" class="addQuestionSubmitBtn darkButtonStyle d-block m-auto"><span>Add Question</span></button>
                </div>

            </div>
        </form>
    </section>
</div>
</main>
</div>
<script type="module" src="assets/js/addQuizQuestion.js"></script>
</body>

</html>