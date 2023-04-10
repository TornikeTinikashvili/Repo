// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")
    
//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if(newIndex < 0) newIndex = slides.children.length - 1
//     if(newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// });
// document.body.style.backgroundColor="grey";
// let sideNav = document.getElementById('navig');
// let activeNav = document.querySelector('.sidenav');
// activeNav.style.backgroundColor = 'red';

// sideNav.addEventListener('click', () => {
//     activeNav.classList.toggle('active')
// })

// let isResizing = false;
// let startX;
// let currentWidth;

// document.querySelector('#div2').addEventListener('mousedown', e => {
//   isResizing = true;
//   startX = e.pageX;
//   currentWidth = document.querySelector('#div1').offsetWidth;
// });

// document.addEventListener('mousemove', e => {
//   if (!isResizing) return;
//   const diff = e.pageX - startX;
//   document.querySelector('#div1').style.width = `${currentWidth + diff}px`;
// });

// document.addEventListener('mouseup', () => {
//   isResizing = false;
// });


var rightButtons = document.querySelectorAll('.right-button'); // Select all right buttons
rightButtons.forEach(function(rightButton) {
  rightButton.addEventListener('click', function(event) {
    var parentDiv = event.target.closest('.cont').querySelector('.x400');
    //var vw = window.innerWidth * 0.00005; // Calculate 10% of the viewport width
    parentDiv.scrollBy({
      left: 1, // Scroll width of parent div to the right
      behavior: 'smooth' // Add smooth scrolling behavior
    });
  });
});

var leftButtons = document.querySelectorAll('.left-button'); // Select all right buttons
leftButtons.forEach(function(leftButton) {
  leftButton.addEventListener('click', function(event) {
    var parentDiv = event.target.closest('.cont').querySelector('.x400');
    var vw = window.innerWidth * 0.00005; // Calculate 10% of the viewport width
    parentDiv.scrollBy({
      left: -vw, // Scroll width of parent div to the right
      behavior: 'smooth' // Add smooth scrolling behavior
    });
  });
});



