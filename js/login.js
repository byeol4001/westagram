const idInput = document.getElementById('idinput');
const pwInput = document.getElementById('pwinput');
const loginButton = document.querySelector('button');


pwInput.addEventListener('keypress', function() {
  if(!idInput.value.length === !pwInput.value.length === false){
    loginButton.style.backgroundColor = '#0094f6'
  }
})


