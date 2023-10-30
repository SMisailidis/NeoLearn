<?php require 'partials/header.php' ?>
<style>
    <?php require 'Front-End/css/loginPage.css' ?>
</style>

    <main class="container-fluid">
        <div class="formContainer col-md-8 col-sm-10 col-12">
            <h2>Είσοδος Στην Πλατφόρμα</h2>
            <form action="">

                <div class="inputContainer col-10 col-md-8 col-lg-7 position-relative">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" name="username" id="username">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="inputContainer col-10 col-md-8 col-lg-7 position-relative">
                    <label for="password" class="form-label">Password</label>
                    <i class="fa-solid fa-lock"></i>
                    <i class="fa-regular fa-eye" id="showPasswordIcon"></i>
                    <input type="password" class="form-control" name="password" id="password">
                    <a href="">Ξέχασα τον κωδικό μου</a>

                </div>
                <input type="submit" name="submit" id="submit" class="btn-lg" value="Είσοδος">


            </form>
        </div>
    </main>
</body>