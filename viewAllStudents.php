<?php
      $pageTitle = 'All Students';
      require 'layout.php' ?>
        <section class="viewTypeInnerContent container-fluid">
          <h1 class="headerStyle">View All Students</h1>
          <section class="contentViewTypeContainer col-lg-10 col-12">
            <h2 class="emptyAllStudents" style="display:none;text-align:center">At present, there are no registered students.</h2>
          </section>
            <?php require 'assets/partials/pagination.php' ?>
            <button id="addStuds" class="btn btn-primary btn-lg addStud" style="background-color: #114054;" title="Add Student">Add a student</button>
        </section>
      </main>
    </div>
    <script type="module" src="assets/js/viewAllStudents.js"></script>
  </body>
</html>

