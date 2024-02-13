const toggleThemeBtn = document.querySelector('.header__theme-button');

document.onload = setInitialTheme(localStorage.getItem('theme'));
// Theme 유지하기
function setInitialTheme(themeKey) {
    if (themeKey === 'dark') {
        document.documentElement.classList.add('darkTheme');
    } else {
        document.documentElement.classList.remove('darkTheme');
    }
}

toggleThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('darkTheme');

    // Theme 유지하기
    if (document.documentElement.classList.contains('darkTheme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
})