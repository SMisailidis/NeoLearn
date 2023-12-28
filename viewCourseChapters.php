<?php 
    $pageTitle = 'Chapters';
    require 'layout.php' ?>
            <div class="course-title">
                <h1 class="headerStyle" id="cTitle"></h1>
            </div>
            <div class="chapters_central-div col-lg-10 col-12">
                <div class="Rectangles d-flex flex-column justify-content-center">


       
                </div>
                <?php require 'assets/partials/pagination.php' ?>       
                <div class="AddChapterButtonContainer">
                    <a id="AddChapter-btn"><button class="viewCoursesButtons">Add a Chapter</button></a>
                </div>
            </div>
        </main>
        <script type="module" src="assets/js/viewCourseChapters.js"></script>
        </div>
    </body>
</html>
