<?php require 'layout.php' ?>

        <h1 class="header-text">Add a Chapter</h1>
        <form class="addDetails" method="POST">
            <label for="chapterTitle">Chapter Title</label>
            <input type="text" name="chapterTitle" id="chapterTitle" required placeholder="e.g. Introduction to Mathematics"/>
            <label for="chapterID">Chapter ID</label>
            <input type="text" name="chapterID" id="chapterID" required placeholder="cur##"/>
            <label for="chapterDesc">Chapter Description</label>
            <input type="text" name="chapterDesc" id="chapterDesc" required placeholder="e.g. A basic course in mathematics..."/>

            <div class="inputFileWrapper">
                <label for="formFileMultiple" class="form-label">Upload Files Here!</label>
                <input class="form-control" type="file" id="formFileMultiple" required accept=".pdf, .png, .jpg" multiple>
            </div>

            <input class="addSubmit-btn" type="submit" value="Confirm" />
        </form>
    </main>
<script type="module" src="assets/js/addChapter.js"></script>
</div>
</body>
