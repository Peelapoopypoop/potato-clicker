const potato = document.getElementById('potato');
const countDisplay = document.getElementById('count');
const clearBtn = document.getElementById('clear-btn');

potato.addEventListener('mousedown', (e) => e.preventDefault());

let count = parseInt(localStorage.getItem('count')) || 0;
countDisplay.textContent = count;


const clickSound = new Audio('assets/click.mp3.mp3');


potato.addEventListener('click', () => {

  potato.classList.add('clicked');


  potato.src = './assets/potato2.png';


  clickSound.currentTime = 0;
  clickSound.play();


  count++;
  countDisplay.textContent = count;


  localStorage.setItem('count', count);

 
  setTimeout(() => {
    potato.classList.remove('clicked');
    potato.src = './assets/potato1.png';
  }, 150);
});


clearBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
  localStorage.setItem('count', count);
});
