<?php
$pageTitle = 'Add a Course';
require 'layout.php' ?>
<section class="contentAddCourseContainer col-lg-10 col-12">
  <h1 class="headerStyle">Add A Course</h1>
  <form class="addInput-form" method="POST">
    <label for="Cname">Course Name</label>
    <input type="text" name="Cname" required placeholder="Mathematics II..." />
    <label for="Ccode">Course code</label>
    <input type="text" name="Ccode" required placeholder="(crsXXX)..." />
    <label for="Cdesc">Course Description</label>
    <input type="text" name="Cdesc" required placeholder="A deep Dive into the world of Mathematics..." />
    <label for="Cobj">Course Objectives</label>
    <input type="text" name="Cobj" required placeholder="You'll learn how to make simple and hard Equations..." />
    <label for="Cpre">Course Prerequisities</label>
    <input type="text" name="Cpre" required placeholder="Mathematics/Physics..." />
    <!-- <input class="addSubmit-btn darkButtonStyle" type="submit" value="Confirm" /> -->
    <button type="submit" class="addSubmit-btn darkButtonStyle"><span>Confirm</span></button>
  </form>
</section>
</main>
</div>
<script type="module" src="assets/js/addCourse.js"></script>
</body>

</html>