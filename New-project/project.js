// Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});

// Image Hover Effect for Gallery
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
  image.addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s';
  });
  image.addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
  });
});

// Lightbox Effect for Image Gallery
const lightboxImages = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100vw';
lightbox.style.height = '100vh';
lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
lightbox.style.display = 'none';
lightbox.style.alignItems = 'center';
lightbox.style.justifyContent = 'center';
lightbox.style.zIndex = '1000';

const lightboxImg = document.createElement('img');
lightboxImg.style.maxWidth = '90%';
lightboxImg.style.maxHeight = '90%';
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightboxImages.forEach(image => {
  image.addEventListener('click', () => {
    lightboxImg.src = image.src;
    lightbox.style.display = 'flex';
  });
});

// Toggle "QUICK RECAP" Section
const recapSection = document.getElementById('recap');
const recapToggleButton = document.createElement('button');
recapToggleButton.textContent = 'Toggle Quick Recap';
recapToggleButton.style.padding = '10px';
recapToggleButton.style.cursor = 'pointer';

document.querySelector('main').insertBefore(recapToggleButton, recapSection);
recapToggleButton.addEventListener('click', () => {
  recapSection.classList.toggle('hidden');
  if (recapSection.classList.contains('hidden')) {
    recapToggleButton.textContent = 'Show Quick Recap';
  } else {
    recapToggleButton.textContent = 'Hide Quick Recap';
  }
});

// CSS for Hidden Recap Section
const style = document.createElement('style');
style.textContent = `
  .hidden {
    display: none;
  }
`;
document.head.appendChild(style);

