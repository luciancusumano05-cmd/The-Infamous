// Caesar shift decoder used by puzzle1
function caesarShift(str, shift) {
return str.replace(/[a-z]/gi, (char) => {
const base = char <= 'Z' ? 65 : 97;
return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
});
}


// Puzzle page logic
const cipherEl = document.querySelector('.cipher');
const checkBtn = document.getElementById('check');
const answerInput = document.getElementById('answer');
const status = document.getElementById('status');
const secretLink = document.getElementById('secretLink');


if (cipherEl) {
const cipherText = cipherEl.innerText.trim();
// the puzzle uses shift -7 to decode (i.e., shift forward by 19)
const decoded = caesarShift(cipherText, 19);


checkBtn.addEventListener('click', () => {
const attempt = answerInput.value.trim();
if (!attempt) { status.innerText = 'Try typing the decoded phrase.'; return; }
if (attempt.toLowerCase() === decoded.toLowerCase()) {
status.innerText = 'Unlocked — welcome.';
secretLink.classList.remove('hidden');
// optionally store flag in localStorage
localStorage.setItem('puzzle1Unlocked', '1');
} else {
status.innerText = 'Not quite — check your shift and try again.';
}
});
}
