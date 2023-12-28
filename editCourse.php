<?php
    $pageTitle = 'Edit Course';
    require 'layout.php' ?>
<h1 class="headerStyle">Edit Course</h1>
<div class="editCourseContainer col-lg-10 col-12">
    <form id="editCourseForm" class="title-desc-container">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" value="" class required>
        <label for="description">Description</label>
        <textarea id="description" name="description" required></textarea>
        <div class="bottomContainer">
            <button type="button" class="viewCoursesButtons" id="saveChanges">Save Changes</button>
        </div>
    </form>
    </main>
</div>
<script type="module" src="assets/js/editCourse.js"></script>
</body>