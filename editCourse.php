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
                <button type="button" id="saveChanges">Save Changes</button>
            </div>
        </form>    
    </div>
</main>
</div>
</body>