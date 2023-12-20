$(document).ready(function() {
    let inactivityTimeout;

    const resetTimer = () => {
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(logoutUser, 120000);
    };

    const logoutUser = () => {
        alert("You have been logged out due to inactivity");

        window.location.href = "loginPage.php";
        sessionStorage.clear()
    };

    $(document).on("mousemove keypress", resetTimer);

    resetTimer();
});
