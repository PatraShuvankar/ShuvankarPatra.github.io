document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".photos img");
  let currentPhotoIndex = 0;

  function showNextPhoto() {
    photos[currentPhotoIndex].style.opacity = 0;
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photos[currentPhotoIndex].style.opacity = 1;
  }

  // Start the slideshow
  setInterval(showNextPhoto, 5000); // Change the time (in milliseconds) to control the speed of the slideshow
});
