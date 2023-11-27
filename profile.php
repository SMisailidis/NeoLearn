<?php require 'layout.php' ?>
            <main class="mainScreenProfileContainer">
                <h1 class="header-text">My Profile</h1>
                <div class="contentProfileContainer">
                    <img src="assets/images/userCircled.png" alt="image">
                    <div class="sectionOuterProfileContainer">
                        <section class="sectionProfileContainer" id="section1">
                            <h4 class="title" id="title1">Personal Information</h4>
                            <button class="changeProfileButton">Edit</button>
                        </section>
                        <section class="sectionProfileContainer" id="section2">
                            <h4 class="title" id="title2">Academic Information</h4>
                        </section>
                    </div>
                </div>
            </main>
            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Profile Changes</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Do you wish to make the changes?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button id="save" type="button" class="btn btn-primary" style="background-color: #114054">Save changes</button>
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
        <script type="module" src="assets/js/profile.js"></script>
    </body>
</html>