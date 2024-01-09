
<?php 
$pageTitle = 'Available Courses';
require 'layout.php' ?>
                <section class="contentAvailCoursesContainer tableHoveringEffect">
                    <h1 class="headerStyle">Available Courses</h1>
                    <table class="table table-bordered table-hover">
                        <thead class="tableHeader">
                            <tr class="tableHeaderRow" height = "50px">
                                <th id="th1" scope="col" width = "70px">Course</th>
                                <th id="th2" scope="col" width = "70px">Course Category</th>
                                <th id="th3" scope="col" width = "70px">Teacher</th>
                                <th id="th4" scope="col" width = "70px">Sign Up</th>
                            </tr>
                        </thead>
                        <tbody class = "tableBody">
                        </tbody>
                    </table>
                    <?php require 'assets/partials/pagination.php' ?>
                </section>
            </main>
        </div>
        <script type="module" src="assets/js/availCourses.js"></script>
    </body>
</html>

