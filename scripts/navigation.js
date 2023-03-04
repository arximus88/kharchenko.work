fetch('navigation-aside.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('navigation-aside-element').innerHTML = html;
  });