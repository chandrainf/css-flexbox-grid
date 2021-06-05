// select the floating button in the UI

const floatingBTN = document.querySelector('.footerBtn');

// attach an event listener
floatingBTN.addEventListener('click', e => {
     // select the footer
     const footer = document.querySelector('.footer');
    
     // check if the class exists (active) then remove
     if(footer.classList.contains('active')) {
          // remove the class
          footer.classList.remove('active');
          // return the original text
          e.target.innerText = 'Terms, Privacy, Currency & more';
     } else {
          // we add the active class to the footer
          footer.classList.add('active');

          // add the close text
          e.target.innerText = 'X Close';
     }
     

     
})