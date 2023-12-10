        <?php require 'layout.php' ?>
            <main class="container-fluid">
                <div class="quizContainer">
                    <section class="startingPage container col-12 col-lg-10 col-xl-9">
                        <h1>Web Tech Quiz</h1>
                        <p>Press start to begin!</p>
                        <button class="startBtn">Start</button>
                    </section>
                    <section class="questionPage  col-12 col-lg-10 col-xl-9">
                        <h2 class="question"></h2>
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
                    <section class="tableWrapper col-lg-8 col-md-10 col-12">
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Your Answer</th>
                                    <th>Correct Answer</th>
                                </tr>
                            </thead>
                            <tbody id="resultsBody">

                            </tbody>
                        </table>
                    </section>
                </div>
            </main>
        </div>
        <script type="module" src="assets/js/quiz.js"></script>
    </body>
</html>