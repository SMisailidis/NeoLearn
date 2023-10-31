<?php require 'assets/partials/userHeader.php' ?>

<style>
    <?php require 'assets/css/addCourse.css' ?>
</style>



<div class="container">
  <h1 class="header">Add A Course</h1>
  <form class="input-form" method="POST">
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
    <label>
      <img src="assets/images/add.png" alt="img" title="Upload Files here" />
      <input type="file" required accept=".pdf, .png, .jpg" />
    </label>

    <input class="submit-btn" type="submit" value="Confirm" />
  </form>
</div>

