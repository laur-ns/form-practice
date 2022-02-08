let passwordLeft = document.querySelector('.password-left');
let passwordRight = document.querySelector('.password-right');
let passwordError = document.querySelector('.password-error > .content');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  if (passwordLeft.value !== passwordRight.value) {
    e.preventDefault();
    passwordLeft.classList.add('error');
    passwordRight.classList.add('error');
    passwordError.style.display = 'block';
    return;
  }
});