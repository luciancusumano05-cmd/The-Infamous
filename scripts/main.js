// Small UX bits for index
document.getElementById('year').innerText = new Date().getFullYear();
const btn = document.getElementById('enterBtn');
btn.addEventListener('click', () => {
// subtle animation, then go to lore
btn.classList.add('pressed');
setTimeout(() => window.location.href = 'lore.html', 500);
});
