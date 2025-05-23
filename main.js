function showInfo(text) {
  document.getElementById('modal-text').textContent = text;
  document.getElementById('modal').style.display = 'block';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// // Infinite scroll: append new sections as you reach the bottom
// window.addEventListener('scroll', function() {
//   const scrollY = window.scrollY;
//   const docHeight = document.body.scrollHeight;
//   const winHeight = window.innerHeight;
//   // If near the bottom, append another set of sections
//   if (scrollY + winHeight >= docHeight - 10) {
//     appendSections();
//   }
// });

// function appendSections() {
//   // Clone all main sections except nav and modal
//   const mainSections = document.querySelectorAll('section');
//   mainSections.forEach(section => {
//     const clone = section.cloneNode(true);
//     // Optionally, add a class to indicate it's a clone
//     clone.classList.add('cloned-section');
//     document.body.appendChild(clone);
//   });
// }

document.addEventListener('DOMContentLoaded', function() {
  const workBtns = document.querySelectorAll('.work-btn');
  const workDesc = document.querySelector('.work-desc p');
  const defaultText = workDesc.textContent; // Save default text
  const workLines = [
    "My first step is always to gather user needs and do research into how I can implement their vision.",
    "Then, I define a functional rubric for how I can get from user needs to a realistic end product.",
    "Next, I take a paper and pen and sketch out my initial ideas for the look. This will change from the start, but it is helpful nonetheless.",
    "Once I know the general look and feel of my project, I'll create some rough prototypes. There's no need for specific tweaking, the goal is to bring the sketch to life.",
    "After the project is functional, I do tests to ensure the user's needs are met.",
    "Lastly, I repeatedly iterate to polish the project. This normally includes specific fonts, colours, etc. This step is important for ensuring the feel is seamless."
  ];
  
  workBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (!isNaN(idx) && workLines[idx]) {
        workDesc.textContent = workLines[idx];
        
        // Mark this button as active
        workBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
  
  // Listen for clicks on the document
  document.addEventListener('click', function(event) {
    // If click wasn't on a work button or its children
    if (!event.target.closest('.work-btn')) {
      // Reset to default
      workBtns.forEach(btn => btn.classList.remove('active'));
      workDesc.textContent = defaultText;
    }
  });
});