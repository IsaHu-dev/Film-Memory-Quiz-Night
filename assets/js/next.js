  // Extract score and percentage from URL and populate the form
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const score = params.get('score');
    const percentage = params.get('percentage');
    
    document.getElementById('score').value = `Score: ${score}/10`;
    document.getElementById('percentage').value = `Percentage: ${percentage}`;
  }
  
  // Populate the form when the page loads
  window.onload = getQueryParams;