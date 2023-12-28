<?php
      $pageTitle = 'Course Notes';
      require 'layout.php' ?>
      <div class="course-title">
        <h1 class="headerStyle" id="curHeader"></h1>
      </div>
      <div class="Notes_central-div col-12">
        <div class="chaptersContainer">
          <div class="allRectangles">
          </div>
        </div>
        <div class="down-part">
          <?php require 'assets/partials/pagination.php'?>
        </div>
      </div>
    </main>
  </div>
  <script type="module" src="assets/js/viewCourseNotes.js"></script>
  </body>
</html>