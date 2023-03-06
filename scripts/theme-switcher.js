const toggleSwitches = document.querySelectorAll('.mode-toggle');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitches.forEach(function(toggleSwitch) {
  toggleSwitch.addEventListener('change', switchTheme);

  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark' && toggleSwitch.checked !== true) {
      toggleSwitch.checked = true;
    }
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleSwitch.checked = true;
  }
});
