<?php 
     $pageTitle = 'Chapter Details';
    require 'layout.php' ?>
                <h1 class="headerStyle" id="TitleCourse"></h1>
                <div class="Info col-lg-10 col-12">
                    <div class="courseNameT">
                    <textarea class="noteTitleT" name="ChapterTitle" required cols="1" rows="1" resiz></textarea>
                    </div>
                    <div class="descFilesContainerT d-flex flex-column flex-lg-row">
                        <div class="descContainerT">
                            <textarea class="descBoxT" name="ChapterDesc"></textarea>
                        </div>
                        <div class="filesContainerT">
                            <div class="filesBoxT">
                                <div class="uploadTextT">Uploaded Files</div>
                                <div class="uploadedFilesT">
                                </div>
                                <div class="inputFileWrapper">
                                    <label for="formFileMultiple" class="form-label">Upload Files Here!</label>
                                    <input class="form-control" type="file" id="formFileMultiple" required accept=".pdf, .png, .jpg" multiple>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chapterButtons">
                        <a id="quizB">QUIZ</a>
                        <button id="editB">Save Changes</button>
                    </div>
                </div>
            </main>
        </div>
        <script type="module" src="assets/js/viewChapterDetails.js"></script>
    </body>
</html>
