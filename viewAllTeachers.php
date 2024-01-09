<?php require 'layout.php' ?>
        <section class="viewTypeInnerContent container-fluid">
          <h1 class="headerStyle">View All Teachers</h1>
          <section class="contentViewTypeContainer col-lg-10 col-12">
            <h2 class="emptyAllTeachers" style="display:none;text-align:center">At present, there are no registered teachers.</h2>
          </section>
            <?php require 'assets/partials/pagination.php' ?>
            <button id="addTeachers" class="btn btn-primary btn-lg addStud" style="background-color: #114054;" title="Add Teacher">Add a teacher</button>
        </section>
      </main>
    </div>
    <script type="module" src="assets/js/viewAllTeachers.js"></script>
  </body>
</html>