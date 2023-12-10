<?php require 'layout.php' ?>
<main class="mainScreenViewChapterDetailsContainer">
    <h1 class="header-text" id="TitleCourse"></h1>
    <div class="Info">
        <div class="courseNameT">
        <textarea class="noteTitleT" name="ChapterTitle" required></textarea>
        </div>
        <div class="descFilesContainerT">
            <div class="descContainerT">
                <textarea class="descBoxT" name="ChapterDesc"></textarea>
            </div>
            <div class="filesContainerT">
                <div class="filesBoxT">
                    <div class="uploadTextT">Uploaded Files</div>
                    <div class="uploadedFilesT">
                        <div class="uploadedPdfT">
                            <a href="#" id="PdfLinkPlaceholderT"></a>
                        </div>
                        <div class="uploadedVideosT">
                            <a href="#" id="VideoLinkPlaceholderT"></a>
                        </div>
                    </div>
                    <div class="inputFileWrapper">
                        <label for="formFileMultiple" class="form-label">Upload Files Here!</label>
                        <input class="form-control" type="file" id="formFileMultiple" required accept=".pdf, .png, .jpg" multiple>
                    </div>
                </div>
            </div>
        </div>
        <div class="chapterButtons">
            <button id="quizB">QUIZ</button>
            <button id="editB">Save Changes</button>
        </div>
    </div>
    <script type="module" src="assets/js/viewChapterDetails.js"></script>
</main>
