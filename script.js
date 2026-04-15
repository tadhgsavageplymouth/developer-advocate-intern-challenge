// Image preloading and smooth reveal for task cards
document.addEventListener('DOMContentLoaded', function() {
  // Preload key images for smooth navigation
  const imagesToPreload = [
    'assets/images/post-1.png',
    'assets/images/task2-social-card.png',
    'assets/images/integrations-background-dark.png'
  ];

  // Preload images
  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Handle task card image loading
  const taskImages = document.querySelectorAll('.task-card-image');
  taskImages.forEach(img => {
    if (img.complete) {
      // Image already loaded
      img.classList.add('loaded');
    } else {
      // Wait for image to load
      img.addEventListener('load', function() {
        img.classList.add('loaded');
      });
      // Handle load errors gracefully
      img.addEventListener('error', function() {
        img.classList.add('loaded'); // Still show the frame even if image fails
      });
    }
  });
});
