// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Function to open the resume modal
  function openResumeModal() {
    document.getElementById("resumeModal").style.display = "block";
  }

  // Function to close the resume modal
  function closeModal() {
    document.getElementById("resumeModal").style.display = "none";
  }

  // Close the modal if the user clicks outside the modal content
  window.onclick = function (event) {
    if (event.target === document.getElementById("resumeModal")) {
      closeModal();
    }
  };

  // Attach event listener to the resume button to open the modal
  var resumeButton = document.getElementById("resumeButton");
  if (resumeButton) {
    resumeButton.addEventListener("click", openResumeModal);
  }

  // Attach event listener to the close button inside the modal
  var closeButton = document.getElementById("closeButton");
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }
});
