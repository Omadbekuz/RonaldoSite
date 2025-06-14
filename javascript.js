const video = document.getElementById('cr7-video');
const images = document.querySelectorAll('.image-gallery img');

// Dastlab video default classga ega
video.classList.add('default-size');

// Rasm ustiga hover qilinsa — video kichiklashadi
images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    video.classList.remove('default-size');
    video.classList.add('shrink');
  });

  img.addEventListener('mouseleave', () => {
    video.classList.remove('shrink');
    video.classList.add('default-size');
  });
});
