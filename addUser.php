<?php 
$pageTitle = 'Add User';
require 'layout.php' ?>
                <section class="contentAddCourseContainer col-lg-10 col-12">
                    <h1 class="headerStyle">Add A User</h1>
                    <form class="addInput-form container-fluid" method="POST">

                        <div class="row">
                            <div class="inputGroup col-lg-6 col-12">
                                <label for="Cname">First Name</label>
                                <input type="text" name="Cname" required placeholder="John..." />
                            </div>
                            <div class="inputGroup col-lg-6 col-12">
                                <label for="Ccode">Last Name</label>
                                <input type="text" name="Ccode" required placeholder="Doe..." />
                            </div>
                        </div>
                        <div class="row">
                            <div class="inputGroup col-lg-6 col-12">
                                <label for="Cdesc">Birth Date</label>
                                <input type="text" name="Cdesc" required placeholder="31/12/1960..." />
                            </div>
                            <div class="inputGroup col-lg-6 col-12">
                                <label for="Cobj">Phone Number</label>
                                <input type="text" name="Cobj" required placeholder="(555) 555-1234..." />
                            </div>
                        </div>
                        <div class="row">
                            <div class="inputGroup col-lg-6 col-12">
                                <label for="Cpre">Email</label>
                                <input type="text" name="Cpre" required placeholder="JohnDoe@email.com..." />
                            </div>
                        </div>
                        <button type="submit" class="addSubmit-btn darkButtonStyle d-block mx-auto"><span>Confirm</span></button>
                    </form>
                </section>
            </main>
        </div>
        <script type="module" src="assets/js/addUser.js"></script>
    </body>
</html>