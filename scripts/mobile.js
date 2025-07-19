document.addEventListener('DOMContentLoaded', function() {
  // Get all mobile menu links and burger checkbox
  const mobileMenuLinks = document.querySelectorAll('.mobile-navbar .menu a');
  const burgerCheckbox = document.getElementById('burger');
  
  // Add click event to each menu link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Close the mobile menu
      burgerCheckbox.checked = false;
      
      // Check if it's an anchor link (starts with #)
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Wait for menu to close (300ms) before scrolling
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
            
            // Update URL hash without jumping
            if (history.pushState) {
              history.pushState(null, null, targetId);
            } else {
              window.location.hash = targetId;
            }
          }, 300);
        }
      }
      // Regular links will behave normally
    });
  });
});