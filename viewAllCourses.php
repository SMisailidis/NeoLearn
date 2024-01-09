

<?php
      $pageTitle = 'All Courses';
      require 'layout.php' ?>
        <section class="viewTypeInnerContent container-fluid">
          <h1 class="headerStyle">View All Courses</h1>
          <section class="contentViewTypeContainer col-lg-10 col-12">
            <h2 class="emptyAllCourses" style="display:none;text-align:center">At present, no courses are being taught by a teacher.</h2>
          </section>
            <?php require 'assets/partials/pagination.php' ?>
        </section>
      </main>
    </div>
    <script type="module" src="assets/js/viewAllCourses.js"></script>  
  </body>
</html>
