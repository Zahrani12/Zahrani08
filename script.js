document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    for (let anchor of anchors) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });