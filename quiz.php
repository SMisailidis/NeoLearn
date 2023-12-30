        <?php
            $pageTitle = 'Quiz Time';
            require 'layout.php' ?>
            <h1 class="d-none">NeoLearn Quiz</h1>
                <div class="quizContainer">
                    <section class="startingPage container col-12 col-lg-10 col-xl-9">
                        <h2 class="quizTitle headerStyle">Web Tech Quiz</h2>
                        <p>Press start to begin!</p>
                        <button class="startBtn">Start</button>
                    </section>
                    <section class="questionPage col-12 col-lg-10 col-xl-9">
                        <h3 class="question"></h3>
                        <div class="options container">

                            <input class="option" type="radio" id="first" name="answers">
                            <label for="first" class="optionLabel"></label>
                            <input class="option" type="radio" id="second" name="answers">
                            <label for="second" class="optionLabel"></label>
                            <input class="option" type="radio" id="third" name="answers">
                            <label for="third" class="optionLabel"></label>
                            <input class="option" type="radio" id="fourth" name="answers">
                            <label for="fourth" class="optionLabel"></label>
                        </div>
                        <div class="actionBtns">
                            <button class="previous">Previous</button>
                            <button class="confirm">Confirm Option</button>
                            <button class="next">Next</button>
                        </div>
                    </section>
                    <div class="totalPointsWrapper col-lg-8 col-md-10 col-12">
                        <p class="totalPoints">sdads</p>
                    </div>
                    <section class="tableWrapper tableHoveringEffect flex-column align-items-center col-lg-8 col-md-10 col-12">
                        <table class="resultsTable table table-bordered table-hover">
                            <thead class="resultsTableHeader">
                                <tr height = "50px">
                                    <th>Question</th>
                                    <th>Your Answer</th>
                                    <th>Correct Answer</th>
                                </tr>
                            </thead>
                            <tbody id="resultsBody">
                            </tbody>
                        </table>
                        <?php require 'assets/partials/pagination.php' ?>
                    </section>
                    <section class="noQuestionsContainer container col-12 col-lg-10 col-xl-9 p-relative">

                                <img src="assets/images/notFound404Icon.png" alt="a 404 not found icon with a ghost instead of a '0'">
                                <h2 class="noQuizHeading">There isn't a quiz available for this chapter yet! </h2>
                                <a href="portfolioQuizLandingPage.php" class="backToQuizLandingBtn darkButtonStyle d-inline-flex justify-content-center align-items-center"><span>< Back</span></a>
                    </section>
                </div>
            </main>
        </div>
        <script type="module" src="assets/js/quiz.js"></script>
    </body>
</html>