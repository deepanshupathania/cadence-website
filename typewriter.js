// Typewriter effect for hero headline (loop every 5 seconds)
const text = 'Write Like a Leader';
const el = document.getElementById('typewriter');
let i = 0;
function type() {
  if (!el) return;
  el.textContent = text.slice(0, i);
  i++;
  if (i > text.length) {
    setTimeout(() => {
      i = 0;
      type();
    }, 2000);
  } else {
    setTimeout(type, 120);
  }
}
type(); 