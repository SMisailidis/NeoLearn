$(document).ready(function () {

    var visibilityIcon = $('#showPasswordIcon');
    var passwordField = $('#password');
    var showPasswordBtn = $('.passwordButton');

    showPasswordBtn.on('click', function () {


        if (passwordField.attr('type') === 'password') {

            passwordField.attr('type', 'text');
            visibilityIcon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {

            passwordField.attr('type', 'password');
            visibilityIcon.removeClass('fa-eye-slash').addClass('fa-eye');
        }


    })
})