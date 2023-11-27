
<?php require 'layout.php' ?>
      <main class="addContainer">
        <section class="contentAddCourseContainer">
          <h1 class="header-text">Add A Course</h1>
          <form class="addInput-form" method="POST">
            <label for="Cname">Course Name</label>
            <input type="text" name="Cname" required placeholder="Mathematics II..."/>
            <label for="Ccode">Course code</label>
            <input type="text" name="Ccode" required placeholder="(crsXXX)..."/>
            <label for="Cdesc">Course Description</label>
            <input type="text" name="Cdesc" required placeholder="A deep Dive into the world of Mathematics..."/>
            <label for="Cobj">Course Objectives</label>
            <input type="text" name="Cobj" required placeholder="You'll learn how to make simple and hard Equations..."/>
            <label for="Cpre">Course Prerequisities</label>
            <input type="text" name="Cpre" required placeholder="Mathematics/Physics..."/>
            <!-- <div class="inputFileWrapper">
              <label for="formFileMultiple" class="form-label">Upload Files Here!</label>
              <input class="form-control" type="file" id="formFileMultiple" required accept=".pdf, .png, .jpg" multiple>
            </div> -->

            <input class="addSubmit-btn" type="submit" value="Confirm" />
          </form>
        </section>
        
      </main>
      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Add Course</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Do you to upload the Course?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                    <button id="save" type="button" class="btn btn-primary" style="background-color: #114054">Yes</button>
                </div>
            </div>
        </div>
      </div>
      <!-- Toast -->
      <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
        <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header" style="background-color: #e6e4e4; border-bottom: 1px solid #114054;">
                <img src="assets/images/success.png" class="rounded me-2" alt="tick" width="25px">
                <strong class="me-auto">NeoLearn</strong>
                <button type="button" class="btn-close" aria-label="Close"></button>
            </div>
            <div class="toast-body" style="color: #114054">
                Uploaded successfully!
            </div>
        </div>
      </div>
    </div>
    <script type="module" src="assets/js/addCourse.js"></script>
  </body>
</html>
