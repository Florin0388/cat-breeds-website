// Array cu imaginile de fundal
const backgrounds = [
    'url(cat-cover.webp)',
    'url(cat-6.webp)',
    'url(cat-1.webp)',
    'url(cat-3.webp)',
    'url(cat-5.webp)'
];

// Indicele imaginii curente
let currentIndex = 0;

// Elemente HTML pentru butoane și secțiunea hero
const hero = document.querySelector('.hero');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

// Funcție pentru a actualiza fundalul
function updateBackground() {
    hero.style.backgroundImage = backgrounds[currentIndex];
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
}

// Event listener pentru butonul Next
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % backgrounds.length;  
    updateBackground();
});

// Event listener pentru butonul Back
backBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;  
    updateBackground();
});

// Inițializează fundalul la prima imagine
updateBackground();

// afisare dinamic anul curent
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Selectăm butonul hamburger și meniul
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Adăugăm un event listener pentru butonul hamburger
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');  // Toggle clasa 'active' pentru meniu
});









  

