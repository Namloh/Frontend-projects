
const slider = document.querySelector('.grid-row');
const rangeInput = document.querySelector('input[type="range"]');

/*scroll*/
const gridContainer = document.querySelector('.grid-container');
const sliderr = document.getElementById('inslider');


let scrollPosition = 0;
let isDragging = false;
let startX;
let startScrollLeft;
let previousX;
let previousScrollLeft;
let velocity = 0;
let rafId;

gridContainer.addEventListener('mousedown', (event) => {
  isDragging = true;
  startX = event.clientX;
  startScrollLeft = gridContainer.scrollLeft;
  previousX = startX;
  previousScrollLeft = startScrollLeft;
  gridContainer.classList.add('dragging');
  cancelAnimationFrame(rafId);
});

gridContainer.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  event.preventDefault();
  const x = event.clientX;
  const distance = x - startX;
  const newScrollLeft = startScrollLeft - distance;
  gridContainer.scrollLeft = newScrollLeft;
  velocity = gridContainer.scrollLeft - previousScrollLeft;
  previousX = x;
  previousScrollLeft = gridContainer.scrollLeft;
});

gridContainer.addEventListener('mouseup', () => {
  isDragging = false;
  gridContainer.classList.remove('dragging');
  requestAnimationFrame(slide);
});

gridContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  gridContainer.classList.remove('dragging');
  requestAnimationFrame(slide);
});

function slide() {
  if (window.innerWidth >= 992) {
    velocity *= 0.9;
    gridContainer.scrollLeft += velocity;
    if (Math.abs(velocity) > 0.5) {
      rafId = requestAnimationFrame(slide);
    }
  }
}

sliderr.addEventListener('input', () => {
  scrollPosition = sliderr.value / 1000 * (gridContainer.scrollWidth - gridContainer.clientWidth);
  gridContainer.scrollLeft = scrollPosition;
});

gridContainer.addEventListener('scroll', () => {
  scrollPosition = gridContainer.scrollLeft;
  sliderr.value = scrollPosition / (gridContainer.scrollWidth - gridContainer.clientWidth) * 1000;
});
