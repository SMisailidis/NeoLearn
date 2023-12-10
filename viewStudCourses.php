<?php require 'layout.php' ?>
        <div class="header-text">My Courses</div>
          <div class="central-div d-flex flex-column align-items-center justify-content-between col-xl-8 col-lg-10 col-12">
            <div class="left-child d-flex flex-column align-items-center justify-content-start">
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


