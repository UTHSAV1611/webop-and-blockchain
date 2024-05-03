document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  // Add click event listener to each accordion header
  accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      header.addEventListener('click', function() {
          // Toggle active class on accordion item
          item.classList.toggle('active');

          // Toggle display of content
          const content = item.querySelector('.accordion-content');
          if (content.style.display === 'block') {
              content.style.display = 'none';
          } else {
              content.style.display = 'block';
          }
      });
  });
});
