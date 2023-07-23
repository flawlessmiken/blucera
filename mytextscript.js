 // JavaScript to animate the list items one at a time with a scrolling transition
 const listItems = document.querySelectorAll('.list-item');
 let currentItem = 0;

 function showNextItem() {
     listItems[currentItem].classList.remove('active');
     currentItem = (currentItem + 1) % listItems.length;
     listItems[currentItem].classList.add('active');

     // Scroll the active item into view
     const listContainer = document.querySelector('.list-container');
     const activeItem = listItems[currentItem];
     listContainer.scrollTop = activeItem.offsetTop;

     listContainer.style.height = listItems[currentItem].offsetHeight + 'px';
 }

 // Call the function to start the animation
 setInterval(showNextItem, 2000); 