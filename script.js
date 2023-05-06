

document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.querySelector('.resumebutton')
    if (resumeButton) {
      resumeButton.addEventListener('click', function() {
        alert("Here's my resume")
      })
    }
  })