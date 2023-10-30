$(document).ready(function () {
  let visibilityIcon = $("#showPasswordIcon");
  let passwordField = $("#password");
  let showPasswordBtn = $(".passwordButton");

  showPasswordBtn.on("click", function () {
    if (passwordField.attr("type") === "password") {
      passwordField.attr("type", "text");
      visibilityIcon.removeClass("fa-eye").addClass("fa-eye-slash");
    } else {
      passwordField.attr("type", "password");
      visibilityIcon.removeClass("fa-eye-slash").addClass("fa-eye");
    }
  });
});
