<?php
$pageTitle = 'Update Course';
require 'layout.php' ?>
<section class="contentAddCourseContainer col-lg-10 col-12">
  <h1 class="headerStyle">Update Course</h1>
  <form class="addInput-form container-fluid" method="POST">

    <div class="row">
      <div class="inputGroup col-lg-6 col-12">
        <label for="Cname">Course Name</label>
        <input type="text" name="Cname" required placeholder="Mathematics II..." />
      </div>
      <div class="inputGroup col-lg-6 col-12">
        <label for="Ccode">Course code</label>
        <input type="text" name="Ccode" required placeholder="(crsXXX)..." />
      </div>
    </div>
    <div class="row">
      <div class="inputGroup col-lg-6 col-12">
        <label for="Cdesc">Course Description</label>
        <input type="text" name="Cdesc" required placeholder="A deep Dive into the world of Mathematics..." />
      </div>
      <div class="inputGroup col-lg-6 col-12">
        <label for="Cobj">Course Objectives</label>
        <input type="text" name="Cobj" required placeholder="You'll learn how to make simple and hard Equations..." />
      </div>
    </div>
    <div class="row">
      <div class="inputGroup col-lg-6 col-12">
        <label for="Cpre">Course Prerequisities</label>
        <input type="text" name="Cpre" required placeholder="Mathematics/Physics..." />
      </div>
      <div class="inputGroup col-lg-6 col-12 d-flex align-items-start flex-column justify-content-between">
        <label>Select a category</label>
        <select class="form-select catSelect" aria-label="Default select example">
          <option selected disabled>Select a category</option>
          <option value="Programming">Programming</option>
          <option value="Mathematics/Statistics">Mathematics/Statistics</option>
          <option value="Finances">Finances</option>
          <option value="Computer Science and Engineering">Computer Science and Engineering</option>
          <option value="Data Science">Data Science</option>
          <option value="General Knowledge">General Knowledge</option>
        </select>
      </div>

    </div>
    <button type="submit" class="addSubmit-btn darkButtonStyle d-block mx-auto"><span>Confirm</span></button>
  </form>
</section>
</main>
</div>
<script type="module" src="assets/js/UpdateCourse.js"></script>
</body>

</html>