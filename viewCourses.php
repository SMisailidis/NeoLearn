<?php require 'layout.php' ?>
<main>
    <h1 class="header-text">My Courses</h1>
    <div class="container">
        <div class="CoursesList">
            
        </div>  
        <div class="button-container">
            <a href="addCourse.php"><button id="AddB" class="Buttons">Add a Course</button></a> 
            <button id="RemoveB" class="Buttons">Remove a Course</button>
            <button id="cancelB" class="RemoveButtons Buttons">Cancel</button>
            <button type="button" id="confirmB" class="Buttons RemoveButtons" data-toggle="modal" data-target="#confirmationModal">
            Confirm
            </button>
        </div> 
    </div>
    <!--Confirmation Modal-->
    <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Confirmation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Are you sure you want to delete the selected courses?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="confirmDeleteBtn">Confirm</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal for No Courses Selected -->
    <div class="modal fade" id="noCourseSelectedModal" tabindex="-1" role="dialog" aria-labelledby="noCourseSelectedModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="noCourseSelectedModalTitle">No Courses Selected</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Please select at least one course before confirming.
                </div>
                <div class="modal-footer">
                    <button type="button" id="OKbutton" class="btn btn-primary" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
</main>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
</body>


