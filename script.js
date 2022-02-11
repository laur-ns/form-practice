const form = document.querySelector('form');
form.addEventListener('submit', e => {
  const pass1 = document.querySelector('#pass');
  const pass2 = document.querySelector('#confirm-pass');
  const errorMsg = document.querySelector('.pass-error-msg');
  if (pass1 !== pass2) {
    e.preventDefault();
    pass1.classList.add('error');
    pass2.classList.add('error');
    errorMsg.style.display = 'block';
  }
});