<?php
    $pageTitle = 'Change your Password';
    require 'layout.php' ?>

<h1 class="headerStyle">Change Password</h1>
<section class="ChangePasswordContainer">
    <form class="changePassForm" id="changePasswordForm">

        <label for="newPassword">New Password:</label>
        <input class="changePasswordInput" type="password" id="newPassword" name="newPassword" required>

        <label for="confirmPassword">Confirm New Password:</label>
        <input class="changePasswordInput" type="password" id="confirmPassword" name="confirmPassword" required>
        <span class="confError" style="font-size: 14px;color: red;font-weight: bold;display:none">Something went wrong try again!</span>

        <input id="changePassConfBtn" class="confirmBtn" type="submit" value="Confirm" />
        <div class="spinner-border text-primary" role="status" style="display:flex;align-self:center;color: #2e6d7c !IMPORTANT; display: none;margin-top:20px;">
            <span class="visually-hidden">Loading...</span>
        </div>
    </form>
</section>
</main>
</div>
<script type="module" src="assets/js/changePassword.js"></script>
</body>

</html>