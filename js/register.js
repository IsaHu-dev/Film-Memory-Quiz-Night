  /* jshint esversion: 6 */
  // Function to restart the quiz
  document.getElementById('restart-btn').addEventListener('click', function() {
    window.location.reload();  // Reload the page to restart the quiz
  });

  // Function to redirect to registration page with score and percentage as query parameters
  document.getElementById('register-btn').addEventListener('click', function() {
    const score = document.getElementById('final-score').textContent.match(/\d+/g)[0];
    const percentage = document.getElementById('percentage').textContent;
    window.location.href = `register.html?score=${score}&percentage=${percentage}`;
  });