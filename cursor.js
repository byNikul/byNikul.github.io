const cursor = document.getElementById('custom-cursor');
const coords = cursor ? cursor.querySelector('.cursor-coords') : null;
let moveTimeout;

// Check if device supports hover before attaching mouse events
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && cursor) {
  document.addEventListener('mousemove', (e) => {
    // Move cursor (offsetting by half of width/height to center it)
    const isHover = cursor.classList.contains('is-hover');
    const offset = isHover ? 16 : 4; 
    cursor.style.transform = `translate3d(${e.clientX - offset}px, ${e.clientY - offset}px, 0)`;
    
    // Update coordinates
    if (coords) {
      coords.textContent = `X: ${e.clientX} Y: ${e.clientY}`;
    }
    
    // Add moving class
    cursor.classList.add('is-moving');
    
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => {
      cursor.classList.remove('is-moving');
    }, 100);
  });

  // Interactive elements hover state
  const addHover = () => cursor.classList.add('is-hover');
  const removeHover = () => cursor.classList.remove('is-hover');

  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    // Check if target or its ancestors are interactive
    if (target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive') ||
        target.classList.contains('filter') ||
        target.closest('.project-card')) {
      addHover();
    } else {
      removeHover();
    }
  });
}
