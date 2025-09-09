// Знаходимо кнопку по її id
const themeToggleButton = document.getElementById('theme-toggle');
// Знаходимо тег body
const body = document.body;

// Додаємо обробник події "click"
themeToggleButton.addEventListener('click', () => {
    // Перемикаємо CSS-клас 'dark-theme'
    body.classList.toggle('dark-theme');
});