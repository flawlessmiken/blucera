document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('services');
    const footerContainer = document.getElementById('footer');
    const stackContainer = document.getElementById('stack');
   
    // Fetch and include header content
    fetch('partials/services.html')
      .then(response => response.text())
      .then(content => headerContainer.innerHTML = content);

      fetch('partials/footer.html')
      .then(response => response.text())
      .then(content => footerContainer.innerHTML = content);


      fetch('partials/stack.html')
      .then(response => response.text())
      .then(content => stackContainer.innerHTML = content);
   
  });