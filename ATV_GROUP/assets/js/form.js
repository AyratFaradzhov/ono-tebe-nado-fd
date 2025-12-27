const section = document.getElementById("cardSection");
const track = document.querySelector(".card__candy");
const items = document.querySelectorAll(".card__candy-item");

const prevBtn = document.querySelector(".pagination__arrow:first-child");
const nextBtn = document.querySelector(".pagination__arrow:last-child");
const counter = document.querySelector(".pagination__counter");

let currentIndex = 0;
const total = items.length;

function updateCounter() {
  counter.textContent = `${String(currentIndex + 1).padStart(
    2,
    "0"
  )} / ${String(total).padStart(2, "0")}`;
}

function updateBackground() {
  section.className = "card";
  section.classList.add(items[currentIndex].dataset.bg);
}

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateCounter();
  updateBackground();
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < total - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

updateCarousel();
