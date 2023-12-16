<?php require 'layout.php' ?>
    <h1 class="header-text">Edit Course</h1>
    <div class="editCourseContainer">
        <form id="editCourseForm" class="title-desc-container">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" value="" class required>
            <label for="description">Description</label>
            <textarea id="description" name="description" required></textarea>
            <div class="inputFileWrapper">
              <label for="formFileMultiple" class="form-label">Upload Files Here!</label>
              <input class="form-control" type="file" id="formFileMultiple" required accept=".pdf, .png, .jpg" multiple>
            </div>
            <div class="bottomContainer">   
                <button type="button" class="Buttons" id="saveChanges">Save Changes</button>
            </div>
        </form>
</main>
</div>
<script type="module" src="assets/js/editCourse.js"></script>
</body>