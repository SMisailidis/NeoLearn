<?php require 'layout.php' ?>
<main>
    <h1 class="header-text">Edit Course</h1>
    <div class="editCourseContainer">
        <form id="editCourseForm" class="title-desc-container">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" value="" class required>

            <label for="description">Description</label>
            <textarea id="description" name="description" required></textarea>
            <div class="bottomContainer">
                <label class="addUploadFiles">
                    <img src="assets/images/add.png" alt="img" title="Upload Files here" />
                    <input type="file" id="fileUp" name="fileUp" required accept=".pdf, .png, .jpg">
                </label>    
                <button type="button" id="saveChanges">Save Changes</button>
            </div>
        </form>    
    </div>
</main>
</div>
</body>