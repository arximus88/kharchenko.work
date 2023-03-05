const toggleSwitch = document.querySelector('#mode-toggle');
const bgVideo = document.querySelector('#bg-video');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    bgVideo.setAttribute('src', 'media/bg-vid-dark_1.webm');
    bgVideo.setAttribute('type', 'video/webm');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    bgVideo.setAttribute('src', 'media/bg-vid-light_1.webm');
    bgVideo.setAttribute('type', 'video/webm');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    bgVideo.setAttribute('src', 'media/bg-vid-dark_1.webm');
    bgVideo.setAttribute('type', 'video/webm');
  } else {
    bgVideo.setAttribute('src', 'media/bg-vid-light_1.webm');
    bgVideo.setAttribute('type', 'video/webm');
  }
} 
else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleSwitch.checked = true;
    bgVideo.setAttribute('src', 'media/bg-vid-dark_1.webm');
    bgVideo.setAttribute('type', 'video/webm');
}
