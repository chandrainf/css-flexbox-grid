const arrows = document.querySelector('.left-content');

arrows.addEventListener('click', e => {
     // read the classes
     const menuClass = e.target.classList;
     //  console.log(menuClass);
     // select the containers
     const container = document.querySelector('.app'),
           leftArrow = document.querySelector('.fa-arrow-left'),
           rightArrow = document.querySelector('.fa-arrow-right');

     // hide or show the arrows, and then add/remove the no-menu
     if(menuClass.contains('fa-arrow-left')){
          // clicked on the arrow
          container.classList.add('no-menu');
          // hide the left arrow
          e.target.style.display = 'none';
          // display the right arrow
          rightArrow.style.display = 'block';
     } else if(menuClass.contains('fa-arrow-right')) {
          // remove the no-menu class
          container.classList.remove('no-menu');
          // hide the right arrow
          e.target.style.display = 'none';
          // display the left arrow
          leftArrow.style.display = 'block';
     }
})