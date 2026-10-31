const themeToggleBtn = document.getElementById('theme-toggle');

// Kullanıcının daha önceki tema tercihini kontrol et
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggleBtn.textContent = '☀️ Gündüz Modu';
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  let theme = 'light';
  if (document.body.classList.contains('dark-theme')) {
    theme = 'dark';
    themeToggleBtn.textContent = '☀️ Gündüz Modu';
  } else {
    themeToggleBtn.textContent = '🌙 Gece Modu';
  }
  
  localStorage.setItem('theme', theme);
});