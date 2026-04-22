document.addEventListener("DOMContentLoaded", function () {
  const imagesToPreload = [
    "assets/images/Post_1.png",
    "assets/images/Post_2.png",
    "assets/images/Post_3.png",
    "assets/images/integrations-background-dark.png"
  ];

  imagesToPreload.forEach(function (src) {
    const img = new Image();
    img.src = src;
  });

  const taskImages = document.querySelectorAll(".task-card-image");

  taskImages.forEach(function (img) {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", function () {
        img.classList.add("loaded");
      });

      img.addEventListener("error", function () {
        img.classList.add("loaded");
      });
    }
  });
});