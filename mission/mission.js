const themeSelector = document.querySelector('select');

themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
  const selectedTheme = themeSelector.value;
  const body = document.body;
  const logo = document.getElementById('logo');

  if (selectedTheme === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo_white.png';
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp';
  }
}