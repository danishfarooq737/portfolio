
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark');
            body.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            if (themeToggle) themeToggle.textContent = '☀️ Dark';
        } else {
            body.classList.add('light');
            body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            if (themeToggle) themeToggle.textContent = '🌙 Light';
        }
    }
    
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }
    
    loadTheme();
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (body.classList.contains('dark')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }
});