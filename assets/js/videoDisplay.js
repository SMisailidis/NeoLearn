$(document).ready(function () {
    // Get curriculum details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const videoLink = urlParams.get("url");
    let newLink =  videoLink.replace("watch?v=", "embed/");

    $(".videoClass").attr("src", newLink);

})

