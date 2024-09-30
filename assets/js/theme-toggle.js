document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = localStorage.getItem('theme') || 'auto';
    document.documentElement.setAttribute('data-theme', currentTheme);
    loadThemeStylesheet(currentTheme);

    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', function() {
        let theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        loadThemeStylesheet(theme);
    });
});

function loadThemeStylesheet(theme) {
    const existingLink = document.getElementById('theme-stylesheet');
    if (existingLink) {
        existingLink.remove();
    }
    const link = document.createElement('link');
    link.id = 'theme-stylesheet';
    link.rel = 'stylesheet';
    link.href = `/assets/css/colors-${theme}.css`;
    document.head.appendChild(link);
}