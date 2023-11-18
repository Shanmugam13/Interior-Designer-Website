const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
  }
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const slideInterval = 3000; // 3 seconds

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, slideInterval);
}

showSlides();

document.getElementById('myForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
  
    if (!name || !phone) {
      alert('Please fill in all fields.');
      event.preventDefault();
    } else if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a 10-digit phone number.');
      event.preventDefault();
    }
  });