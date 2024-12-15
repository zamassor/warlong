// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// when hamburger menu is clicked
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click outside sidebar to hide nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const carouselTrack = document.querySelector(".carousel-track");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-btn.prev");
const nextButton = document.querySelector(".carousel-btn.next");

let currentIndex = 0;

// Function to update the carousel's position
function updateCarousel() {
  const itemWidth = carouselItems[0].clientWidth;
  carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Next button event
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

// Previous button event
prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

// Update the carousel on window resize to maintain responsiveness
window.addEventListener("resize", updateCarousel);
