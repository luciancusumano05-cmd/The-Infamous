// Minimal Firebase Auth flow (replace config object with your Firebase project)
// NOTE: To use this file you must add Firebase SDK script tags and initialize the app.


// Example usage instructions are in README. This file only shows logic.


async function initAuth() {
// assume firebase/app and firebase/auth are loaded
const emailEl = document.getElementById('email');
const passEl = document.getElementById('password');
const signup = document.getElementById('signup');
const signin = document.getElementById('signin');
const signout = document.getElementById('signout');
const authStatus = document.getElementById('authStatus');
const memberArea = document.getElementById('memberArea');
const authUI = document.getElementById('authUI');
const memberName = document.getElementById('memberName');


if (!window.firebase) {
authStatus.innerText = 'Firebase is not loaded. See README to configure.';
return;
}


const auth = firebase.auth();


signup.addEventListener('click', async () => {
try {
const userCred = await auth.createUserWithEmailAndPassword(emailEl.value, passEl.value);
authStatus.innerText = 'Registered. Welcome.';
} catch (e) {
authStatus.innerText = e.message;
}
});


signin.addEventListener('click', async () => {
try {
const userCred = await auth.signInWithEmailAndPassword(emailEl.value, passEl.value);
authStatus.innerText = 'Signed in.';
} catch (e) {
authStatus.innerText = e.message;
}
});


signout.addEventListener('click', async () => {
await auth.signOut();
});


auth.onAuthStateChanged(user => {
if (user) {
authUI.classList.add('hidden');
memberArea.classList.remove('hidden');
memberName.innerText = user.email.split('@')[0];
} else {
authUI.classList.remove('hidden');
memberArea.classList.add('hidden');
}
});
}


window.addEventListener('DOMContentLoaded', initAuth);
