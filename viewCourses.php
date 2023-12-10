<?php require 'layout.php' ?>
<main>
    <h1 class="header-text">My Courses</h1>
    <div class="viewCoursesContainer">
        <div class="CoursesList">  
        </div>  
        <?php require 'assets/partials/pagination.php' ?>
        <div class="button-container">
            <a href="addCourse.php"><button id="AddB" class="Buttons">Add a Course</button></a> 
            <button id="RemoveB" class="Buttons">Remove a Course</button>
            <button id="cancelB" class="Buttons">Cancel</button>
            <button id="confirmB" class="Buttons">Confirm</button>
        </div> 
    </div>  
</main>
</div>
<script type="module" src="assets/js/viewCourses.js"></script>
</body>


