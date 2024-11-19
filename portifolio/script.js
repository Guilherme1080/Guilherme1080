// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
document.body.classList.toggle('light-theme');
});

// Optional light theme styles
document.body.classList.add('dark-theme');
