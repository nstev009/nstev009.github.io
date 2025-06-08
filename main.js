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
  
  // Resume modal logic
  const resumeTrigger = document.getElementById('resume-trigger');
  const resumeModalBg = document.getElementById('resume-modal-bg');
  const resumeModalClose = document.getElementById('resume-modal-close');

  if (resumeTrigger && resumeModalBg && resumeModalClose) {
    resumeTrigger.addEventListener('click', function() {
      resumeModalBg.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    });
    resumeModalClose.addEventListener('click', function() {
      resumeModalBg.classList.remove('active');
      document.body.style.overflow = '';
    });
    // Optional: close modal when clicking outside content
    resumeModalBg.addEventListener('click', function(e) {
      if (e.target === resumeModalBg) {
        resumeModalBg.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

});

document.addEventListener('DOMContentLoaded', function() {
  // Coming Soon modal logic for case study buttons
  const caseBtns = document.querySelectorAll('.case-btn:not(.service-site-btn)');
  const comingSoonModalBg = document.getElementById('coming-soon-modal-bg');
  const comingSoonModalClose = document.getElementById('coming-soon-modal-close');
  
  if (caseBtns.length > 0 && comingSoonModalBg && comingSoonModalClose) {
    // Add click event to all case buttons except the first one
    caseBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        comingSoonModalBg.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
      });
    });
    
    // Close modal when clicking the close button
    comingSoonModalClose.addEventListener('click', function() {
      comingSoonModalBg.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside the modal content
    comingSoonModalBg.addEventListener('click', function(e) {
      if (e.target === comingSoonModalBg) {
        comingSoonModalBg.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});

const serviceSiteBtn = document.querySelector('.service-site-btn');
if (serviceSiteBtn) {
  serviceSiteBtn.addEventListener('click', function() {
    window.open('https://service-site-pied.vercel.app', '_blank'); 
  });
}