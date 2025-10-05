function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  var scrollPosition =
    element.getBoundingClientRect().top + window.pageYOffset - 150;
  smoothScrollTo(scrollPosition, 600);
}

function smoothScrollTo(targetY, duration) {
  const startY = window.scrollY || document.documentElement.scrollTop;
  const distance = targetY - startY;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

