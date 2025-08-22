const potato = document.getElementById('potato');
const countDisplay = document.getElementById('count');
const clearBtn = document.getElementById('clear-btn');

potato.addEventListener('mousedown', (e) => e.preventDefault());
// Load saved counter from localStorage
let count = parseInt(localStorage.getItem('count')) || 0;
countDisplay.textContent = count;

// Load click sound
const clickSound = new Audio('assets/click.mp3.mp3');

// Potato click event
potato.addEventListener('click', () => {
  // Add clicked animation
  potato.classList.add('clicked');

  // Swap image
  potato.src = './assets/potato2.png';

  // Play sound
  clickSound.currentTime = 0;
  clickSound.play();

  // Increment counter
  count++;
  countDisplay.textContent = count;

  // Save to localStorage
  localStorage.setItem('count', count);

  // Revert image and animation after 150ms
  setTimeout(() => {
    potato.classList.remove('clicked');
    potato.src = './assets/potato1.png';
  }, 150);
});

// Clear button
clearBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
  localStorage.setItem('count', count);
});
