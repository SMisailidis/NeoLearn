<?php $pageTitle = 'Create Chapter' ?>
<?php require 'layout.php' ?>

<form class="addDetails col-lg-10 col-12" id="formAddChapter" method="POST">
    <h1 class="headerStyle">Add a Chapter</h1>
    <label for="chapterTitle">Chapter Title</label>
    <input type="text" name="chapterTitle" id="chapterTitle" required placeholder="e.g. Introduction to Mathematics" />
    <label for="chapterID">Chapter ID</label>
    <input type="text" name="chapterID" id="chapterID" required placeholder="cur##" />
    <label for="chapterDesc">Chapter Description</label>
    <input type="text" name="chapterDesc" id="chapterDesc" required placeholder="e.g. A basic course in mathem..." />
    <label for="videoLink">Chapter Video Link</label>
    <input type="text" name="videoLink" id="chapterDesc" required placeholder="e.g. https://www.youtube.com..." />

    <div class="inputFileWrapper">
        <label for="formFileMultiple" class="form-label">Upload Files Here!</label>
        <input class="form-control" type="file" id="formFileMultiple" required accept=".pdf, .png, .jpg" multiple>
    </div>

    <button class="addSubmit-btn darkButtonStyle" type="submit"><span>Confirm</span></button>
</form>


</main>
</div>
<script type="module" src="assets/js/addChapter.js"></script>
</body>

</html>