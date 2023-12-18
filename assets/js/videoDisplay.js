
const videoLink = sessionStorage.getItem("video");

let newLink =  videoLink.replace("watch?v=", "embed/");

$(".videoClass").attr("src", newLink);

console.log(newLink);
sessionStorage.removeItem("video");