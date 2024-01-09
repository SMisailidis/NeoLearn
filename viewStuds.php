<?php
      $pageTitle = 'My Students';
      require 'layout.php' ?>
        <section class="viewTypeInnerContent container-fluid">
          <h1 class="headerStyle">View My Students</h1>
          <section class="contentViewTypeContainer col-lg-10 col-12">
            <h2 class="emptyTeachersStuds" style="display:none;text-align:center;">There are currently no enrolled students in your courses.</h2>
          </section>
            <?php require 'assets/partials/pagination.php' ?>
        </section>
      </main>
    </div>
    <script type="module" src="assets/js/viewTeacherStudents.js"></script>
  </body>
</html>

