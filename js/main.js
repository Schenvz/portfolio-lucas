function toggleDarkMode() {
  const body = document.body;
  const jumbotron = document.querySelector('.jumbotron');
  
  body.classList.toggle('dark-mode');
  jumbotron.classList.toggle('dark-mode-jumbotron');
}