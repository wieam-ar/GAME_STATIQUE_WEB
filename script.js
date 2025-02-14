const slider = document.getElementById('slider');
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 3;
  if (scrollAmount >= slider.scrollWidth / 2) {
    scrollAmount = 0;
  }
  slider.style.transform = `translateX(-${scrollAmount}px)`;
}

setInterval(autoScroll, 100);