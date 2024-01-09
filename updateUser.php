<?php 
$pageTitle = 'Update User';
require 'layout.php' ?>

                <section class="contentAddCourseContainer col-lg-10 col-12">
                    <h1 class="headerStyle">Update User</h1>
                    <form class="addInput-form container-fluid" method="POST">

                        <div class="row">
                        <div class="inputGroup col-lg-6 col-12">
                            <label for="Fname">First Name</label>
                            <input type="text" name="Fname" required placeholder="John..."/>
                        </div>
                        <div class="inputGroup col-lg-6 col-12">
                            <label for="Lname">Last Name</label>
                            <input type="text" name="Lname" required placeholder="Doe..."/>
                        </div>
                        </div>
                        <div class="row">
                        <div class="inputGroup col-lg-6 col-12">
                            <label for="userNumber">Phone Number</label>
                            <input type="text" name="userID" required placeholder="69..."/>
                        </div>
                        <div class="inputGroup col-lg-6 col-12">
                            <label for="userPass">Password</label>
                            <input type="text" name="userPass" required placeholder="abc123..."/>
                        </div>
                        </div>
                        <div class="row">
                        <div class="inputGroup col-lg-6 col-12">
                            <label for="userEmail">Email</label>
                            <input type="text" name="userEmail" required placeholder="example@email.com" />
                        </div>
                        <div class="inputGroup col-lg-6 col-12">
                            <label for="userAcEmail">Academic Email</label>
                            <input type="text" name="userAcEmail" required placeholder="example@neolearn.edu.com" />
                        </div>
                        </div>
                        <button type="submit" class="addSubmit-btn darkButtonStyle d-block mx-auto"><span>Confirm</span></button>
                    </form>
                </section>

            </main>
        </div>
         <script type="module" src="assets/js/updateUser.js"></script>
    </body>
</html>