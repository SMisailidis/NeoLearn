<?php
     $pageTitle = 'My Courses';
     require 'layout.php' ?>
    <h1 class="headerStyle">My Courses</h1>
    <div class="viewCoursesContainer col-lg-10 col-12">
        <div class="CoursesList d-flex flex-column justify-content-start">  
        </div>  
        <?php require 'assets/partials/pagination.php' ?>
        <div class="button-container">
            <a href="addCourse.php"><button id="AddB" class="viewCoursesButtons darkButtonStyle"><span>Add a Course</span></button></a> 
            <button id="RemoveB" class="viewCoursesButtons darkButtonStyle"><span>Remove A Course</span></button>
            <button id="cancelB" class="viewCoursesButtons darkButtonStyle"><span>Cancel</span></button>
            <button id="confirmB" class="viewCoursesButtons darkButtonStyle"><span>Confirm</span></button>
        </div> 
    </div>  
</main>
</div>
<script type="module" src="assets/js/viewCourses.js"></script>
</body>
</html>

