// validate the inputs
const inputs = document.querySelectorAll('form .field input');

// listener for the inputs
inputs.forEach(input => {
     input.addEventListener('blur', validateInput);
     input.addEventListener('input', validateInput);
});


function validateInput(e) {
     // console.log(e.target.id);

     // array of states
     const states = ['valid', 'not-valid'];

     let classes;

     if(e.target.value.length === 0 ){
          // input is empty, fire an alert
          classes = states[1];
     } else {
          classes = states[0];
     }

     console.log(classes);

     // remove the previous class
     e.target.nextElementSibling.classList.remove(...states);

     // add the new class
     e.target.nextElementSibling.classList.add(classes);

     // generate or remove the alert
     if(classes === 'not-valid') {
          // in the case that the alert doesn't exists, add an alert
          if(e.target.parentElement.nextElementSibling.classList[0] !== 'alert' ) {
               const errorDiv = document.createElement('div');
               errorDiv.appendChild(document.createTextNode('This field is mandatory'));
               errorDiv.classList.add('alert');
     
               console.log(errorDiv);
     
               // inject the error inside the dom, before the next field
               e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
          }
     } else {
          // the input has something
          if(e.target.parentElement.nextElementSibling.classList[0] === 'alert' ) {
               // only run when the alert exists
               e.target.parentElement.nextElementSibling.remove();
          }
     }

}

// Show or hide the password
const togglePassword = document.querySelector('.toggle-password');
togglePassword.addEventListener('click', e => {

     const passwordInput = document.querySelector('#password');

     // check if the show class exists on the span element
     if(e.target.classList.contains('show')) {
          // add a show class
          e.target.classList.remove('show');
          // change the text for the span to Hide
          e.target.textContent = 'Hide';
          // change the type of the input to text
          passwordInput.type = 'text';
     } else {
          // add a show class
          e.target.classList.add('show');
          // change the text for the span to Show
          e.target.textContent = 'Show';
          // change the type of the input to password
          passwordInput.type = 'password';
     }

})