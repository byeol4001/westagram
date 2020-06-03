
// const loginInput = document.querySelector('#input');
const idInput = document.getElementById('idinput');
const pwInput = document.getElementById('pwinput');
const loginButton = document.querySelector('button');


// loginInput.addEventListener('keypress', function() {
//   loginButton.style.backgroundColor = '#0094f6'
// })



pwInput.addEventListener('keypress', function() {
  if(!idInput.value.length === !pwInput.value.length === false){
    loginButton.style.backgroundColor = '#0094f6'
  }
})



// loginInput.addEventListener('input', function() {
//         loginButton.style.backgroundColor = '#0094f6'
//   });

  // loginButton.addEventListener('click', function() {
  //   // if(!idTyping === !pwTyping === false){
  //   //     loginButton.style.backgroundColor = '#0094f6'
  //   // }else{
  //   //     loginButton.style.backgroundColor = '#0094f69f'
  //   // }
  //   if(!pwTyping.value === true){
  //       loginButton.style.backgroundColor = '#0094f6'
  //     }

  // });
