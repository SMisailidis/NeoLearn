<?php require 'assets/partials/loginHeader.php' ?>
    <style>
        <?php require 'assets/css/loginPage.css' ?>
    </style>

        <main class="container-fluid loginPageMain">
            <div class="formContainer col-md-8 col-sm-10 col-12">
                <h2>Είσοδος Στην Πλατφόρμα</h2>
                <form method="POST" id="loginForm">

                    <div class="inputContainer col-10 col-md-8 col-lg-7 position-relative">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" name="username" id="username" required>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="inputContainer col-10 col-md-8 col-lg-7 position-relative">
                        <label for="password" class="form-label">Password</label>
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" class="form-control" name="password" id="password" required>
                        <button type="button" class="passwordButton"><i class="fa-regular fa-eye" id="showPasswordIcon"></i></button>
                        <span class="spanError" style="font-size: 14px;color: white;font-weight: bold;display:none">Something went wrong try again!</span>
                    </div>
                    <input type="submit" name="submit" id="submit" class="btn-lg" value="Είσοδος">
                </form>
            </div>
        </main>
        <script src="assets/js/showPassword.js"></script>
        <script type="module" src="assets/js/eventHandler.js"></script>
        <script type="module" src="assets/js/login.js"></script>
</html>