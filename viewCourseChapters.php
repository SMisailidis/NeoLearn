<?php require 'layout.php' ?>
            <div class="course-title">
                <h1 id="cTitle"></h1>
            </div>
            <div class="chapters_central-div">
                <div class="Rectangles">
            
                </div>
                <?php require 'assets/partials/pagination.php' ?>
                <div class="AddChapterButtonContainer">
                    <a id="addBtn_href" href=""><button class="AddChapterButton">Add a Chapter</button></a>
                </div>
            </div>
        </main>
        <script type="module" src="assets/js/viewCourseChapters.js"></script>
        </div>
    </body>
</html>
