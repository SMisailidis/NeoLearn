
<?php require 'layout.php' ?>
            <main class="mainScreenAvailCoursesContainer">
                <section class="contentAvailCoursesContainer">
                    <h1 class="header-text">Available Courses</h1>
                    <table class="table table-bordered table-hover">
                        <thead class="tableHeader">
                            <tr class="tableHeaderRow" height = "50px">
                                <th scope="col" width = "70px">Course</th>
                                <th scope="col" width = "70px">Course ID</th>
                                <th scope="col" width = "70px">Teacher</th>
                                <th scope="col" width = "50px">Sign Up</th>
                            </tr>
                        </thead>
                        <tbody class = "tableBody">
                        </tbody>
                    </table>
                    <nav class="paginationNav" aria-label="Page navigation example">
                        <ul class="pagination">
                            
                        </ul>
                    </nav>
                </section>
            </main>
            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Course enrolment</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style="text-align: center">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                            <button id="save" type="button" class="btn btn-primary" style="background-color: #114054">Yes</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Toast -->
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header" style="background-color: #e6e4e4; border-bottom: 1px solid #114054;">
                        <img src="assets/images/success.png" class="rounded me-2" alt="tick" width="25px">
                        <strong class="me-auto">NeoLearn</strong>
                        <button type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                    <div class="toast-body" style="color: #114054">
                        Changes registered successfully!
                    </div>
                </div>
            </div>
        </div>
        <script type="module" src="assets/js/availCourses.js"></script>
    </body>
</html>

