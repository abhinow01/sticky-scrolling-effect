const carousel = document.querySelector('.carousel');
const content = document.querySelector('.content');
const additionalContent = document.querySelector('.additional-content');
const welcomeSection = document.querySelector('.sticky-content');

let scrolling = false;

document.addEventListener('wheel', (event) => {
  if (scrolling) return;

  const carouselBottom = carousel.offsetTop + carousel.offsetHeight;
  const carouselTop = carousel.offsetTop;
  const scrollPosition = window.scrollY;
  const cursorInWelcomeSection = event.clientY < welcomeSection.getBoundingClientRect().bottom;
  const carouselFullyScrolled = scrollPosition >= carouselTop && scrollPosition <= carouselBottom;

  if (!cursorInWelcomeSection && !carouselFullyScrolled) {
    scrolling = true;
    event.preventDefault();
    const direction = event.deltaY > 0 ? 'down' : 'up';

    if (direction === 'down') {
      carousel.scrollTo({ top: carousel.scrollHeight, behavior: 'smooth' });
      setTimeout(() => {
        window.scrollBy({ top: event.deltaY, behavior: 'smooth' });
        scrolling = false;
      }, 400);
    } else {
      window.scrollTo({ top: carouselTop, behavior: 'smooth' });
      setTimeout(() => {
        carousel.scrollTo({ top: 0, behavior: 'smooth' });
        scrolling = false;
      }, 400);
    }
  }
});
