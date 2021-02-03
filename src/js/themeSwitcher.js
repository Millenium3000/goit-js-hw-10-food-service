const switcher = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switcher.addEventListener('change', setTheme);
switcher.checked = false;

function setTheme() {
  const bodyStyle = document.body.classList.contains(Theme.DARK);
  if (!bodyStyle) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.removeItem('theme', 'dark-theme');
  }
}
setThemeLocal();
function setThemeLocal() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme();
    switcher.checked = true;
  }
}
