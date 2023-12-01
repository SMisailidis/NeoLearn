
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
    </div>
    <script type="module" src="assets/js/addCourse.js"></script>
  </body>
</html>
