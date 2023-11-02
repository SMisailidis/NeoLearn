
<?php require 'layout.php' ?>
      <div class="addContainer">
        <h1 class="header-text">Add A Course</h1>
        <form class="addInput-form" method="POST">
          <label for="Cname">Course Name</label>
          <input type="text" name="Cname" required />
          <label for="Ccode">Course code</label>
          <input type="text" name="Ccode" required />
          <label for="Cdesc">Course Description</label>
          <input type="text" name="Cdesc" required />
          <label for="Cname">Course Name</label>
          <input type="text" name="Cname" required />
          <label for="Cobj">Course Objectives</label>
          <input type="text" name="Cobj" required />
          <label for="Cpre">Course Prerequisities</label>
          <input type="text" name="Cpre" required />
          <label class="addUploadFiles">
            <img src="assets/images/add.png" alt="img" title="Upload Files here" />
            <input type="file" required accept=".pdf, .png, .jpg" />
          </label>

          <input class="addSubmit-btn" type="submit" value="Confirm" />
        </form>
      </div>
    </div>
  </body>
</html>
