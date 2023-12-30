<?php
    $pageTitle = 'Quiz Time';
    require 'layout.php'
?>

<h1 class="d-none">NeoLearn Quiz</h1>

    
    <section class="coursesListWrapper col-lg-8 col-md-10 col-12 m-auto d-flex flex-column align-items-center">
        <h2 class="headerStyle">Please Select A Course</h2>
        <div class="listsWrapper d-flex flex-column align-items-center">
            <ul class="coursesList">
            </ul>
            <ul class="currList">

            </ul>
        </div>

        <button class="quizLandingBackBtn darkButtonStyle"><span>< Course Selection</span></button>
        <a href="Portfolio.php" class="quizBackToPortfolioBtn darkButtonStyle"><span>< Back to Portfolio</span></a>

    </section>
</main>
</div>
<script type="module" src="assets/js/quizLandingViewCourses.js"></script>
</body>

</html>