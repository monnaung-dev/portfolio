/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });

    //
    
    
	//name-animate
const nameAnimation = document.getElementById('name-animation');
const name = 'MON NAUNG'; // Replace with your name
let i = 0;
let delay = 300;

function addLetter() {
  nameAnimation.textContent += name[i];
  i++;
  if (i === name.length) {
    delay = 1000;
  }
  setTimeout(function() {
    if (i < name.length) {
      addLetter();
    }
  }, delay);
}

addLetter();



// pointer-animate
// const pointer = document.getElementById('pointer');

// function movePointer(event) {
//   const x = event.clientX;
//   const y = event.clientY;
//   pointer.style.transform = `translate(${x}px, ${y}px)`;
// }
// function togglePointer() {
//   pointer.classList.add('active');
//   setTimeout(() => {
//     pointer.classList.remove('active');
//   }, 200);
// }
// window.addEventListener('mousemove', movePointer);
// window.addEventListener('click', togglePointer);

//image-animate
// const image = document.getElementById('my-image');

// let time = 0;
// function animateImage() {
//   time += 0.01;
//   const x = 50 * Math.sin(time); // calculate the horizontal position of the image
//   const y = 50 * Math.cos(time); // calculate the vertical position of the image
//   image.style.transform = `translate(${x}px, ${y}px)`; // move the image to the calculated position
//   requestAnimationFrame(animateImage); // call the function again on the next frame
// }

// animateImage(); // start the animation automatically

//section-animate
const sections = document.querySelectorAll('.section');
function animateSections() {
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight && sectionBottom > 0) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  }
}
animateSections(); // animate sections that are already visible on page load
window.addEventListener('scroll', animateSections);


});