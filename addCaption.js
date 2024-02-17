const video = document.getElementById("video");

video.addEventListener("click", function () {
  document.getElementById("video").innerHTML = localStorage.getItem("video");
});
