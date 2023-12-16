
const videoLink = sessionStorage.getItem("video");

$(".videoClass").attr("src", videoLink);

sessionStorage.removeItem("video");