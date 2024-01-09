<?php
     $pageTitle = 'My Courses';
     require 'layout.php' ?>
        <h1 class="headerStyle">My Courses</h1>
        <div class="central-div d-flex flex-column align-items-center justify-content-between col-xl-8 col-lg-10 col-12">
            <div class="left-child d-flex flex-column align-items-center justify-content-start">
              <h2 class="emptyStudCourses" style="display:none;text-align:center;margin:auto">At the moment, you are not enrolled in any courses.</h2>
            </div>
          <?php require 'assets/partials/pagination.php'?>
          <div class="right-child">
            <button id="addBtn">Add Course</button>
            <button id="removeBtn">Remove Course</button>
            <button id="cancelBtn">Cancel</button>
            <button id="confirmBtn">Confirm</button>
          </div>
        </div>
    </main>
  </div>
  <script type="module" src="assets/js/viewStudCourses.js"></script>
  <script type="module" src="assets/js/courseHoverEffect.js"></script>
  </body>
</html>


