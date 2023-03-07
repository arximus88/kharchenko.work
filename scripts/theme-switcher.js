// const toggleSwitches = document.querySelectorAll('.mode-toggle');

// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('theme', 'light');
//   }
// }

// toggleSwitches.forEach(function(toggleSwitch) {
//   toggleSwitch.addEventListener('change', switchTheme);

//   const currentTheme = localStorage.getItem('theme');

//   if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
//     if (currentTheme === 'dark' && toggleSwitch.checked !== true) {
//       toggleSwitch.checked = true;
//     }
//   } else {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark');
//     toggleSwitch.checked = true;
//   }
// });

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
const toggleSwitches = document.querySelectorAll('.mode-toggle');


function updateActiveTheme() {
  const currentTheme = localStorage.getItem('theme') || '';
  dropdownItems.forEach(item => {
    const theme = item.dataset.theme || '';
    if (theme === currentTheme) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

dropdownItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const theme = item.dataset.theme || '';
    switchTheme(theme);
    updateActiveTheme();
  });
});


function switchTheme(theme) {
  switch (theme) {
    case 'dark':
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      break;
    case 'light':
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      break;
    case 'system':
      let system_theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
      document.documentElement.setAttribute('data-theme', system_theme);
      localStorage.removeItem('theme');
      break;
  }
  updateDropdownIcon(theme);

}

function updateDropdownIcon(theme) {
  const icon = document.querySelector('.dropdown-toggle .icon');
  icon.classList.remove('i-dark-theme', 'i-light-theme', 'i-default-theme');
  switch (theme) {
    case 'dark':
      icon.classList.add('i-dark-theme');
      break;
    case 'light':
      icon.classList.add('i-light-theme');
      break;
    case 'system':
      icon.classList.add('i-default-theme');
      break;
  }
}

toggleSwitches.forEach(function(toggleSwitch) {
  toggleSwitch.addEventListener('change', () => {
    const theme = toggleSwitch.checked ? 'dark' : 'light';
    switchTheme(theme);
    updateActiveTheme();
  });


  
  dropdownItems.forEach((item) => {
    item.addEventListener('click', () => {
      const selectedTheme = item.dataset.theme;
      switchTheme(selectedTheme);
    });
  });
  
 
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (!localStorage.getItem('theme')) switchTheme("system")
});

if (!localStorage.getItem('theme')) switchTheme("system")
else switchTheme(localStorage.getItem('theme'))
