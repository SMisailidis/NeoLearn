<?php require 'layout.php' ?>
<main class="mainScreenViewCourseNotesContainer">
<div class="course-title">
        <h1 class="header-text" id="curHeader"></h1>
      </div>
  <div class="Notes_central-div">
    <div class="chaptersContainer">
      <div class="allRectangles">
      </div>
    </div>
    <div class="down-part">
      <?php require 'assets/partials/pagination.php'?>
    </div>
  </div>
  <script type="module" src="assets/js/viewCourseNotes.js"></script>
</main>