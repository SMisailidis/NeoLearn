<?php
     $pageTitle = 'My Courses';
     require 'layout.php' ?>
    <h1 class="headerStyle">My Courses</h1>
    <div class="viewCoursesContainer col-lg-10 col-12">
        <div class="CoursesList d-flex flex-column justify-content-start">  
        </div>  
        <?php require 'assets/partials/pagination.php' ?>
        <div class="button-container">
            <a href="addCourse.php"><button id="AddB" class="viewCoursesButtons">Add a Course</button></a> 
            <button id="RemoveB" class="viewCoursesButtons">Remove a Course</button>
            <button id="cancelB" class="viewCoursesButtons">Cancel</button>
            <button id="confirmB" class="viewCoursesButtons">Confirm</button>
        </div> 
    </div>  
</main>
</div>
<script type="module" src="assets/js/viewCourses.js"></script>
</body>
</html>

